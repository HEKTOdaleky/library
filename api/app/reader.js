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

  router.post('/',[auth, permit('admin')], auth, async (req, res) => {
    let data = {};
    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    data.document = req.body.document;
    data.group = req.body.group;
    const reader = new Reader(data);

    await reader.save();

    res.send(reader);
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