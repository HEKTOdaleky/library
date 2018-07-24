#language: ru

Функция: Принятие книги у читателя
  Для того, чтобы принять книгу у читателя
  Нужно найти книгу с помощью штрихкода
  После ввести дату возврата и нажать кнопку принять

  Сценарий: Успешная аутентификафия библиотекаря
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Librarian"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

    Сценарий: Успешная приемка книги у читателя
      Допустим я захожу на страницу принятия книги у читателя
      Если я ввожу в поле "bookCode" значение "000016"
      И нажимаю на кнопку "Найти"
      То я вижу внизу результат в виде списка
      И я ввожу в поле "closeDate" дату "14-07-2018"
      И нажимаю на кнопку "Принять книгу у читателя"
      То я вижу всплывающее сообщение "Книга принята успешно"

      Сценарий: Не успешная приемка книги у читателя
        Допустим я захожу на страницу принятия книги у читателя
        Если я ввожу в поле "bookCode" значение "000005"
        И нажимаю на кнопку "Найти"
        То я вижу всплывающее сообщение "Книга с таким штрихкодом не найдена"