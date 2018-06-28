const express = require("express");
const Book = require("../models/Book");

const createRouter = () => {
  const router = express.Router();
  //
  // router.get("/", async (req, res) => {
  //   try {
  //     const books = await Book.find();
  //     if (books) {
  //       res.send(books);
  //     }
  //   } catch (error) {
  //     return res.status(500).send({ error });
  //   }
  // });
  
  router.post('/search', async (req, res) => {
    console.log(':________',req.body);
    if (req.body.searchKey === '') {
      res.status(400).send({error: "Поле поиска не должно быть пустым!"});
    }
    try {
      const books = await Book.find({title: {$regex: req.body.searchKey, $options:"$i"}});
      if (books && books.length > 0) {
        res.send(books);
      } else {
        res.status(404).send({message: "По вашему запросу ничего не найдено"})
      }
    } catch (e) {
      res.status(500).send({message: e});
    }
  });

  router.post('/full-search', async (req, res) => {
    const data = {
      title: req.body.title,
      author: req.body.author,
      publishHouse: req.body.publishHouse
    };
    if (data.title === '' && data.author === '' && data.publishHouse === '') {
      res.status(400).send({error: "Поля для поиска не должны быть пустыми!"});
    }
    try {
      const books = await Book.find({$text: {$search: `${data.title} ${data.author} ${data.publishHouse}`}});
      console.log(books);
      if (books) {
        res.send(books);
      } else {
        res.status(404).send({message: 'По вашему запросу ничего не найдено'})
      }
    } catch (e) {
      res.status(500).send({message: e})
    }
  });

  router.post("/", async (req, res) => {
    const bookData = req.body;
    const book = new Book(bookData);
    try {
      await book.save();
    } catch (error) {
      return res.status(400).send({message: error });
    }
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const book = await Book.findById(id);
      if (book) {
        res.send(book);
      } else res.sendStatus(404);
    } catch (error) {
      return res.status(500).send({message: error });
    }
  });

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const bookData = await Book.findById(id);

      if (bookData) {
        const newBookData = await bookData.set({ statusId: req.body.statusId });
        const book = new Book(newBookData);
        await book.save();
        res.send({ message: "Статус книги изменен" });
      } else {
        return res
          .status(400)
          .send({
            message:
              "Не удалось изменить статус книги. Проверьте правильность данных."
          });
      }
    } catch (error) {
      return res.status(500).send({message: error });
    }
  });

  return router;
};

module.exports = createRouter;
