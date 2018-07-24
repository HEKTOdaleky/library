#language: ru

Функционал: Редактирование информации о читателе
  Для того, что бы обновить данные читателя
  Нужно найти читатетя по баркоду
  Отредактировать неоходимые данные и сохранить через кнопку "Применить"

  Сценарий: Успешная аутентификация пользователя
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Успешное редактирование информации о пользователе
    Допустим я захожу на страницу редактирования пользователя
    Если я ввожу в поле "inventoryCode" значение "000001"
    И нажимаю на кнопку "Найти"
    То я вижу форму редактирования данных пользователя
    И я меняю в поле "lastName" значение на "Стасов"
    И я меняю в поле "firstName" значение на "Михаил"
    И я меняю в поле "documentNumber" значение на "12345"
    И я выбираю в поле "groupId" значение "2"
    И нажимаю на кнопку "Применить"
    То я вижу всплывающее сообщение "Данные читателя сохранены"

  Сценарий: Неуспешное редактирование информации о пользователе
    Допустим я захожу на страницу редактирования пользователя
    Если я ввожу в поле "inventoryCode" значение "000001"
    И нажимаю на кнопку "Найти"
    То я вижу форму редактирования данных пользователя
    И я меняю в поле "documentNumber" значение на "5289-05"
    И нажимаю на кнопку "Применить"
    То я вижу всплывающее сообщение "Читатель с таким документом уже зарегистрирован"