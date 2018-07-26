#language: ru

Функционал: Редактирование информации о книге
  Для того, что бы обновить данные книги
  Нужно найти книгу по инвентарному коду
  Отредактировать неоходимые данные и сохранить через кнопку "Применить"

  Сценарий: Успешная аутентификация пользователя
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Успешное редактирование информации о книге
    Допустим я захожу на страницу редактировать книгу
    Если я ввожу в поле "inventoryCode" значение "000003"
    И нажимаю на кнопку "Найти"
    То я вижу форму редактирования данных пользователя
    И я меняю в поле "author" значение на "Пушкин"
    И я выбираю в поле "categoryId" значение "3"
    И я выбираю в поле "language" значение "2"
    И я ввожу в поле "price" значение "100"
    И нажимаю на кнопку "Применить"
    То я вижу всплывающее сообщение "Данные о книге успешно обновлены!"