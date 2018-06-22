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
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'onStock',
    enum: ['onStock', 'issued', 'decommissioned']
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;

const r = () => {

}