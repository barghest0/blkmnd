#!/bin/bash
# Очищаем каталог, смотрящий наружу
rm -rf php/web/*

# на всякий случая устанавливаем ещё раз зависимости
npm i

# пересобираем фронт
npm run build

# кидаем точку входа апи в веб каталог
cp php/index-example.php php/web/index.php
