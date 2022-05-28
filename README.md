# Black mind

## Команды

Команды могут осуществляться с помощью `npm | yarn` пакетных менеджеров:

Установка зависимостей - `npm i | yarn`

Запуск полного проложения - `npm run start | yarn start`

> Одновременное выполнение двух комманд ниже с помощью пакета `concurrently`

Запуск сервера для разработки - `npm run dev | yarn dev`

> Сборка запускается на локальной сервере по адресу http://localhost:8000, храниться в браузере в директории `dist`

Запуск сервера для Rest API - `npm run server | yarn server`

> Сервер запускается по адресу http://localhost:3000/api, запуск производится с помощью утилиты `npx` 

Сборка проекта - `npm run build` или `yarn build`

> Продакшн сборка производится с помощью `webpack`, сохраняется в папке `dist`

## Интеграция с php backend средствами docker

Запуск контейнеров

> docker-compose up -d

Чтобы убедиться, что что-то получилось: открыть в браузере localhost:8000. Должны что-то увидеть.

Чтобы пересобрать типа прод:
> bash build.sh

Установка yii2
> docker-compose exec php php composer.phar install



