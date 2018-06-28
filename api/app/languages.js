const express = require('express');
const Language = require('../models/Language');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const Book = require('../models/Book');


const router = express.Router();

const createRouter = () => {

    router.get('/', [auth, permit('admin','employee')], (req, res) => {
        Language.find().then(results => {
            res.send(results)
        }).catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin','employee')], async (req, res) => {
        const id = req.params.id;
        const currentLang = await Book.findOne({language: id});
        console.log(currentLang);
        if (currentLang)
            res.sendStatus(400).send({message: "The language cannot be deleted as long as the books belong to it (с) yandex)"});
        await Language.deleteOne({_id: id});
        res.send({message: "Success"});

    });

    router.post('/', [auth, permit('admin','employee')], (req, res) => {
        const newLang = new Language({title: req.body.language});
        newLang.save().then(response => {
            res.send(newLang);
        }, error => {
            res.sendStatus(400).send(error);
        });
    });

    return router;
};

module.exports = createRouter;