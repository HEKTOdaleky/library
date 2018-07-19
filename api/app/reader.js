const express = require('express');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const Reader = require('../models/Reader');

const createRouter = () => {
  const router = express.Router();

  router.get('/', [auth, permit('admin', 'librarian')], async(req, res) => {
    
    if (req.user.role === 'admin') {
      try {
        const readers = await Reader.find({$and: [{markToRemove: true}, {isActive: true}]}).populate('groupId');
        if (readers.length > 0) res.send(readers);
      } catch (e) {
        return res.status(400).send({message: "Не удалось выполнить запрос к БД", e});
      }
    }
    if (req.user.role === 'librarian') {
      try {
        const readers = await Reader.find({$and: [{isActive: true}, {markToRemove: false}]});
        if (readers.length > 0) res.send(readers);
      } catch (e) {
        return res.status(400).send({message: "Не удалось выполнить запрос к БД", e});
      }
    }
  });

  router.get('/barcode/:barcode', [auth, permit('admin', 'librarian')], async(req, res) => {
    try {
      const reader = await Reader.findOne({inventoryCode: req.params.barcode, $and: [{isActive: true}, {markToRemove: false}]})
      .populate('groupId');
      if (reader) return res.send(reader);
      else return res.status(400).send({error: 'Читатель с таким штрихкодом не найден'});
    } catch (e) {
      return res.status(400).send({message: "Не удалось выполнить запрос к БД", e});
    }
  });

  router.post('/',[auth, permit('admin', 'librarian')], async (req, res) => {

    if (req.body.firstName === '' || req.body.lastName === '' || req.body.documentNumber === '' || req.body.group === '' || req.body.registerDate === '') res.status(400).send({message: "Все поля должны быть заполнены!"});

    let data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      documentNumber: req.body.documentNumber,
      groupId: req.body.groupId,
      registerDate: req.body.registerDate
    };

    try {
      const reader = new Reader(data);
      const savedReader = await reader.save();
      console.log(":________", savedReader);
      if (savedReader) {
        const newReader = await Reader.findOne({_id: savedReader._id}).populate('groupId');
        res.send({message: "Новый читатель успешно добавлен", newReader});
      }
    } catch (e) {
      return res.status(400).send({error: 'Читатель с таким документом уже зарегистрирован'});
    }
  });

  router.delete('/', [auth, permit('admin')], async (req, res) => {
    let data = {
      readers: req.body.readers,
      order: req.body.order
    };

    if (data.order !== '' && data.readers.length > 0) {
      await data.readers.map(async item => {
        try {
          await Reader.findOneAndUpdate({_id: item}, {$set: {isActive: false, comment: data.order }});
        } catch (e) {
          return res.status(500).send({message: 'Ошибка. Не удалось удалить читателя!'});
        }
      });
      res.send({message: "Читатели успешно перенесены в архив"});
    } else
      return res.status(400).send({error: "Хотя бы один читатель должен быть выбран, а поле для номера приказа должно быть заполнено"});
  });

  router.put('/:id', [auth, permit('admin', 'librarian')], async (req, res) => {
    if (req.body.firstName === '' || req.body.lastName === '' || req.body.documentNumber === '')
      return res.status(400).send({message: "Все поля должны быть заполнены"});

    try {
      const existingReader = await Reader.findOne({documentNumber: req.body.documentNumber});

      if (existingReader && existingReader._id.toString() !== req.params.id.toString()) {
        return res.status(400).send({message: "Читатель с таким документом уже зарегистрирован"});
      }

      await Reader.findOneAndUpdate({_id: req.params.id}, {$set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        documentNumber: req.body.documentNumber,
        groupId: req.body.groupId
      }});

      res.status(200).send({message: 'Данные читателя сохранены'});
    } catch (e) {
      return res.status(400).send({message: "Не удалось отредактировать данные читателя", e});
    }
  });

  router.delete('/mark-reader', [auth, permit('librarian')], async (req, res) => {
    let data = {
      readerId: req.body.readerId,
      closeDate: req.body.closeDate
    };

    if (data.readerId) {
        try {
          await Reader.findOneAndUpdate({_id: data.readerId}, {$set: {markToRemove: true, comment: data.closeDate.toString() }});
        } catch (e) {
          return res.status(500).send({message: 'Ошибка. Не удалось отправить читателя на удаление!'});
        }
      res.send({message: "Читатель успешно отправлен на одобрение к удалению!"});
    } else
      return res.status(400).send({error: "Ошибка в обработке данных. Читатель не найден!"});
  });

  return router;
};
module.exports = createRouter;