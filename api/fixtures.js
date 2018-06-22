const mongoose = require('mongoose');
const config = require('./config');

const Category = require('./models/Category');
const Book = require('./models/Book');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropCollection('categories');
    await db.dropCollection('books');
  } catch (e) {
    console.log('Collections were not present, skipping drop...');
  }

  const [textbook, reference] = await Category.create({
    title: 'Учебники',
    description: 'Учебники'
  }, {
    title: 'Справочники',
    description: 'Справочники'
  });

  await Book.create({
    title: 'Таблица Брадиса',
    author: 'Брадис',
    year: 1965,
    categoryId: reference._id
  }, {
    title: 'Учебник по математике 6 класс',
    author: 'В. Пупкин',
    year: 1977,
    categoryId: textbook._id
  }, {
    title: 'Учебник по астрономии 10 класс',
    author: 'John Doe',
    year: 1998,
    categoryId: textbook._id
  }, {
    title: 'Физика. Справочное руководство: для поступающих в ВУЗы',
    author: 'Яворский Б.М.',
    year: 1999,
    categoryId: reference._id
  });

  db.close();
});