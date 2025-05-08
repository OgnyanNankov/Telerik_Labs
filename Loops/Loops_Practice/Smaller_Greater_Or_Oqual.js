// Smaller, greater or equal?                                                    // Скриптът сравнява последователни числа и отпечатва връзките между тях с <, > или = в една редица.

let input = [                                                                    // Симулираме входа, както би дошъл от Judge системата – първо брой на числата (3), след това самите числа.
    '3',
    '2',
    '5',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                               // Прочитаме колко числа ще има (n). Знакът + конвертира входа от стринг към число (Number(gets()) също е вариант).
let prevNum = +gets();                                                         // Вземаме първото число от последователността и го записваме като "предишно", тъй като ще го сравняваме с всяко следващо.
let currentNumber = 0;                                                         // Инициализираме променлива за текущото число, което ще сравняваме с предишното - ще държи текущото число във всяка итерация.
let sign = '';                                                                 // Инициализираме променлива за знака, който ще печатаме между числата. Тя ще бъде '<', '>' или '=' в зависимост от сравненията. 
let outputStr = `${prevNum}`;                                                  // Започваме с първото число, за да можем да го отпечатаме накрая. Използваме шаблонен низ (template string) за по-лесно форматиране на изхода. 

// Process the data
for (let i = 1; i < n; i++) {                                                  // Започваме от 1, защото първото число вече е прочетено извън цикъла (то е което ни показва броя на числата - 3)       
    currentNumber = +gets();                                                   // Четем текущото число от входа и го конвертираме в число.       
    if (prevNum < currentNumber) {                                             // Проверяваме дали предишното число е по-малко от текущото.
        sign = '<';                                                            // Ако е по-малко, задаваме знака '<'.
    } else if (prevNum > currentNumber) {                                      // Проверяваме дали предишното число е по-голямо от текущото.
        sign = '>';                                                            // Ако е по-голямо, задаваме знака '>'.
    } else {                                                                  
        sign = '=';                                                            // Ако не е по-голямо и не е по-малко, значи е равно. Задаваме знака '='. 
    }
    outputStr += `${sign}${currentNumber}`;                                    // Добавяме към изходния стринг знака и текущото число, например: 2<5 → 2<5>1 и т.н. 
    prevNum = currentNumber;                                                   // Ъпдейтваме prevNum, така че в следващата итерация да се сравни с новото следващо число.
}

print(outputStr);

// Обяснение:
// 1. Защо използваме for цикъл, а не while (true)?
// Причина:В условието се казва:"On the first line, you will receive the number N. On each of the next N lines, you will receive a number."
// Това означава, че знаем точно колко реда следват – N. Няма нужда от безкраен цикъл и break, както при „END“.
// Затова: Използваме for цикъл от 1 до n-1, защото първото число вече е прочетено извън цикъла (то ни е нужно за сравнение).
// Всеки следващ ред съдържа число, което сравняваме с предишното.
// 2. Защо сравняваме prevNum с currentNumber и обновяваме prevNum?
// Причина: Трябва да знаем предишното число, за да определим каква връзка има със следващото (по-голямо, по-малко или равно).
// Затова:
// Четем текущото число в currentNumber.
// Сравняваме го с prevNum.
// Добавяме към изхода съответния знак (<, >, =) и самото число.
// Обновяваме prevNum = currentNumber, за да се използва при следващото сравнение.
// Защо започваме outputStr със самото първо число?
// Причина: Искаме резултатът да изглежда така: число1 < число2 = число3 > число4
// Затова първият елемент в outputStr трябва да бъде първото число от входа, следвано от знаци и следващите числа.
// Стъпки (шаблон):
// Прочиташ броя на стойностите (n).                                      n = 3
// Прочиташ първото число и го пазиш като prev.                           prev = 2
// Инициализираш променлива за текущото число.                            currentNumber = 0  Това е началната стойност, просто за да има дефинирана променлива. Истинската стойност ще бъде зададена при първото gets() в цикъла.
// Инициализираш променлива за знак.                                      sign = ''          Празен стринг – все още нямаме никакъв знак, защото не сме направили сравнение.
// Инициализираш променлива изходен стринг.                               outputStr = `${prevNum}`  Това е първото число от входа, което вече сме прочели в: let prevNum = +gets(); // → в примера: prevNum = 2
// Започваш цикъл от 1 до n - 1:                                          т.е. две итерации (от 1 до 2 включително).
// Четеш следващото число.
// Сравняваш с prev.
// Добавяш съответния знак и числото към резултата.
// Обновяваш prev.
// Печаташ крайния резултат.

// Итерации:
// Итерация 1 (i = 1):
// Четеш: current = 5
// Сравнение: 2 < 5 → знак <
// Добавяш към outputStr: "2<5"
// Обновяваш prev = 5
// 2 Итерация 2 (i = 2):
// Четеш: current = 1
// Сравнение: 5 > 1 → знак >
// Добавяш към outputStr: "2<5>1"
// Обновяваш prev = 1
// Финален резултат: 2<5>1
// Обобщение:
// Итерация	prev	current	 знак	outputStr
// 1	    2	    5	     <	    2<5
// 2	    5	    1	     >	    2<5>1

// Това ли е принципът за решаване на такива задачи? Абсолютно да! Този шаблон е типичен за задачи, където:
// Сравняваш последователни елементи, Генерираш динамичен изход, който следи връзката между тях, Работиш с брой въведени стойности, зададен в началото.

// Условия и упътване:
// Read the number of integers from the console using the gets() function. Convert the input string to a number using the Number() function. Store the resulting number in a constant called n.
// Initialize a variable called prevNum to store the previous number. Read the first number from the console using the gets() function and convert it to a number using the Number() function.
// Initialize a variable called currentNumber to store the current number.
// Initialize a variable called sign to store the sign to be printed. The sign will be '<', '>', or '=' depending on whether the current number is smaller, greater, or equal to the previous number.
// Initialize a variable called outputStr to store the output string. Start with the first number.
// Start a for loop that iterates from 1 up to but not including n. The variable i is the loop counter.
// Inside the loop, read the current number from the console using the gets() function and convert it to a number using the Number() function.
// Determine the sign to be printed based on the relationship between the previous and current numbers. Use if and else if statements and the less than (<), greater than (>), and equality (==) operators to perform these checks.
// Append the sign and the current number to the output string using the += operator and template literals.
// Update the value of prevNum to be the current number for the next iteration of the loop.
// After the loop, print the output string to the console using the console.log() function. The output string should contain the numbers and the signs between them.

// Description: Write a program that reads from the console a sequence of n integer numbers and prints these numbers with the correct sign between them.
// Input
// On the first line, you will receive the number N
// On each of the next N lines, you will receive a number
// Output
// Print on a single line with "<", ">" or "=" between the numbers.
// Constraints
// 1 <= N <= 1000
// Sample tests
// Input
// 3
// 2
// 5
// 1
// Output
// 2<5>1