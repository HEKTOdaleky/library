const express = require('express');
const nanoid = require("nanoid");


const Reader = require('../models/Reader');
const config = require('../config');
const auth = require('../middleware/auth');



const createRouter = () => {
    const router = express.Router();

    router.get('/', auth, (req, res) => {
        Reader.find().then(results => {
            res.send(results)
        })
            .catch(() => res.sendStatus(500));

    });


    router.post('/', auth, async (req, res) => {
        let data={};
        data.firstName = req.body.firstName;
        data.lastName = req.body.lastName;
        data.document = req.body.document;
        data.group = req.body.group;
        const reader = new Reader(data);

        await reader.save();




        res.send(reader);
    });
    router.delete('/:id', auth, (req, res) => {
        const id = req.params.id;
        Reader.deleteOne({_id: id}).then(results => {
            res.send(results)
        })
            .catch(() => res.sendStatus(500));
    });
    router.put('/:id', auth, async (req, res) => {
        const id = req.params.id;
        const reader = await Reader.findOne({_id:id});
        if(!reader)
            res.sendStatus(500);
        res.send(id);
    });

    return router;
};
module.exports = createRouter;