const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

const reader = require('./app/reader');
const books = require('./app/books');
const group = require('./app/group');
const categories = require('./app/categories');
const bookschange = require('./app/bookschange');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(config.db.url + "/" + config.db.name);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose connected!");

    app.use('/books', books());
    app.use('/reader', reader());
    app.use('/group', group());
    app.use('/categories', categories());
    app.use('/bookschange', bookschange());

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

});