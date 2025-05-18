// Task 'Balanced Numbers'                                                 // Какво се иска: Балансирано число е 3-цифрено число, в което втората цифра е равна на сумата от първата и третата. Цел: сумирай само валидните числа, докато срещнеш първото невалидно.
let input = [                                                              
    '275',                                                                 // 275 → 2 + 5 = 7 → балансирано
    '693',                                                                 // 693 → 6 + 3 = 9 → балансирано
    '110',                                                                 // 110 → 1 + 0 ≠ 1 → не е балансирано → стоп
    '742',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let result = 0;                                                            // Тук ще пазим сумата от всички валидни балансирани числа.

for (i = 0; i <= 1000; i++) {                                              // Обхождаме до 1000 пъти, защото условието казва, че няма да има повече от 1000 входа. (Цикълът ще бъде прекъснат с break, когато срещнем невалидно число.)
    let number = Number(gets());                                           // Четем текущото число от входа и го преобразуваме в number. Коментар 1: 
    let n = number.toString().split('').map(Number);                       // Разбиваме числото на отделни цифри: .toString() → превръща числото обратно в текст (пример: '275'), .split('') → прави масив от символите: ['2', '7', '5'], .map(Number) → преобразува всяка цифра от текст към число: [2, 7, 5]
    if (n[0] + n[2] === n[1]) {                                            // Основна проверка: Първата + третата цифра == средната? Ако да → число е балансирано. Пример: n = [2, 7, 5] -- 2 + 5 = 7
        result += number;                                                  // Ако е балансирано → добавяме числото към текущата сума result
    } else {
        break;                                                             // Ако не е балансирано → спираме програмата с break. Никакви следващи числа няма да се обработят.
    } 

}

console.log(result);

// Коментар 1: В let number = Number(gets()) използваме Number(...) защото: 
// Така преобразуваме текста '275' в числото 275, т.е.:
// '275' → стринг - Number('275') → число: 275
// След това можем спокойно да го:
// събираме (result += number)
// преобразуваме в масив от цифри (number.toString().split(''))
// сравняваме (if (...))

// Стъпка	Число	Цифри	    Проверка	    Валидно?	Натрупана сума
// 1	    275	    [2, 7, 5]	2 + 5 = 7       Да	        275
// 2	    693	    [6, 9, 3]	6 + 3 = 9 	    Да	        275 + 693 = 968
// 3	    110	    [1, 1, 0]	1 + 0 = 1 	    Да	        968 + 110 = 1078
// 4	    742	    [7, 4, 2]	7 + 2 = 9 ≠ 4 	Не	        спира тук

// A balanced number is a 3-digit number whose second digit is equal to the sum of the first and last digit.
// Write a program which reads and sums balanced numbers. You should stop when an unbalanced number is given.
// Input: Input data is read from the standard input
// Numbers will be given
// Each one will be on a separate line
// Output: Print to the standard output
// Constraints
// No more than 1000 numbers will be given
// Sample tests
// Input
// 132
// 123
// Output
//  132