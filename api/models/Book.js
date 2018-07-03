const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
    },
  year:{
    type: Number,
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  statusId: {
    type: Schema.Types.ObjectId,
    ref: 'Status',
    required: true
  },
  publishHouse: {
    type: String,
    required: true
  },
  language: {
    type: Schema.Types.ObjectId,
    ref: 'Language',

  },
  price: {
    type: Number
  }
});


const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
