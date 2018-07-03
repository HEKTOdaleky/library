const express = require('express');
const Group = require('../models/Group');
const auth = require('../middleware/auth');
const Reader = require('../models/Reader');
const permit = require('../middleware/permit');

const createRouter = () => {
const router = express.Router();

  router.get('/', [auth, permit('admin','librarian')], async (req, res) => {
    try {
      const groups = await Group.find();
      if (groups) res.send(groups);
    } catch (e) {
      res.status(400).send({message: "Группы не найдены"})
    }
  });

  router.delete('/:id', [auth, permit('admin')], async (req, res) => {
    const id = req.params.id;
    const currentGroup = await Reader.findOne({groupId: id});
    if (currentGroup)
      res.sendStatus(400).send({message: "Поле не должно быть пустым!"});
    await Group.deleteOne({_id: id});
    res.send({message: "Success"});
  });

  router.post('/', [auth, permit('admin')], async (req, res) => {
    if (req.body.name === '') {
      return res.status(400).send({message: 'Поле не должно быть пустым!'});
    }

    const isGroupExist = await Group.findOne({name: req.body.name});

    if (isGroupExist) {
      return res.status(400).send({message: 'Такая группа уже существует'});
    }

    const newGroup = new Group({name: req.body.name});

    newGroup.save().then(() => {
      res.send(newGroup);
    }).catch(() => {
      res.status(400).send({message: 'Ошибка! Не удалось добавить группу'});
    });
  });

  return router;
};

module.exports = createRouter;