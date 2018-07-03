const mongoose = require("mongoose");
const config = require("./config");

const Category = require("./models/Category");
const Book = require("./models/Book");
const Reader = require("./models/Reader");
const User = require("./models/User");
const Status = require("./models/Status");
const Group = require("./models/Group");
const Journal = require("./models/Journal");
const Languages = require("./models/Language");

mongoose.connect(config.db.url + "/" + config.db.name);

const db = mongoose.connection;

db.once("open", async () => {
  try {
    await db.dropCollection("status");
    await db.dropCollection("groups");
    await db.dropCollection("categories");
    await db.dropCollection("books");
    await db.dropCollection("readers");
    await db.dropCollection("users");
    await db.dropCollection("journals");
    await db.dropCollection("languages");
  } catch (e) {
    console.log("Collections were not present, skipping drop...");
  }

  const [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14
  ] = await Category.create(
    {
      title: "Зарубежная литература",
      description: "Зарубежная литература"
    },
    {
      title: "Кыргызская литература",
      description: "Кыргызская литература"
    },
    {
      title: "Русская литература",
      description: "Русская литература"
    },
    {
      title: "Литература стран СНГ",
      description: "Литература стран СНГ"
    },
    {
      title: "Советская литература",
      description: "Советская литература"
    },
    {
      title: "Специальная литература, учебники",
      description: "Специальная литература, учебники"
    },
    {
      title: "Общеобразовательная литература",
      description: "Общеобразовательная литература"
    },
    {
      title: "Энциклопедии",
      description: "Энциклопедии"
    },
    {
      title: "Справочники",
      description: "Справочники"
    },
    {
      title: "Педагогика",
      description: "Педагогика"
    },
    {
      title: "Словари",
      description: "Словари"
    },
    {
      title: "Учебные программы и планы",
      description: "Учебные программы и планы"
    },
    {
      title: "Приказы, акты, кодексы",
      description: "Приказы, акты, кодексы"
    },
    {
      title: "Разговорник русско-кыргызский",
      description: "Разговорник русско-кыргызский"
    }
  );

  const [status1, status2, status3] = await Status.create(
    {
      name: "В наличии",
      description: "Книга находится в наличии на полках библиотеки"
    },
    {
      name: "Выдана",
      description:
        "Книга в данный момент выдана на руки студенту или сотруднику"
    },
    {
      name: "Списана",
      description: "Книга списана, и больше не используется в библиотеке"
    }
  );

  const [g1, g2] = await Group.create(
    {
      name: "ПО-1"
    },
    {
      name: "ПО-2"
    }
  );

  const [l1, l2, l3] = await Languages.create(
    {
      title: "Русский"
    },
    {
      title: "Кыргызский"
    },
    {
      title: "Английский"
    },
    {
      title: "Немецкий"
    }
  );

  const [b1, b2, b3, b4] = await Book.create(
    {
      title: "В мире управляющих машин",
      author: "Абчук В.А",
      year: 1987,
      categoryId: c1._id,
      statusId: status1._id,
      publishHouse: "Астра",
      language: l1._id
    },
    {
      title: "Сто лет одиночества",
      author: "Габриэль Гарсиа Маркес",
      year: 2007,
      categoryId: c1._id,
      statusId: status1._id,
      publishHouse: "Азбука-классика",
      language: l1._id
    },
    {
      title: "Над пропастью во ржи",
      author: "Джером Дэвид Сэлинджер",
      year: 1951,
      categoryId: c1._id,
      statusId: status1._id,
      publishHouse: "Эксмо-пресс",
      language: l1._id
    },
    {
      title: "Преступление и наказание",
      author: "Ф. Достоевский",
      year: 2017,
      categoryId: c3._id,
      statusId: status1._id,
      publishHouse: "Речь",
      language: l1._id
    },
    {
      title: "Мастер и Маргарита",
      author: "Булгаков М. А.",
      year: 1966,
      categoryId: c3._id,
      statusId: status1._id,
      publishHouse: "Москва",
      language: l1._id
    },
    {
      title: "Война и мир",
      author: "Л.Н. Толстой",
      year: 1996,
      categoryId: c3._id,
      statusId: status1._id,
      publishHouse: "Лексика",
      language: l1._id
    },
    {
      title: "Всё, что должен знать каждый образованный человек",
      author: "Спектор Анна Артуровна",
      year: 2017,
      categoryId: c8._id,
      statusId: status1._id,
      publishHouse: "АСТ",
      language: l1._id
    },
    {
      title: "Уникальная и парадоксальная военная техника",
      author: "Каторин Юрий Федорович",
      year: 2007,
      categoryId: c8._id,
      statusId: status1._id,
      publishHouse: "АСТ",
      language: l1._id
    },
    {
      title: "Всемирный энциклопедический словарь",
      author: "Адамчик Мирослав Вячеславович",
      year: 2007,
      categoryId: c8._id,
      statusId: status1._id,
      publishHouse: " Современный литератор",
      language: l1._id
    },
    {
      title: "Где? Кто? Когда? 2000 ярких событий, имен, памятных дат. Книга для знатока",
      author: "Адамчик Мирослав Вячеславович",
      year: 2017,
      categoryId: c8._id,
      statusId: status1._id,
      publishHouse: "Мартин",
      language: l1._id
    },
    {
      title: "Педагогика для всех",
      author: "Симон Соловейчик",
      year: 2018,
      categoryId: c10._id,
      statusId: status1._id,
      publishHouse: "АСТ",
      language: l1._id
    },
    {
      title: "Педагогика. Учебник для вузов",
      author: "Бахмутский Андрей Евгеньевич, Вершинина Н. А., Глубокова Е. Н.",
      year: 2018,
      categoryId: c10._id,
      statusId: status1._id,
      publishHouse: "Питер",
      language: l1._id
    },
    {
      title: "Таблица Брадиса",
      author: "Брадис",
      year: 1965,
      categoryId: c9._id,
      statusId: status1._id,
      publishHouse: "Астра",
      language: l1._id
    },
    {
      title: "Самый полный англо-русский русско-английский словарь",
      author: "Владимир Мюллер",
      year: 2016,
      categoryId: c11._id,
      statusId: status1._id,
      publishHouse: "АСТ",
      language: l3._id
    },
    {
      title: "Психология развития. Энциклопедический словарь",
      author: "Авидон И.",
      year: 2006,
      categoryId: c11._id,
      statusId: status1._id,
      publishHouse: "Речь",
      language: l1._id
    },
    {
      title: "Учебник по математике 6 класс",
      author: "В. Пупкин",
      year: 1977,
      categoryId: c6._id,
      statusId: status2._id,
      publishHouse: "Альтаир",
      language: l1._id
    },
    {
      title: "И дольше века длиться день",
      author: "Чингиз Айтматов",
      year: 1981,
      categoryId: c2._id,
      statusId: status1._id,
      publishHouse: "Нова плюс",
      language: l1._id
    },
    {
      title: "Первый учитель",
      author: "Чингиз Айтматов",
      year: 1996,
      categoryId: c9._id,
      statusId: status3._id,
      publishHouse: "Фрунзе",
      language: l1._id
    },
    {
      title: "Русско-кыргызский разговорник",
      author: "Акимов Шерикбек, Байтерекова Женишкуль Саматовна",
      year: 2009,
      categoryId: c14._id,
      statusId: status3._id,
      publishHouse: "Толмач",
      language: l2._id
    }
  );

  const [r1, r2, r3] = await Reader.create([
    {
      inventoryNumber: '000001',
      firstName: "Иван",
      lastName: "Иванов",
      documentNumber: "4818-01",
      groupId: g1._id
    },
    {
      inventoryNumber: '000002',
      firstName: "Игорь",
      lastName: "Гончаров",
      documentNumber: "5289-05",
      groupId: g1._id
    },
    {
      inventoryNumber: '000003',
      firstName: "Азамат",
      lastName: "Исаков",
      documentNumber: "6351-09",
      groupId: g2._id
    }
  ]);

  await Journal.create({
    bookId: b2._id,
    userId: r3._id
  });

  await User.create([
    {
      username: "Admin",
      role: "admin",
      password: "123",
      token: 1
    },
    {
      username: "Librarian",
      role: "librarian",
      password: "123",
      token: 2
    },
    {
      username: "User",
      role: "user",
      password: "123",
      token: 3
    }
  ]);

  db.close();
});

  // Book.on('index', function(err) { // <-- Wait for model's indexes to finish
  //   assert.ifError(err);
  //   Book.create([{title: "text", author: "text", publishHouse: "text"}, {language_override: "russian"}], function(err) {
  //     console.log(err);
  //   });
  // });

  // await Book.on('index', (err) => {
  //   assert.ifError(err);
  //   db.books.createIndex({title: "text", author: "text", publishHouse: "text"}, {language_override: "russian"}, {"weights": { title: 3, author: 1}});
  // });

// db.books.createIndex({title: "text", author: "text", publishHouse: "text"}, {language_override: "russian"}, {"weights": { title: 3, author: 1}});

