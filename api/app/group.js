const express = require('express');
const Group = require('../models/Group');
const auth = require('../middleware/auth');
const Reader = require('../models/Reader');
const permit = require('../middleware/permit');



const router = express.Router();

const createRouter = () => {

    router.get('/', [auth, permit('admin','employee')], (req, res) => {
        Group.find().then(results => {
            res.send(results)
        }).catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin')], async (req, res) => {
        const id = req.params.id;
        const currentGroup = await Reader.findOne({groupId: id});
        console.log(currentGroup);
        if (currentGroup)
            res.sendStatus(400).send({message: "The group is not empty"});
        await Group.deleteOne({_id: id});
        res.send({message: "Success"});

    });

    router.post('/', [auth, permit('admin')], (req, res) => {
        const newGroup = new Group({name: req.body.groupName});
        console.log(newGroup);
        newGroup.save().then(response => {
            res.send(newGroup);
        }, error => {
            res.sendStatus(400).send(error);
        });
    });

    return router;
};

module.exports = createRouter;