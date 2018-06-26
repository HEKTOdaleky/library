const mongoose = require("mongoose");
const config = require("./config");

const Category = require("./models/Category");
const Book = require("./models/Book");
const Reader = require("./models/Reader");
const User = require("./models/User");
const Status = require("./models/Status");
const Group = require("./models/Group");
const Journal = require("./models/Journal");
const Language = require("./models/Language");

mongoose.connect(config.db.url + "/" + config.db.name);

const db = mongoose.connection;

db.once("open", async () => {
  try {
    await db.dropCollection("categories");
    await db.dropCollection("books");
    await db.dropCollection("readers");
    await db.dropCollection("users");
    await db.dropCollection("status");
    await db.dropCollection("groups");
    await db.dropCollection("journals");
    await db.dropCollection("Language");
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

  const [l1, l2, l3] = await Language.create(
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
      title: "Таблица Брадиса",
      author: "Брадис",
      year: 1965,
      categoryId: c9._id,
      statusId: status1._id,
      publishHouse: "Астра",
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
      title: "Физика. Методическое руководство для поступающих в ВУЗы",
      author: "Яворский Б.М.",
      year: 1999,
      categoryId: c9._id,
      statusId: status3._id,
      publishHouse: "Манн, Иванов и Фербер",
      language: l1._id
    }
  );

  const [r1, r2, r3] = await Reader.create([
    {
      firstName: "Иван",
      lastName: "Иванов",
      documentNumber: "4818-01",
      groupId: g1._id
    },
    {
      firstName: "Игорь",
      lastName: "Гончаров",
      documentNumber: "5289-05",
      groupId: g1._id
    },
    {
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
      role: "employee",
      password: "123"
    }
  ]);

  db.close();
});
