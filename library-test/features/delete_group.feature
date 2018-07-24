#language: ru

Функция: Удаление группы
  Для того, чтобы удалить группу
  Нужно зайти на форму удаления группы и выбрать нужную группу в выпадающем меню
  Затем нажать на кнопку "Удалить", и подтвердить удаление в модальном окне

  Сценарий: Успешное удаление группы
    Допустим я захожу на страницу удаления групп
    И я выбираю в поле "groupId" значение "6"
    И нажимаю на кнопку "Удалить"
    Когда я нажимаю на кнопку "Удалить группу" в модальном окне
    То я вижу всплывающее сообщение "Группа успешно удалена"

  Сценарий: Перенос группы в архив, если она используется в библиотеке
    Допустим я захожу на страницу удаления групп
    И я выбираю в поле "groupId" значение "1"
    И нажимаю на кнопку "Удалить"
    Когда я нажимаю на кнопку "Удалить группу" в модальном окне
    То я вижу всплывающее сообщение "Группа успешно перенесена в архив"