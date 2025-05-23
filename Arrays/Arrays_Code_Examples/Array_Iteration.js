// Итерация (обхождане) на масиви

// Понякога трябва да обходим всеки елемент от масива, за да извършим някаква операция.
// Можем да го направим с for цикъл.

let odds = [1, 3, 5, 7, 9];

for (let i = 0; i < odds.length; i++) {
    console.log(odds[i]);
}

// Трябва да се уверим, че имаме достъп само до съществуващи елементи в масива
// и че индексът е валиден (между 0 и дължината на масива - 1),
// затова използваме условие, базирано на дължината на масива.

let numbers = [2, -3, 7, 14, -23];
let positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
    }
}

console.log(positiveNumbers); // [2, 7, 14]

// Можем да използваме логика вътре в цикъла, за да създадем нов масив,
// или да извършим друга операция, базирана на зададени условия.

// ********************************
// Безопасност при работа с масиви

// JavaScript е доста „толерантен“ и няма да даде грешка,
// ако се опитаме да достъпим елемент, който не съществува,
// т.е. ако масивът има само 5 елемента, а ние опитваме да достъпим 7-ия.

let primes = [2, 3, 5, 7, 11];

let seventh = primes[6]; // undefined
console.log(seventh); // undefined

// Въпреки че масивите не поддържат отрицателни индекси,
// няма да получим грешка при такъв достъп:

console.log(primes[-5]); // undefined

// Можем да зададем стойност на индекс, който не съществува,
// но това може да доведе до странични ефекти:

primes[6] = 17; // Това ще създаде „празен“ елемент на индекс 5
console.log(primes); // [2, 3, 5, 7, 11, <1 empty item>, 17]

// Примерен вход
// Тук инициализираме примерен вход – масив от стрингове.
// Всеки нов ред е нов елемент от масива и можем да го вземем чрез gets().

let input = [
  '2,3,5,7',
];

// Понякога, според задачата, може да имаме множество входове –
// един ред съдържа само една стойност, а друг ред съдържа цяла колекция,
// разделена със спейс, запетая или друг разделител.

// Трябва да помним, че трябва да обработваме всеки ред поотделно –
// или да го преобразуваме в число, или в масив от числа/текстове.

let input2 = [
  '3 2',
  '1 2 4',
  'Peter,George',
];

// a = 3, b = 2
// numbers = [1, 2, 4]
// names = ['Peter', 'George']

// ***************************
// Advanced parsing

let input3 = [
  '2,3,5,7',
];

// (print и gets се инициализират тук)

let primesString2 = gets();
let primesStringArray2 = primesString.split(',');
let primes = [];

for (let i = 0; i < primesStringArray.length; i++) {
  let singlePrime = Number(primesStringArray[i]);
  primes.push(singlePrime);
}

console.log(primes); // [2, 3, 5, 7]

// Какво се случва тук:
// 1. Прочитаме стринг от входа
// 2. Разделяме го на масив от стрингове, които представляват числа
// 3. Създаваме нов масив, който ще съдържа числата
// 4. С for цикъл обхождаме всички елементи, парсваме ги поотделно
// 5. Добавяме всяко парснато число в новия масив

// More advanced parsing
let primesString = gets(); // '2,3,5,7'
let primesStringArray = primesString.split(',');
let primes = primesStringArray.map(Number);

console.log(primes); // [2, 3, 5, 7]

// Array.map(Number) връща нов масив, в който всички елементи са конвертирани в числа

// ***********************************
// Method chaining)

// Използвайки методно верижене, можем да направим всичко това в един ред:
let primes = gets().split(',').map(Number);

console.log(primes); // [2, 3, 5, 7]

// Не е нужно да разбираш в дълбочина как работи под капака –
// това ще разглеждаме по-подробно в Alpha програмата.
