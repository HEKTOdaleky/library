const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

const Language = mongoose.model("Language", LanguageSchema);
module.exports = Language;