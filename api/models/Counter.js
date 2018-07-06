const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
  bookCode: {
    type: Number,
    min: 0
  },
  readerCode: {
    type: Number,
    min: 0
  }
});

const Counter = mongoose.model("Counter", CounterSchema);

module.exports = Counter;