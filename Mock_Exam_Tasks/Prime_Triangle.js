// Task 'Prime Triangle'                                                  // Да прочетем число N. За всяко число от 1 до N: Ако е просто (включително 1 по условие), отпечатваме нов ред със стойността на всички числа от 1 до него: За прости числа → 1, за непрости числа → 0

let input = [
    '27'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());                                                   // Преобразуваме входа в число → n = 10
let output = '';                                                          // output ще държи текущия ред (например '1110101')
let nonPrimes = [];                                                       // nonPrimes ще събира всички непрости числа, които вече сме открили

for (i = 1; i <= n; i++) {                                               // Цикъл за всяко число от 1 до 10 включително
    for (x = 2; x <= n; x++) {                                           // Вложен цикъл: проверяваме дали x се дели на i – това помага да проверим дали x не е просто, ако i е делител на x (и i ≠ x) 
        if (x % i === 0 && x !== i && i !== 1) {                          // Проверяваме дали x се дели на i, но игнорираме: x == i → деленето е тривиално. i == 1 → 1 дели всичко, но по условие я третираме като проста
            if (!nonPrimes.includes(x)) {                                 // Ако x се дели на i → не е просто, и го добавяме в масива nonPrimes
                nonPrimes.push(x);
            }
        }

    }

    if (!nonPrimes.includes(i)) {                                         // Ако i не е в списъка с непрости числа → счита се за просто → добавяме '1'
        output += '1';
        console.log(output);
    } else {
        output += '0';                                                    // Ако е в списъка → добавяме '0'.  Само ако числото е просто, отпечатваме текущото output на нов ред

    }

}

// Да направим итерации с N = 10 - Инициално:
// output = ''
// nonPrimes = []
// Стъпки:
// i = 1
// По условие 1 се счита за просто
// nonPrimes не включва 1
// output += '1' → output: '1'
// Печатаме: 1
// i = 2
// x = 2 до 10 → отбелязваме кратните на 2: 4, 6, 8, 10
// nonPrimes = [4, 6, 8, 10]
// 2 е просто → output += '1' → '11'
// Печатаме: 11
// i = 3
// x = 3 до 10 → кратни на 3: 6, 9
// Добавяме 9 (6 вече е там)
// nonPrimes = [4, 6, 8, 10, 9]
// 3 е просто → '111'
// Печатаме: 111
// i = 4
// В nonPrimes → добавяме '0'
// output = '1110'
// Не печатаме
// i = 5
// x = 5 до 10 → 10 вече е в списъка
// 5 не е в nonPrimes → просто
// output += '1' → '11101'
// Печатаме: 11101
// i = 6
// В nonPrimes → добавяме '0'
// output = '111010'
// i = 7
// Не е в nonPrimes → просто
// '1110101' → печатаме
// i = 8 → непросто → '0'
// i = 9 → непросто → '0'
// i = 10 → непросто → '0'
// Финално output = '1110101000', но не се печатат редове, защото тези числа не са прости.
// Финален изход:
// 1
// 11
// 111
// 11101
// 1110101

// We know that you love math, so we have prepared a very interesting task, that involves both geometry and prime numbers.
// By a given N number, from which you need to generate a sequence of 1 to N inclusive.
// For every prime number in that sequence, you need to print out all the other numbers before it (and the number itself), whether they are prime or not
// Note: For the purposes of this task (and against the laws of mathematics), the number 1 is considered as prime.
// Example: Let's say N=10
// We have the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// The prime numbers are 1, 2, 3, 5, 7 - 5 prime numbers, so we print 5 rows
// Each row contains all the numbers for 1 to PRIME_NUMBER
// Result:
// 1
// 1 2
// 1 2 3
// 1 2 3 4 5
// 1 2 3 4 5 6 7
// Let's make things simpler:
// Print 0 if the numbers is not prime
// Print 1 if the number is prime
// Final result:
// 1
// 1 1
// 1 1 1
// 1 1 1 0 1
// 1 1 1 0 1 0 1
// Input
// Read from the standard input
// On the single line, find the number N
// The input data will always be valid and in the format described. There is no need to check it explicitly
// Output
// Print on the standard output
// The output should consist of several lines of digits each of which can be either 1 or 0
// Without any space between them
// Sample tests
// Input
// 10
// Output
// 1
// 11
// 111
// 11101
// 1110101
// Input
// 27
// Output
// 1
// 11
// 111
// 11101
// 1110101
// 11101010001
// 1110101000101
// 11101010001010001
// 1110101000101000101
// 11101010001010001010001