const express = require("express");
const Book = require("../models/Book");
const Status = require("../models/Status");
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const createRouter = () => {
    const router = express.Router();

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
        if (req.body.searchKey === '') {
            res.status(400).send({error: "Поле поиска не должно быть пустым!"});
        }
        try {
            const status = await Status.findOne({name: "В наличии"});
            const books = await Book.find({title: {$regex: req.body.searchKey, $options: "$i"}, statusId: status._id});
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
        if (data.title === '' && data.author === '') {
            res.status(400).send({error: "Поля для поиска не должны быть пустыми!"});
        }

        try {
            const books = await Book.find({$text: {$search: `${data.title} ${data.author} ${data.publishHouse}`}}, {score: {$meta: "textScore"}}).sort({score: {$meta: 'textScore'}});
            if (books && books.length > 0) {
                res.send(books);
            } else {
                res.status(404).send({message: 'По вашему запросу ничего не найдено'})
            }
        } catch (e) {
            res.status(500).send({message: e});
        }
    });

    router.post("/", [auth, permit('admin', 'librarian')], async (req, res) => {
        const bookData = req.body;
        const book = new Book(bookData);
        try {
            const newBook = await book.save();
            if (newBook) res.send({message: "Книга успешно добавлена!"});
        } catch (error) {
            return res.status(400).send({message: "Все поля должны быть заполнены"});
        }

    });

    router.get("/:id",[auth, permit('admin', 'librarian')], async (req, res) => {
        const id = req.params.id;
        try {
            const book = await Book.findById(id);
            if (book) {
                res.send(book);
            } else res.sendStatus(404);
        } catch (error) {
            return res.status(500).send({message: error});
        }
    });


    router.put("/:id", [auth, permit('admin', 'librarian')], async (req, res) => {
        console.log(req.params.id);
        try {
            await Book.findOneAndUpdate({_id: req.body.id}, {$set: {
                title: req.body.title,
                author: req.body.author,
                year: req.body.year,
                categoryId: req.body.categoryId,
                statusId: req.body.statusId,
                publishHouse: req.body.publishHouse,
                language: req.body.language,
                price: req.body.price,
                registerDate: req.body.registerDate
            }});
            res.status(200).send({message: "Данные о книге успешно обновлены!"});
        } catch (error) {
            return res.status(400).send({message: "Изменения не применились!"});
        }
    });

    router.delete("/:id", [auth, permit('admin', 'librarian')], async (req, res) => {

        const id = req.params.id;
        try {
            const bookData = await Book.findById(id);

            if (bookData) {
                const newBookData = await bookData.set({groupId: req.body.groupId});
                const book = new Book(newBookData);
                await book.save();
                res.send({message: "Статус книги изменен"});
            } else {
                return res.status(400).send({ message: "Не удалось изменить статус книги. Проверьте правильность данных." });
            }
        } catch (error) {
            return res.status(500).send({message: error});
        }
    });

  router.get('/barcode/:barcode', [auth, permit('admin', 'librarian')], async(req, res) => {
    try {
      const status = await Status.findOne({name: "В наличии"});
      const book = await Book.findOne({inventoryCode: req.params.barcode, $and: [{statusId: status.id}]}).populate(['statusId', 'categoryId', 'language']);
      if (book) return res.send(book);
      else return res.status(400).send({error: 'Книга с таким штрихкодом не найдена'});
    } catch (e) {
      return res.status(400).send({message: "Не удалось выполнить запрос к БД", e});
    }
  });

    return router;
};

module.exports = createRouter;
