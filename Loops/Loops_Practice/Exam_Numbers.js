// Task 'Exam Numbers'                                                        // Скриптът намира всички 3-цифрени числа в интервала [x, y], чиято сума на цифрите е равна на t. Изходът е всяко такова число на нов ред.

let input = [
    '100',                                                                    // начало на интервала (включително)
    '200',                                                                    // край на интервала (включително)
    '12',                                                                     // целева сума на цифрите
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let x = +gets();                                                             // Четем началото на интервала и го преобразуваме в число
let y = +gets();                                                             // Четем края на интервала
let t = +gets();                                                             // Четем целевата сума на цифрите

// Process the data
for (i = x; i <= y; i++) {                                                   // Започваме цикъл от x до y (включително). i е текущото число в интервала.
    let digit1 = Math.floor(i / 100);                                        // Изчисляваме стотиците на текущото число i. Math.floor(i / 100) дава целочисленото деление на i на 100.
    let digit2 = Math.floor((i % 100) / 10);                                 // Изчисляваме десетиците на текущото число i. Първо взимаме остатъка от делението на 100 (т.е. последните две цифри), а след това делим на 10 и взимаме целочисленото деление.
    let digit3 = Math.floor(i % 10);                                         // Изчисляваме единиците на текущото число i. Взимаме остатъка от делението на 10, което дава последната цифра на числото.
    let sum = digit1 + digit2 + digit3;                                      // Изчисляваме сумата на цифрите на текущото число i.

    if (sum === t) {                                                         // Проверяваме дали сумата на цифрите е равна на целевата сума t.
        print(i);                                                            // Ако сумата на цифрите е равна на целевото число t, отпечатваме текущото число i.
    }
}

//Какво търсим? Всички трицифрени числа между 100 и 200, включително, при които:сумата на цифрите е равна на 12
// Нека проверим числото 129:
// Цифри:
// 1 (стотици)
// 2 (десетици)
// 9 (единици)
// Сума: 1 + 2 + 9 = 12
// Значи:
// То е в интервала [100…200]
// И сумата на цифрите му = 12
// Затова 129 е валиден резултат и се отпечатва.
// Логиката: Обхождаме числата от x до y. За всяко число: Намираме сумата на цифрите му. Ако тя е равна на t, отпечатваме числото. Изходът е сортиран възходящо, защото обхождаме с for (i = x; i <= y).

// Как работят цифрите в едно трицифрено число
// Нека вземем числото abc = 129. В него:
// 1 е на позиция стотици (1 × 100)
// 2 е на позиция десетици (2 × 10)
// 9 е на позиция единици (9 × 1)
// Това значи:
// 129 = 1×100 + 2×10 + 9×1
// Как да „извадим“ всяка цифра:
// 1. digit1 = Math.floor(number / 100)
// Защо /100?
// Делим на 100, защото искаме само стотиците.
// Пример:
// 129 / 100 = 1.29 → Math.floor = 1
// Това е първата цифра (на стотици).
// 2. digit2 = Math.floor((number % 100) / 10)
// Какво става тук?
// Първо number % 100 → махаме стотиците и взимаме само последните две цифри:
// 129 % 100 = 29
// После /10 → за да вземем първата от тези две, т.е. десетиците:
// 29 / 10 = 2.9 → Math.floor = 2
// 3. digit3 = number % 10
// Защо % 10?
// Това винаги връща последната цифра – единиците.
// Пример:
// 129 % 10 = 9
// Обобщение по позиции:
// Цифра	Как я намираме	Пример с 129
// Стотици	Math.floor(number / 100)	1
// Десетици	Math.floor((number % 100) / 10)	2
// Единици	number % 10	9
// Защо делим на 100?
// Защото всяка цифра в число има стойност, базирана на степен на 10:
// Единици → 10⁰
// Десетици → 10¹
// Стотици → 10²
// Затова:
// /100 → за да вземем стотиците (позиция 10²)
// /10 → за да вземем десетиците (позиция 10¹)
// %10 → за да изолираме единиците (позиция 10⁰)

// Read the input values x, y, and t from the console using the gets() function. Convert the input strings to integers using the parseInt() function. Store the resulting numbers in constants called x, y, and t.
// Start a for loop that iterates from x up to and including y. The variable i is the loop counter and represents the current number.
// Inside the loop, extract the three digits of the current number. Use the Math.floor() function and the division (/) and modulus (%) operators to perform these calculations. Store the resulting numbers in constants called digit1, digit2, and digit3.
// Compute the sum of the digits by adding digit1, digit2, and digit3. Store the resulting number in a constant called sum.
// Check if the sum is equal to t using the strict equality operator (===). If it is, print the current number to the console using the console.log() function.
// The result should be all 3-digit numbers in the interval [x, y] whose digits sum up to t, printed to the console.

// While studying for the exam, you get frustrated with all the boring tasks and decide to come up with a task of your own.
// You want to find all the 3-digit numbers that are in some interval and whose sum of digits equal some target.
// You decide to name them exam numbers for good fortune.
// Write a program that prints those exam numbers in increasing sequence.
// Input
// The input consists of exactly 3 lines
// x - interval start (inclusive)
// y - interval end (inclusive)
// t - target sum
// Output
// Output each exam number on a separate line.
// Constraints
// 100 <= x < y <= 999
// Sample Tests
// Input
// 100
// 200
// 12
// Output
// 129
// 138
// 147
// 156
// 165
// 174
// 183
// 192
