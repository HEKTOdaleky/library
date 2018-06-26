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

  router.post('/', async (req, res) => {
    const data = req.body;

    const change = new BookChange({
      oldBookId: data.oldBookId,
      newBookId: data.newBookId,
      readerId: data.readerId,
      dateOfReplacement: data.dateOfReplacement
    });

    try {
      await change.save();
      res.send({message: "Данные по списанной книге добавлены"});
    } catch (error) {
      return res.status(400).send({error});
    }
  });

  return router;
};

module.exports = createRouter;