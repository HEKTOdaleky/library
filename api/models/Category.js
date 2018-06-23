const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    default: 'Учебники',
    enum: [
      'Зарубежная литература',
      'Русская литература',
      'Советская литература',
      'Кыргызская литература',
      'Литература стран СНГ',
      'Cпец. литература',
      'Общеобразовательная литература',
      'Учебники',
      'Педагогика',
      'Приказы',
      'Акты',
      'Кодексы',
      'Энциклопедии',
      'Словари',
      'Разговорники',
      'Справочники',
      'Учебные программы и планы'
    ]
  },
  description: String
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;