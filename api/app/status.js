const express = require('express');
const Status = require('../models/Status');
const auth = require('../middleware/auth');
const Book = require('../models/Book');
const permit = require('../middleware/permit');


const router = express.Router();

const createRouter = () => {

    router.get('/', [auth, permit('admin', 'librarian')], (req, res) => {
        Status.find().then(results => {
            res.send(results)
        }).catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin')], async (req, res) => {
        const id = req.params.id;
        const currentBook = await Book.findOne({statusId: id});
        if (currentBook)
            res.status(400).send({message: "Невозможно удалить статус, который используется"});
        else {
            await Status.deleteOne({_id: id});
            res.send({message: "Статус успешно удален"});
        }

    });

    router.post('/', [auth, permit('admin')], (req, res) => {
        const newStatus = new Status({name: req.body.name, description: req.body.description});
        newStatus.save().then(response => {
            res.send({newStatus, message: "Статус успешно добавлен!"});
        }, error => {
            res.status(400).send({error, message: "Такой статус уже существует"});
        });
    });

    return router;
};

module.exports = createRouter;