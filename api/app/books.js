const express = require("express");

const Book = require("../models/Book");


const router = express.Router();

const createRouter = () => {

  router.get('/', async (req, res) => {
    try {
      const books = await Book.find();
      if (books) {
        res.send(books);
      }
    } catch(error) {
      return res.status(500).send({error});
    }
  });

  router.post('/', async (req, res) => {
    const bookData = req.body;

    bookData.categoryId = req.categoryId._id;

    const book = new Book(bookData);

    try {
      await book.save();
    } catch (error) {
      return res.status(400).send({error});
    }
  });

  router.get('/categories/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const book = await Book.find({category: id});
      if (book) {
        res.send(book);
      }
      else res.sendStatus(404);
    } catch (error) {
      return res.status(500).send({error});
    }
  });


  return router;
};

module.exports = createRouter;