const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const reader = require('./app/reader');
const books = require('./app/books');
const groups = require('./app/groups');
const categories = require('./app/categories');
const users = require('./app/users');
const bookChange = require('./app/bookschange');
const language = require('./app/languages');
const journal = require('./app/journals');
const status = require('./app/status');

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(config.db.url);
// mongoose.set('debug', true);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose connected!");

    app.use('/books', books());
    app.use('/reader', reader());
    app.use('/groups', groups());
    app.use('/users', users());
    app.use('/categories', categories());
    app.use('/language', language());
    app.use('/bookChange', bookChange());
    app.use('/status', status());
    app.use('/journal', journal());

    app.listen(port, (error) => {
      if (error) return console.error(`Server error ${error}`);
        console.log(`Server started on ${port} port!`);
    });


});

