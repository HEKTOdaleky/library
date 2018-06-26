const express = require("express");
const BookChange = require("../models/BookChange");

const createRouter = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const books = await BookChange.find().sort({dateOfReplacement: -1});
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