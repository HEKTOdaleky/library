#language: ru

Функция: Удаление книги администратором



  Сценарий: Успешное удаление книги
    Допустим я захожу на страницу удаление книги под админом
    И я ввожу в поле "order" значение "Order12345"
    Когда я нажимаю на кнопку "Удалить всё"
    То я вижу всплывающее сообщение "Книги успешно удалены"

  Сценарий: Нет книг на удаление
    Допустим я захожу повторно на страницу удаление книги под админом
    То я вижу сообщение "Нет книг для удаления"

