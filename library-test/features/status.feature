#language: ru

Функционал: Добавление статуса
  Для того, что бы добавить новый статус
  Нужно зайти в форму добавления статуса под админом

  Сценарий: Успешная аутентификация администратора
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Успешное добавление статуса книги
    Допустим я захожу на страницу добавления статуса под админом
    Если я ввожу в поле "name" значение "Для пользования"
    И я ввожу в поле "description" значение "Предназначено только для преподавателей"
    И нажимаю на кнопку "Добавить"
    То я вижу всплывающее сообщение "Статус успешно добавлен!"

  Сценарий: Добавление существуещего статуса книги
    Допустим я захожу на страницу добавления статуса под админом
    Если я ввожу в поле "name" значение "Списана"
    И я ввожу в поле "description" значение "Книга списана"
    И нажимаю на кнопку "Добавить"
    То я вижу всплывающее сообщение "Такой статус уже существует"

  Сценарий:  Успешное удаление статуса книги
    Допустим я захожу на страницу удаления статуса под админом
    И я выбираю в поле "statusId" значение "4"
    И нажимаю на кнопку "Удалить"
    Когда я нажимаю на кнопку "Удалить статус" в модальном окне
    То я вижу всплывающее сообщение "Статус успешно удален"

  Сценарий:  Не успешное удаление статуса книги
    Допустим я захожу на страницу удаления статуса под админом
    И я выбираю в поле "statusId" значение "1"
    И нажимаю на кнопку "Удалить"
    Когда я нажимаю на кнопку "Удалить статус" в модальном окне
    То я вижу всплывающее сообщение "Невозможно удалить статус, который используется"