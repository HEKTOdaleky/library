const express = require('express');

const Category = require('../models/Category');

const createRouter = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const categories = await Category.find();
      if (categories) {
        res.send(categories);
      }
    } catch (error) {
      return res.status(500).send({error});
    }
  });

  router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const category = await Category.find({category: id});
      if (category) {
        res.send(category);
      }
      else res.sendStatus(404);
    } catch (error) {
      return res.status(500).send({error});
    }
  });

  return router;
};

module.exports = createRouter;