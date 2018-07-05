#language: ru

Функционал: Добавление нового языка издания
  Для того, что бы новый язык попал в базу данных
  Нужно добавить язык, через форму "добавить язык издания книги"

  Сценарий: Аутентификация пользователя
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Успешное добавление языка издания книги
    Допустим я захожу на страницу добавления языка издания
    Если я ввожу в поле "title" значение "Финский"
    И нажимаю на кнопку "Отправить"
    То я вижу всплывающее сообщение "Добавление языка издания прошло успешно!"

  Сценарий: Добавление существуещего языка издания книги
    Допустим я захожу на страницу добавления языка издания
    Если я ввожу в поле "title" значение "Финский"
    И нажимаю на кнопку "Отправить"
    То я вижу всплывающее сообщение "Указанный язык уже есть в базе"
    И выхожу с профайла

  Сценарий:  Успешное удаление языка книги

    Допустим я захожу на страницу удаления статуса под админом
    И я выбираю в поле "langId" значение "3"
    И нажимаю на кнопку "Delete"
    И нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Язык успешно удален"

  Сценарий:  Не успешное удаление статуса книги

    Допустим я захожу на страницу удаления статуса под админом
    И я выбираю в поле "langId" значение "1"
    И нажимаю на кнопку "Delete"
    И нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Язык который используется в доступных книгах не может быть удален"