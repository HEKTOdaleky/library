const express = require('express');
const Language = require('../models/Language');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const Book = require('../models/Book');


const router = express.Router();

const createRouter = () => {

    router.get('/', [auth, permit('admin', 'librarian')], (req, res) => {
        Language.find().then(results => {
            res.send(results)
        }).catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin', 'librarian')], async (req, res) => {
        const id = req.params.id;
        const currentLang = await Book.findOne({language: id});
        if (currentLang)
            res.status(400).send({message: "Язык который используется в доступных книгах не может быть удален"});
        await Language.deleteOne({_id: id});
        res.send({message: "Язык успешно удален"});

    });

    router.post('/', [auth, permit('admin', 'librarian')], async (req, res) => {
        const newLang = new Language({title: req.body.title});

        if (req.body.title === '')
            res.status(400).send({message: 'Поле добавление языка не должно быть пустым!'});
        try {
            await newLang.save();
        } catch (err) {
            return res.status(400).send({error: err});
        }

        res.send({newLang, message: 'Добавление языка издания прошло успешно!'});
    });

    return router;
};

module.exports = createRouter;