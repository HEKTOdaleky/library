#language: ru

Функция: Удаление книги

  Сценарий: Успешная аутентификафия библиотекаря
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Librarian"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Успешное удаление киги
    Допустим я захожу на страницу удаление книги под библиотекарем
    И я ввожу в поле "bookCode" значение "000015"
    И я нажимаю на кнопку "Найти книгу"
    И ввожу в поле "reason" значение "Испорчена"
    Когда я нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Книга помечена на удаление"

  Сценарий: Книга на удаление не найдена
    Допустим я захожу на страницу удаление книги под библиотекарем
    И я ввожу в поле "bookCode" значение "000030"
    И я нажимаю на кнопку "Найти книгу"
    То я вижу всплывающее сообщение "Книга с таким штрихкодом не найдена"



  Сценарий: Успешная аутентификафия админа
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Успешное удаление книги
    Допустим я захожу на страницу удаление книги под админом
    И я ввожу в поле "order" значение "Order12345"
    Когда я нажимаю на кнопку "Удалить всё"˚¬
    То я вижу всплывающее сообщение "Книги успешно удалены"

  Сценарий: Нет книг на удаление
    Допустим я захожу повторно на страницу удаление книги под админом
    То я вижу сообщение "Нет книг для удаления"

