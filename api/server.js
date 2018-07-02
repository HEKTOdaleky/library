const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

const reader = require('./app/reader');
const books = require('./app/books');
const groups = require('./app/groups');
const categories = require('./app/categories');
const users = require('./app/users');
const language = require('./app/languages');
const bookschange = require('./app/bookschange');
const status = require('./app/status');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(config.db.url + "/" + config.db.name);
mongoose.set('debug', true);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose connected!");

    app.use('/books', books());
    app.use('/reader', reader());
    app.use('/groups', groups());
    app.use('/users', users());
    app.use('/categories', categories());
    app.use('/language', language());
    app.use('/bookschange', bookschange());
    app.use('/status', status());

    app.listen(port, (error) => {

      if (error) return console.error(`Server error ${error}`);
        console.log(`Server started on ${port} port!`);
    });


});

