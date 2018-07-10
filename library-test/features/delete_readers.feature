#language: ru

Функция: Удаление читателя или читателей

  Сценарий: Успешное вход в приложение под админом
    Допустим я захожу на страницу аутентификации
    Если я ввожу в поле "username" значение "Admin"
    И я ввожу в поле "password" значение "123"
    И нажимаю на кнопку "Войти"
    То я вижу сообщение об успешной аутентификации пользователя

  Сценарий: Незаполненое поле ввода номера приказа
    Дано я захожу на страницу удаления читателя под админом
    Если я отмечаю читателя на удаление нажатием на элемент "checkbox0"
    И я ввожу в поле "order" значение ""
    Когда я нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Хотя бы один читатель должен быть выбран, а поле для номера приказа должно быть заполнено"

  Сценарий: Невыбран читатель для удаления
    Дано я захожу на страницу удаления читателя под админом
    Если я ввожу в поле "order" значение "Order12345"
    Когда я нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Хотя бы один читатель должен быть выбран, а поле для номера приказа должно быть заполнено"

  Сценарий: Успешное удаление читателя
    Дано я захожу на страницу удаления читателя под админом
    Если я отмечаю читателя на удаление нажатием на элемент "checkbox0"
    И я ввожу в поле "order" значение "Order12345"
    Когда я нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Читатели успешно перенесены в архив"

  Сценарий: Успешное удаление группы читателей
    Дано я захожу на страницу удаления читателя под админом
    Если я отмечаю читателя на удаление нажатием на элемент "checkbox0"
    И я отмечаю еще одного читателя нажатием на элемент "checkbox1"
    И я ввожу в поле "order" значение "Order54321"
    Когда я нажимаю на кнопку "Удалить"
    То я вижу всплывающее сообщение "Читатели успешно перенесены в архив"

