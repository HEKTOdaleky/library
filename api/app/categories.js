const express = require('express');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
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

  router.post('/', [auth, permit('admin')], async(req, res) => {
    const title = req.body.title;
    if (title === '') {
      return res.status(400).send({message: 'Поле не должно быть пустым!'});
    }

    try {
      const isCategoryExist = await Category.findOne({title});
      if (isCategoryExist) res.status(400).send({error: 'Такая категория уже существует'});
    } catch (e) {
      return res.status(400).send({error: e});
    }

    try {
      const category = new Category({title});
      const newCategory = await category.save();
      if (newCategory) res.send({message: "Категория успешно добавлена"});
    } catch (e) {
      return res.status(400).send({error: 'Ошибка! Не удалось добавить категорию'});
    }

  });

  router.delete('/', auth, (req, res) => {
    Category.findByIdAndDelete(req.body.id)
      .then(() => res.send({message: 'Category removed'}))
      .catch(error => res.status(500).send(error));
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