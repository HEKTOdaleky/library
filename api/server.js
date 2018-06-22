const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

const reader = require('./app/reader');
const books = require('./app/books');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(config.db.url + "/" + config.db.name);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose connected!");

    app.use('/books', books());



    app.listen(port, () => {
        app.use('/reader', reader());
        console.log(`Server started on ${port} port!`);
    });

});