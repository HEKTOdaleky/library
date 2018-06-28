#language: ru

Функция: Аутентификация пользователя
  Для того чтобы пользоваться системой, заносить в базу новые книги или выдовать их читателю
  Нужно войти в свою учетную запись
  Для этого нужно будет ввести логин и пароль

  Сценарий: Успешная аутентификация пользователя
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "Имя пользователя" значение "TestUser"
    И я ввожу в поле "Пароль" значение "TestPassword"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя