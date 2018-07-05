const express = require('express');
const Group = require('../models/Group');
const auth = require('../middleware/auth');
const Reader = require('../models/Reader');
const permit = require('../middleware/permit');

const createRouter = () => {
const router = express.Router();

  router.get('/', [auth, permit('admin','librarian')], async (req, res) => {
    try {
      const groups = await Group.find({});
      if (groups) res.send(groups);
    } catch (e) {
      res.status(400).send({message: "Группы не найдены"})
    }
  });

  router.delete('/:id', [auth, permit('admin')], async (req, res) => {
    const id = req.params.id;

    try {
      const currentGroup = await Reader.find({groupId: id});
      if (currentGroup.length > 0) {
        res.status(400).send({error: "Нельзя удалить группу, которая используется"});

      } else {
        await Group.deleteOne({_id: id});
        res.send({message: "Группа успешно удалена"});
      }
    } catch (e) {
      return res.status(400).send({message: "Нельзя удалить группу"});
    }
  });

  router.post('/', [auth, permit('admin')], async (req, res) => {
    if (req.body.name === '') {
      return res.status(400).send({message: 'Поле не должно быть пустым!'});
    }

    try {
      const isGroupExist = await Group.findOne({name: req.body.name});
      if (isGroupExist) {
        return res.status(400).send({error: 'Такая группа уже существует'});
      }
    } catch (e) {
      return res.status(400).send({error: e});
    }


    try {
      const newGroup = new Group({name: req.body.name});
      const group =  await newGroup.save();
      if (group) res.send({message: "Группа успешно добавлена", group});
    } catch (e) {
      return res.status(400).send({error: 'Ошибка! Не удалось добавить группу'});
    }

  });

  return router;
};

module.exports = createRouter;