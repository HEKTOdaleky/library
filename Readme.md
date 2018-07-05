Библиотека ПЛ№10 - online library.

Ссылка на тестовую версию:  https://bitbucket.org/esdpjs3/library/src/dev/

Setup:

Версия node 8.11.3

Для запуска базы данных нужно перейти в папку ../library/api $
и последовательно выполнить команды:

sudo service mongod start,
mongo

Для запуска сервера в папке ../library/api $
выполнить команды:

установка зависимостей:   npm install

запуск сервера:   npm run dev

Для запуска клиентской части перейти в папку ../library/client $
и выполнить команды:

установка зависимостей:   npm install

запуск клиентской части:   npm start или если вы используете yarn то yarn start

Для запуска фикстур перейти в папку ../library/api $
и выполнить команду:

npm run seed
