#language: ru

Функционал: Добавление книги
  Для того, что бы книги попадали в базу данных
  Нужно добавить книгу, через форму "добавить книгу"



  Сценарий: Успешное добавление книги
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя
    Допустим я захожу на страницу добавления книги под админом
    Если я ввожу в поле "title" значение "Идиот"
    И я ввожу в поле "author" значение "Ф.М.Достоевский"
    И я ввожу в поле "year" значение "2017"
    И я выбираю в поле "categoryId" значение "1"
    И я выбираю в поле "statusId" значение "1"
    И я ввожу в поле "publishHouse" значение "Питер"
    И я выбираю в поле "language" значение "1"
    И я ввожу в поле "price" значение "500"
#    И я выбираю в поле "registerDate" дату "01.05.2018"

    И нажимаю на кнопку "Save"
    То появляется плагин "Успешно!"

  Сценарий: Добавление книги с незаполненным полем
    Допустим я захожу на страницу добавления книги под админом
    Если я ввожу в поле "title" значение "Идиот"
    И я оставляю в поле "author" пустое значение ""
    И я ввожу в поле "year" значение "2017"
    И я выбираю в поле "categoryId" значение "1"
    И я выбираю в поле "statusId" значение "1"
    И я ввожу в поле "publishHouse" значение "Питер"
    И я выбираю в поле "language" значение "1"
    И я ввожу в поле "price" значение "500"
#    И я выбираю в поле "registerDate" дату "01.05.2018"

    И нажимаю на кнопку "Save"
    То я вижу сообщение с ошибкой "Book validation failed"
