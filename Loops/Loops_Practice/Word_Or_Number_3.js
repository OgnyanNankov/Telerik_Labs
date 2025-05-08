// Task 'Word or number 3'                                                          // Скриптът проверява входа и извежда събраните думи и сумата на числата. Ако няма думи, отпечатва "no words".
let input = [
    '6',
    '1',
    'go',
    '1',
    '1',
    'there',
    'IT',
];

let print = this.print || console.log;                                              // Функции за печатане (console.log) и четене от входа (input масива).
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);             // Позволяват кода да работи и в Judge система, и локално.

// Read the input from the system
let n = +gets();                                                                    // Четем броя на редовете от входа и го преобразуваме в число (n). Преобразува стринга '6' в числото 6.
let words = '';                                                                     // Декларираме променлива words, която ще съхранява събраните думи. Започваме с празен стринг.
let numbers = 0;                                                                    // Декларираме променлива numbers, която ще съхранява сумата на числата. Започваме с 0.
let prevTypeIsNumber = false;                                                       // Декларираме променлива prevTypeIsNumber, която ще следи дали предишният вход е число или не. Започваме с false, защото все още не сме обработили нищо.

// Process the data
for (let i = 0; i < n; i++) {                                                       // Започваме цикъл, който ще се повтори n пъти. В нашия случай: n = 6, така че ще обходим 6 входни реда.
    let inputValue = gets();                                                        // Четем текущия ред от входа и го съхраняваме в променливата inputValue. Тя ще съдържа текущия ред от входа, който ще проверяваме дали е число или дума.
    let isNumber = !isNaN(inputValue);                                              // Проверяваме дали входът е валидно число. isNaN('go') → true (значи НЕ е число) !isNaN('go') → false !isNaN('1') → true → това е число            
                                                              
        if (isNumber) {                                                             // Проверка дали входът е число или дума:
            if (prevTypeIsNumber) {                                                 // Ако предишният вход е число, добавяме текущото число към сумата.
                numbers += Number(inputValue);                                      // Преобразуваме входа в число и го добавяме към numbers. Защо Number(): parseFloat() не работи с цели числа, а Number() работи с всякакви числа.
            } else {                                                                // Ако предишният вход не е число, значи имаме дума след число. Отпечатваме събраните думи и нулираме words.
                if (words !== null) {                                               // Проверяваме дали words не е null. Ако е null, значи нямаме думи за печатане.
                    print(words);                                                   // Отпечатваме събраните думи. Защо: Тук проверяваме дали имаме думи за печатане. Ако имаме, ги отпечатваме.
                    words = null;                                                   // Нулираме words, за да не печатаме същите думи отново. Защо: След отпечатването на думите, искаме да ги нулираме, за да не ги печатаме отново.
                }
                numbers = Number(inputValue);                                       // Преобразуваме входа в число и го добавяме към numbers. Защо: Тук проверяваме дали имаме числа за печатане. Ако имаме, ги нулираме, за да не ги печатаме отново.
            }
        } else {                                                                    // Ако входът не е число, значи е дума.
            if (!prevTypeIsNumber) {                                                // Проверяваме дали предишният вход не е число. Ако е, значи имаме две думи след число. Отпечатваме събраните числа и нулираме numbers.
                words = words ? words + '-' + inputValue : inputValue;              // Добавяме тире преди новата дума, ако вече имаме думи. Защо: Тук проверяваме дали имаме думи за печатане. Ако имаме, добавяме тире преди новата дума.
            } else {                                                                // Ако предишният вход е число, значи имаме дума след число. Отпечатваме събраните числа и нулираме numbers.
                if (numbers !== 0) {                                                // Проверяваме дали numbers не е 0. Ако е 0, значи нямаме числа за печатане.
                    print(numbers);                                                 // Отпечатваме събраните числа. Защо: Тук проверяваме дали имаме числа за печатане. Ако имаме, ги отпечатваме.
                    numbers = 0;                                                    // Нулираме numbers, за да не печатаме същите числа отново. Защо: След отпечатването на числата, искаме да ги нулираме, за да не ги печатаме отново.
                }
                words = inputValue;                                                 // Започваме нова дума. Защо: Тук проверяваме дали имаме думи за печатане. Ако имаме, започваме нова дума.
            }
        }
    
        prevTypeIsNumber = isNumber;                                                // Запомняме типа на текущия вход. Защо: Тук проверяваме дали имаме числа за печатане. Ако имаме, запомняме типа на текущия вход.
    }
    
    // Print the last accumulated value
    if (prevTypeIsNumber) {                                                         // Проверка дали последният вход е число или дума:
        print(numbers);                                                             // Отпечатваме събраните числа. Защо: Тук проверяваме дали имаме числа за печатане. Ако имаме, ги отпечатваме.
    } else {                                                                        // Проверка дали последният вход не е число. Ако е, значи имаме две думи след число. Отпечатваме събраните числа и нулираме numbers.
        print(words);                                                               // Отпечатваме събраните думи. Защо: Тук проверяваме дали имаме думи за печатане. Ако имаме, ги отпечатваме.
    }

// Коментар 1: isNaN(value): Проверява дали стойността не е число. Връща true, ако не може да бъде преобразувана в число.
// Пример	         Резултат
// isNaN('123')	     false
// isNaN('hello')	 true
// isNaN(5)	         false
// isNaN('5.2')	     false
// isNaN('5abc')	 true
// Коментар 2: Какво е тернарен оператор: Тернарният оператор е кратка форма на if...else израз. Той позволява да извършиш условна проверка и да върнеш стойност в зависимост от резултата на тази проверка.
// Синтаксис: условие ? стойност_ако_е_вярно : стойност_ако_е_невярно;
// условие: Израз, който се оценява като true или false.
// стойност_ако_е_вярно: Стойност, върната ако условието е true.
// стойност_ако_е_невярно: Стойност, върната ако условието е false.
// Примери за използване Проверка на възраст:
// let age = 20;
// let beverage = age >= 18 ? "Бира" : "Сок";
// console.log(beverage); // Изход: "Бира"
// Равносилно е на следния пример с if else: 
// let age = 20;
// let beverage;
// if (age >= 18) {
//     beverage = "Бира";
// } else {
//     beverage = "Сок";
// }
// console.log(beverage); // Изход: "Бира"



// Read the number of inputs from the console using the gets() function. Store the resulting string in a constant called n.
// Initialize a variable called words to an empty string. This variable will be used to store the words.
// Initialize a variable called numbers to 0. This variable will be used to store the sum of the numbers.
// Initialize a variable called prevTypeIsNumber to false. This variable will be used to track whether the previous input was a number or not.
// Start a for loop that iterates n times. The variable i is the loop counter and represents the current input number.
// Inside the loop, read the current input from the console using the gets() function. Store the resulting string in a constant called input.
// Initialize a variable called isNumber to true. This variable will be used to track whether the input is a number or not.
// Start a for...of loop that iterates over each character in the input string. The variable char represents the current character.
// Inside the loop, check if the first character is a minus sign or a decimal point. If it is, skip it and continue checking the rest of the characters using the continue statement.
// Check if the current character is not a digit. If it is not, set isNumber to false and break out of the loop using the break statement.
// After the loop, check if the input is a number by checking the value of isNumber. If it is a number, check if the previous input was also a number by checking the value of prevTypeIsNumber.
// If it was, parse the input to a floating-point number using the parseFloat() function, and add it to numbers using the += operator.
// If it was not, print the words string to the console using the console.log() function.
// If it is not an empty string, reset words to an empty string, p
// If the input is not a number, assume it is a word.
// Check if the previous input was a number by checking the value of prevTypeIsNumber.
// If it was, print the sum of the numbers to the console using the console.log() function, and reset numbers to 0.
// Append the input to words using the += operator. If words is not an empty string, prepend a dash to the input before appending it.
// After the for loop, check if the last input was a number by checking the value of prevTypeIsNumber. If it was, print the sum of the numbers to the console using the console.log() function.
// If it was not, print the words string to the console using the console.log() function if it is not an empty string.

// Description
// You are given an integer number n and then n new lines of text: numbers or words.
// If the input is a word, concatenate it with the previous words with a dash only if they are adjacent
// If the input is a number, add numbers only if they are adjacent
// Input
// On the first line, you will receive the number N
// On each of the next N lines, you will receive a number or word
// If the input is a word it won't contain any digits!
// Output
// If there is a number after a word we print the concatenated words so far
// If there is a word after a number we print the sum so far
// Sample tests
// Input
// 6
// 1
// go
// 1
// 1
// there
// IT
// Output
// 1
// go
// 2
// there-IT
// Explanation
// 6 - the number of lines with text.
// 1
// go - After a number, there is a word - print **1**
// 1  - After a word, there is a number - print **go**
// 1  - Two numbers are adjacent - sum them.
// there - After numbers, there is a word - print the **sum**
// IT - Two words are adjacent - concatenate and print them