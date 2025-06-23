// Magic Numbers

let input = [
    '21 42 50 126 300'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(' ').map(Number);                                   // gets() ни връща: '21 42 50 126 300',  split(' ') → превръща го в масив от стрингове: ['21', '42', '50', '126', '300'], map(Number) → превръща всеки стринг в число: [21, 42, 50, 126, 300]
let sum = 0;                                                                   // Инициализираме променлива за сбора на валидните числа.

for (i = 0; i < numbers.length; i++)                                           // Минаваме през всяко число в масива:
    if (numbers[i] % 3 === 0 && numbers[i] % 7 === 0) {                        // Проверка: числото се дели и на 3, и на 7?
        sum += numbers[i]                                                      // Ако да → го добавяме към sum.
    } else {                                                                   // Ако не → пропускаме
        continue;
    }

let newSum = sum.toString().split('').map(Number);                             // Превръщаме sum = 189 в масив от цифри: toString() → '189', split('') → ['1', '8', '9'], map(Number) → [1, 8, 9]
let sumTotal = 0;                                                              // Сумираме цифрите: 1 + 8 + 9 = 18

for (let i = 0; i < newSum.length; i++) {
    sumTotal += newSum[i];

}

console.log(sumTotal);

// Какво се иска: Имаме точно 5 цели числа. Трябва да отсеем тези, които се делят и на 3, и на 7 едновременно. 
// След това: Сумираме само тези „магически“ числа. Накрая намираме сумата на цифрите на тази сума.

// Given an array of exactly 5 numbers, find those that can be divided both to 3 and 7. Then, sum them all up and find the number that will be the result of the sum of the number’s digits.
// ###Example:
// Numbers: '21 42 50 126 300'
// Numbers that can be divided both to 3 and 7: '21 42 126'
// Sum: '21 + 42 + 126 = 189'
// Digits' sum: '1 + 8 + 9 = 18'
// Input
// Read from the standard input

// Exactly 5 numbers.
// Output
// Print on the standard output

// The result of the calculated sum.
// Sample tests
// Input
// 21 42 50 126 300
// Output
// 18