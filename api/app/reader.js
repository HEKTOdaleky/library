const express = require('express');
const nanoid = require("nanoid");

const Reader = require('../models/Reader');
const config = require('../config');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const createRouter = () => {
  const router = express.Router();

  router.get('/', [auth, permit('admin','employee')], (req, res) => {
    Reader.find().then(results => {
      res.send(results)
    })
      .catch(() => res.sendStatus(500));

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

    const reader = new Reader(data);

    try {
      const r = await reader.save();
      if (r) res.send(r);
    } catch (e) {
      res.status(400).send({message: 'Читатель с таким документом уже зарегистрирован'});
    }
  });

  router.delete('/:id', [auth, permit('admin')], async (req, res) => {
    let reader;

    try {
      reader = await Reader.findById(req.params.id)
    }
    catch (error) {
      return res.status(500).send({message: 'Something went wrong'});
    }

    reader.isActive = false;

    await reader.save();

    res.send(reader);
  });

  router.put('/:id',[auth, permit('admin')], auth, async (req, res) => {
    const id = req.params.id;
    let reader;

    try {
      reader = await Reader.findOne({_id: id});
    }
    catch (error) {
      res.status(500).send(error);
    }

    for (let i in req.body) {
      reader[i] ? reader[i] = req.body[i] : null
    }

    await reader.save();

    res.send(reader);
  });

  return router;
};
module.exports = createRouter;