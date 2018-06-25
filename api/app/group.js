const express = require('express');
const Group = require('../models/Group');
const auth = require('../middleware/auth');


const router = express.Router();

const createRouter = () => {


    router.get('/', auth, (req, res) => {
        Group.find().then(results => {
            res.send(results)
        })
            .catch(() => res.sendStatus(500));

    });

    router.delete('/:id', auth, (req, res) => {
        const id = req.params.id;
        Group.deleteOne({_id: id}).then(results => {
            res.send(results)
        })
            .catch(() => res.sendStatus(500));
    });

    router.post('/', auth, (req, res) => {
        const newGroup = new Group({name: req.body.groupName});
        console.log(newGroup);
        newGroup.save().then(response => {
            res.send(response.data);
        }, error => {
            res.sendStatus(400).send(error);
        });
    });

    return router;
};

module.exports = createRouter;