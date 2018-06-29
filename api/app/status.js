const express = require('express');
const Status = require('../models/Status');
const auth = require('../middleware/auth');
const Book = require('../models/Book');
const permit = require('../middleware/permit');



const router = express.Router();

const createRouter = () => {

    router.get('/', [auth, permit('admin','employee')], (req, res) => {
        Status.find().then(results => {
            res.send(results)
        }).catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin')], async (req, res) => {
        const id = req.params.id;
        const currentBook = await Book.findOne({statusId: id});
        if (currentBook)
            res.sendStatus(400).send({message: "The status is not empty"});
        await Status.deleteOne({_id: id});
        res.send({message: "Success"});

    });

    router.post('/', [auth, permit('admin')], (req, res) => {
        const newStatus = new Status({name: req.body.statusName, description: req.body.description});
        newStatus.save().then(response => {
            res.send(newStatus);
        }, error => {
            res.sendStatus(400).send(error);
        });
    });

    return router;
};

module.exports = createRouter;