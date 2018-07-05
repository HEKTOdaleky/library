const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Counter = require('./Counter');

const BookSchema = new Schema({
  inventoryCode: {
    type: String
  },
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
  groupId: {
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
    ref: 'Language'
  },
  price: {
    type: Number
  }
});

BookSchema.pre('save', async function (next) {
  if (!this.isNew || this.inventoryCode) return next();

  const counter = await Counter.findOne();
  counter.bookCode = counter.bookCode + 1;
  await counter.save();

  const code = counter.bookCode.toString();
  this.inventoryCode = ('000000' + code).slice(code.length);

  next();
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;