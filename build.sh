#!/bin/bash
# Очищаем каталог, смотрящий наружу
rm -rf www/default.test/*

# пересобираем фронт
npm run build