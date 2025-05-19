// Task 'Heaviest Word'                                // Скриптът намира думата с най-голяма тежест от списък с думи, като тежестта е сборът от позициите на всяка буква в азбуката (a=1, b=2, ..., z=26), без значение дали са малки или главни букви.

let input = [
    '5',                                                                    // Симулираме входа – първо броя думи (5), после самите думи.
    'telerik',
    'alpha',
    'java',
    'Spring',
    'nodeJS',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());                                                     // Прочитаме броя на думите (n = 5) и го преобразуваме в число.
let maxSum = 0;                                                             // maxSum: ще пази най-високата "тежест" на дума.
let heaviestWord = '';                                                      // heaviestWord: ще пази думата с тази тежест.

for (let i = 0; i < n; i++) {                                               // Цикъл, който ще се изпълни n пъти – т.е. ще обработи всички въведени думи.
    let originalWord = gets();                                              // Четем думата от входа и я запазваме като originalWord. Това е важно – така ще можем да запазим оригиналните главни/малки букви, които ще отпечатаме накрая.
    let word = originalWord.toLowerCase();                                  // Преобразуваме думата до малки букви, защото по условие трябва да игнорираме разликата между главни и малки букви при изчисление на тежестта.
    let sum = 0;                                                            // Инициализираме сумата за текущата дума.

    for (let char of word) {                                                // Цикъл, който обхожда всяка буква от думата.
        sum += char.charCodeAt(0) - 96;                                     // char.charCodeAt(0) връща ASCII кода на символа. 'a'.charCodeAt(0) е 97, затова вадим 96, за да получим: 'a' → 1, 'b' → 2, и т.н. Така всяка буква допринася с "тежест" спрямо позицията си в английската азбука.
    }

    if (sum > maxSum) {                                                     // Ако текущата дума има по-голяма тежест от досегашния максимум:
        maxSum = sum;                                                       // Обновяваме maxSum.
        heaviestWord = originalWord;                                        // Запомняме оригиналната дума (с главни букви, ако има такива).
    }

}

console.log(`${maxSum} ${heaviestWord}`)

// Подобна задача: Distant Words от Loops Practie. Обяснено е подробно как работи char.charCodeAt(0) - 96. 

// The Academy needs you! We have this list of words and we have to find the heaviest one, but we haven't a clue how to approach the problem.
// Word heaviness is determined by summing all the letters in it.
// The letter value corresponds to the position in the English alphabet - where a is 1 and z is 26.
// For example, the word alpha has a weight of 1 + 12 + 16 + 8 + 1 = 38.
// Treat lower- and uppercase letters the same, so a and A both have the value 1.
// Your task is to create a program that finds the heaviest word and prints its weight and the word itself to the standart output.
// Input
// On the first line, N - the number of words to follow.
// On the next N lines - a single word.
// Output
// The heaviest weight and the heaviest word, separated by a space.
// Constraints
// 5 <= N <= 500
// 3 <= letters in a word <= 20
// Sample tests
// Input
// 5
// telerik
// alpha
// java
// Spring
// nodeJS
// Output
// 83 Spring