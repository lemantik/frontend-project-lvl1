# Hexlet: Frontend - project level 1
![ESLint](https://github.com/lemantik/frontend-project-lvl1/workflows/ESLint/badge.svg)

[![Maintainability](https://api.codeclimate.com/v1/badges/1e5e3f8ff7f1b0cbbddb/maintainability)](https://codeclimate.com/github/lemantik/frontend-project-lvl1/maintainability)

- [Hexlet: Frontend - project level 1](#hexlet-frontend---project-level-1)
  - [Overview](#overview)
      - [Общие правила для всех игр:](#%d0%9e%d0%b1%d1%89%d0%b8%d0%b5-%d0%bf%d1%80%d0%b0%d0%b2%d0%b8%d0%bb%d0%b0-%d0%b4%d0%bb%d1%8f-%d0%b2%d1%81%d0%b5%d1%85-%d0%b8%d0%b3%d1%80)
  - [Install](#install)
      - [Локальная установка](#%d0%9b%d0%be%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d0%b0%d1%8f-%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0)
      - [Глобальная установка](#%d0%93%d0%bb%d0%be%d0%b1%d0%b0%d0%bb%d1%8c%d0%bd%d0%b0%d1%8f-%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0)
  - [Brain-even](#brain-even)
  - [Brain-calc](#brain-calc)
  - [Brain-GCD](#brain-gcd)
  - [Brain-progression](#brain-progression)
  - [Brain-prime](#brain-prime)

## Overview
Набор игр-головоломок состоящий из 5 простых игр:
1. brain-even
2. brain-calc
3. brain-gcd
4. brain-progression
5. brain-prime

#### Общие правила для всех игр:

Чтобы одержать победу - игорок должен ответить правильно на 3 вопроса, которые задаются ему один за другим.

Если игрок ответил на вопрос не правильно - игра покажет какой ответ был правильным и завершится.

## Install
Для успешной установк и запуска этого пакета игр вам необходимо иметь установленными:
- node.js (v.13 и выше)
- npm - менеджер пакетов
- make (желательно, для удобства установки)

#### Локальная установка
```bash
make install
npm link
```

#### Глобальная установка
```bash
npm install -g
```

## Brain-even
Игроку нужно ответить - является ли выведенное на экран число четным?

Команда для запуска:
```bash
brain-even
```

Пример игры:
[![asciicast](https://asciinema.org/a/yfQIg7osKOVqJgHmaaTjXukt7.svg)](https://asciinema.org/a/yfQIg7osKOVqJgHmaaTjXukt7)

## Brain-calc
Игроку нужно произвести арифметическую операцию (сложение, вычитание или умножение) и ввести результат вычислений.

Команда для запуска:
```bash
brain-calc
```

Пример игры:
[![asciicast](https://asciinema.org/a/srb59JPCT1YrJdDtaxpqHhabk.svg)](https://asciinema.org/a/srb59JPCT1YrJdDtaxpqHhabk)

## Brain-GCD
Игроку нужно ввести [наибольший общий делитель (НОД)](https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B8%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B9_%D0%BE%D0%B1%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C) для двух чисел.

Команда для запуска:
```bash
brain-gcd
```

Пример игры:
[![asciicast](https://asciinema.org/a/FPPEBb4rWL0x4glVPEVwSFZqL.svg)](https://asciinema.org/a/FPPEBb4rWL0x4glVPEVwSFZqL)

## Brain-progression
Игрок должен проанализировать последовательность чисел у ввести число, которое, пропущено.

Команда для запуска:
```bash
brain-progression
```

Пример игры:
[![asciicast](https://asciinema.org/a/s0JjB7zDqqHAH5ILfdEUYLw0p.svg)](https://asciinema.org/a/s0JjB7zDqqHAH5ILfdEUYLw0p)

## Brain-prime
Игорок должен ответить - явялется ли выведенное на экран число [простым](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE).

Команда для запуска:
```bash
brain-prime
```

Пример игры:
[![asciicast](https://asciinema.org/a/QQGoI2EpLoC79kl6IPipeFPrX.svg)](https://asciinema.org/a/QQGoI2EpLoC79kl6IPipeFPrX)