const express = require('express');

const User = require('../models/User');
const config = require('../config');
const nanoid = require("nanoid");

const createRouter = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('GET')

    });
    router.post('/', (req, res) => {
        console.log("post");
    });
    router.delete('/', (req, res) => {
        console.log("delete");
    });
    router.put('/', (req, res) => {
        console.log("put");
    });

    return router;
};
module.exports = createRouter;