const express = require('express');


const Reader = require('../models/Reader');
const config = require('../config');
const nanoid = require("nanoid");

const createRouter = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        Reader.find().then(results => {
            res.send(results)
        })
            .catch(() => res.sendStatus(500));

    });


    router.post('/', (req, res) => {
        const data = req.body;
        res.send(data);
    });
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        console.log(id);
        Reader.deleteOne({_id: id}).then(results => {
            res.send(results)
        })
            .catch(() => res.sendStatus(500));
    });
    router.put('/', (req, res) => {
        const data = req.body;
        res.send(data);
    });

    return router;
};
module.exports = createRouter;