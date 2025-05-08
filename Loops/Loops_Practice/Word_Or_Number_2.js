// Task 'Word or number 2'                                                        // Скриптът проверява входа и извежда събраните думи и сумата на числата. Ако няма думи, отпечатва "no words". 

let input = [
    '5',                                                                          
    '1',
    'go',
    '1',
    'there',
    '5',
];

let print = this.print || console.log;                                             // Функции за печатане (console.log) и четене от входа (input масива).
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);            // Позволяват кода да работи и в Judge система, и локално.

// Read the input from the system
let n = +gets();                                                                   // Чете първия ред от входа ('5'). Защо: Искаме да знаем колко реда следват — числа или думи. Преобразуването в число ни позволява да използваме n в цикъл.    
let words = '';                                                                    // Декларира променлива words – празен стринг. Защо: В нея ще натрупваме всички "думи" от входа. Примерно: "go-there" (с тире между думите). Ако няма нито една дума, ще остане празен стринг.
let numbers = 0;                                                                   // Създава променлива numbers, инициализирана със 0. Защо: В нея ще натрупваме сумата на всички числа от входа. Примерно: 1 + 1 + 5 = 7. Ако няма числа, ще остане 0.

// Process the data
for (let i = 0; i < n; i++) {                                                      //Това е основният цикъл, който ще се повтори n пъти. В нашия случай: n = 5, така че ще обходим 5 входни реда.
let input = gets();                                                                // Чете текущия ред от входа – примерно '1' или 'go'. Тази променлива input ще съдържа текущия ред от входа, който ще проверяваме дали е число или дума.
let isNumber = true;                                                               // Декларираме флаг (булева променлива), който предполага, че входът е число. Защо: Искаме да проверим дали входът е число или дума. Започваме с предположението, че е число. Ако намерим буква, ще променим isNumber на false. 
for (let char of input) {                                                          // Обхожда всеки символ от текущия вход. Тук проверяваме всеки символ от входа, за да видим дали е число или не. Пример: ако input = 'go' → ще обходим 'g' и 'o'.
    if (char === '-') continue;                                                    // Пропускаме знака минус, ако е на първа позиция. Той не е част от числото. Защо: Позволяваме минус само в началото на числото, за да можем да проверим дали входът е число или дума. Това е нужно за случаи като '-42' – валидно отрицателно число.                 
    if (char === '.') continue;                                                    // Прескачаме и десетичната точка, в случай че входът е 3.14. Целта е да не третираме '.' като причина входът да не е число.
    if (isNaN(char)) {                                                             // Проверяваме дали текущият символ не е число. isNaN(char) проверява дали char не е число. Ако не е число, то isNumber става false и излизаме от цикъла. Повече детайли в коментар 1.
        isNumber = false;                                                          // Ако char не е число, задаваме isNumber = false. Защо: Тук проверяваме дали входът е число или дума. Ако намерим буква, променяме isNumber на false и излизаме от цикъла.
        break;                                                                     // Ако вече сме сигурни, че входът не е число, няма смисъл да продължаваме да го проверяваме до края.
    }
    }
if (isNumber) {
    numbers += parseFloat(input);                                                  // Ако входът е число, преобразуваме го чрез parseFloat() и го прибавяме към общата сума. Защо parseFloat(): За да хваща и дробни числа като '3.14' или '-2.5'.
} if (isNumber === false) {                                                        // Ако входът не е число, го считаме за дума. 
    if (words !== '') {                                                            // Защо проверяваме words !== '': Ако words не е празен → значи вече има дума вътре. Затова добавяме тире преди да добавим новата дума.
        words += '-';                                                       
    }
    words += input;                                                                // Добавяме самата дума към стринга. Пример: words = '' → 'go' → 'go-there'
}
}
print(words === '' ? 'no words' : words);                                          // Ако words е празен → нямаме никакви думи → отпечатваме "no words". Иначе: отпечатваме събрания стринг от думи.
print(numbers);                                                                    // Отпечатваме сумата на числата. Ако няма числа, ще отпечата 0, защото numbers е инициализирано с 0. 

// Коментар 1: Как работи isNaN(char):
// '5' → не е NaN → числова стойност → OK
// 'g' → е NaN → не е число → isNumber = false → break



// Read the number of inputs from the console using the gets() function. Store the resulting string in a constant called n. 
// Initialize a variable called words to an empty string. This variable will be used to store the words. 
// Initialize a variable called numbers to 0. This variable will be used to store the sum of the numbers.
// Start a for loop that iterates n times. The variable i is the loop counter and represents the current input number.
// Inside the loop, read the current input from the console using the gets() function. Store the resulting string in a constant called input.
// Initialize a variable called isNumber to true. This variable will be used to track whether the input is a number or not.
// Start a for...of loop that iterates over each character in the input string. The variable char represents the current character.
// Inside the loop, check if the first character is a minus sign or a decimal point. If it is, skip it and continue checking the rest of the characters using the continue statement.
// Check if the current character is not a digit. If it is not, set isNumber to false and break out of the loop using the break statement.
// After the loop, check if the input is a number by checking the value of isNumber. 
// If it is a number, parse it to a floating-point number using the parseFloat() function, and add it to numbers using the += operator. 
// If the input is not a number, assume it is a word and append it to words using the += operator. If words is not an empty string, prepend a dash to the input before appending it.
// After the for loop, print the words string to the console using the console.log() function. If words is an empty string, print 'no words' instead. 
// Print the sum of the numbers to the console using the console.log() function.

// You are given an integer number n and then n new lines of text: numbers or words.
// If the input is a word, concatenate it with the previous words with a dash
// If it is a number add it to all previous numbers
// Input
// On the first line, you will receive the number N
// On each of the next N lines, you will receive a number or word
// If the input is a word it won't contain any digits!
// Output
// On the first line there are all words concatenated with - between them or "no words" if there were no words in the input.
// On the second line is the sum of all the numbers or "0" if there were no numbers.
// Sample tests
// Input
// 5
// 1
// go
// 1
// there
// 5
// Output
// go-there
// 7
