const express = require("express");

const Book = require("../models/Book");


const router = express.Router();

const createRouter = () => {

  router.get('/', async (req, res) => {
    try {
      const books = await Book.find().populate('categoryId');
      if (books) {
        res.send(books);
      }
    } catch(error) {
      return res.status(500).send({error});
    }
  });


  return router;
};

module.exports = createRouter;