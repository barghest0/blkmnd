#!/bin/bash
# Очищаем каталог, смотрящий наружу
rm -rf www/default.test/*

# на всякий случая устанавливаем ещё раз зависимости
npm i

# пересобираем фронт
npm run build

# кидаем точку входа апи в веб каталог
cp www/index-example.php www/default.test/index.php