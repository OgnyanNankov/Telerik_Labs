// Task 'Distant Words'                                                            // Скриптът изчислява разстоянието между всяка дума и таргет число. Изходът е думата и разстоянието от таргет числото. Накрая отпечатваме средната дистанция на всички думи.
let input = [
    '28',                                                                          // Симулираме входа – първо таргет число (28), после брой думи (3), после самите думи.
    '3',
    'coffee',
    'tea',
    'pineapple',
];

let print = this.print || console.log;                                             // Функции за печатане (console.log) и четене от входа (input масива).
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);            // Позволяват кода да работи и в Judge система, и локално.

// Read the input from the system
let targetNumber = +gets();                                                        // Търсеното число 
let wordsCount = +gets();                                                          // Броя на думите, които ще следват. 
let distanceSum = 0;                                                               // Сумата на разстоянията между всяка дума и таргет числото. Започваме с 0, защото все още не сме изчислили нищо.    

// Process the data
for (let i = 0; i < wordsCount; i++) {                                             // Първи for loop: Обработване на думите. Цикълът брои от 0 до wordsCount - 1. Итерира точно толкова пъти, колкото думи имаме (wordsCount). Всяка итерация е за една дума.
    let word = gets().toLowerCase();                                               // Четем текущата дума от входа. Защо .toLowerCase() веднага - виж по-долу в коментар 2.
    let score = 0;                                                                 // Създаваме променлива score, която ще пази сумата от позициите на буквите в думата. Започваме с 0, защото все още не сме изчислили нищо.
    for (let char of word) {                                                       // Втори for loop: Сумиране на стойностите на буквите в думата. Обхождаме всеки символ от думата (word). char е текущият символ (буква) от думата. Пример: за "coffee" ще обходим 'c', 'o', 'f', 'f', 'e', 'e'.
        score += char.charCodeAt(0) - 96;                                          // Какво правим тук (Виж коментар 3): char.charCodeAt(0) - 96? char.charCodeAt(0) - 96 е начин да намерим позицията на буквата в азбуката. Например: 'a' (ASCII код 97) - 96 = 1, 'b' (ASCII код 98) - 96 = 2 и т.н. За 'c' (ASCII код 99) - 96 = 3. Сумарно: score += 3 + 15 + 6 + 6 + 5 + 5 = 40.
    }
    let distance = (Math.abs(targetNumber - score));                               // Изчисляване на дистанцията/разстоянието между таргет числото и сумата на буквите (Коментар 4). Math.abs() взима абсолютната стойност на разликата между таргет числото и score. Пример: targetNumber = 28, score = 40 → distance = Math.abs(28 - 40) = 12.
    distanceSum += distance;                                                       // Сумарно: distanceSum += distance. Събираме дистанцията на текущата дума с общата дистанция. Започваме от 0, защото все още нямаме нищо. С всяка итерация добавяме новата дистанция.
    print(`${word} ${distance}`);                                                  // Отпечатваме текущата дума и нейната дистанция от таргет числото. Използваме шаблонен стринг (template string) за форматиране на изхода. Пример: "coffee 12".
}
let averageDistance = (distanceSum / wordsCount).toFixed(2);                       // Изчисляваме средната дистанция, като делим общата дистанция (distanceSum) на броя думи (wordsCount). Използваме toFixed(2), за да закръглим до 2 десетични знака. Пример: 12.34567 → 12.35.
print(averageDistance);

// Коментар 1: Защо започваме с distanceSum = 0?  Искаме да съберем всички дистанции. Започваме от 0, защото още нямаме никаква дистанция. Ще натрупваме (+=) всяка нова изчислена дистанция тук.
// Трябва да я декларираме, защото ще я използваме извън цикъла, за да намерим средното разстояние.
// Коментар 2: Защо .toLowerCase() веднага?  За да улесним обработката на буквите. ASCII кодовете на главни и малки букви са различни! Ако всичко е малки букви, лесно можем да сметнем позицията на буквата в азбуката.
// Пример: 'A' (главна) има код 65, 'a' (малка) има код 97. Затова искаме да уеднаквим всички букви като малки.
// Коменар 3: char.charCodeAt(0) взима ASCII кода на символа. Примери: 'a' → 97, 'b' → 98, 'c' → 99, и т.н.
// Защо изваждаме 96? За да направим 'a' = 1, 'b' = 2, 'c' = 3 и т.н. Позицията в азбуката = ASCII код - 96.
// Какво е .charCodeAt(index): Това е вграден метод в JavaScript за стрингове, който връща ASCII (или Unicode) стойността на символа на дадена позиция.
// Пример за "coffee": 'c' → 99 - 96 = 3, 'o' → 111 - 96 = 15, 'f' → 102 - 96 = 6, 'f' → 6, 'e' → 5, 'e' → 5   Общо: 3 + 15 + 6 + 6 + 5 + 5 = 40
// Синтаксис: стринг.charCodeAt(позиция) - позиция = индекс на символа в стринга (0 = първата буква).
// Какво прави .charCodeAt(0): Връща числовия код на първия символ в стринга.
// Примери:
// let letter = 'a';
// console.log(letter.charCodeAt(0));  // 97
// let word = 'Coffee';
// console.log(word.charCodeAt(0));    // 'C' → 67
// let symbol = '!';
// console.log(symbol.charCodeAt(0));  // 33
// let word = 'tea';
// console.log(word[1]);               // 'e'
// console.log(word.charCodeAt(1));    // 'e' → 101
// Защо е полезен: Можем да използваме charCodeAt(): За да сравняваме букви по „стойност“ (примерно за сортиране), да изчислим позицията на буква в азбуката (като при 'a'.charCodeAt(0) - 96 → 1), да правим криптиране (напр. с ASCII/Unicode манипулации).
// Коментар 4: Math.abs() връща абсолютната стойност. Защото дистанцията трябва да е положително число (не можем да имаме "отрицателна дистанция").
// Пример: targetNumber = 28, score за "coffee" = 40, distance = Math.abs(28 - 40) = 12 (смята го с положителна стойност, както е показано в примера на долния ред)
// Пример, показващ как работи Math.abs: Math.abs(5 - 10) = 5, Math.abs(10 - 5) = 5    
// Защо изчислението е извън вътрешния for loop? Вътрешният цикъл сумира буквите. След като знаем крайната сума за думата, чак тогава можем да сметнем дистанцията.

// Бързо обобщение:
// Какво правим	                         Защо
// Инициализираме distanceSum = 0	     Трупаме дистанции от всяка дума
// Първи for loop	                     Броим думите (wordsCount пъти)
// Втори for loop	                     Броим буквите в думата
// toLowerCase()	                     Уеднаквяване на буквите за по-лесно изчисление
// char.charCodeAt(0) - 96	             Преобразуваме букви в позиции в азбуката
// Math.abs()	                         Дистанцията трябва да е положителна
// Извън цикъла: средна стойност	     Накрая намираме средната дистанция

// Подобна задача: Heaviest Word от Mock Exams

// Read the target number from the console using the gets() function. Convert the input string to an integer using the parseInt() function. Store the resulting number in a constant called targetNumber.
// Read the number of words from the console using the gets() function. Convert the input string to an integer using the parseInt() function. Store the resulting number in a constant called wordsCount.
// Initialize a variable called distanceSum to 0. This variable will be used to store the sum of the distances of the words from the target number.
// Start a for loop that iterates wordsCount times. The variable i is the loop counter and represents the current word number.
// Inside the loop, read the current word from the console using the gets() function. Store the resulting string in a constant called word.
// Calculate the score for the current word by summing its character values. Initialize a variable called score to 0 to store the score. Use a for loop to iterate over each character in the word string.
// Inside the loop, add the alphabetical position of the current character to score using the += operator.
// Use the charCodeAt() method to get the ASCII code of the character, and subtract 96 to convert it to the alphabetical position.
// Calculate the distance between the target number and the word score by subtracting the score from the target number and taking the absolute value using the Math.abs() function.
// Store the resulting number in a variable called distance.
// Add the distance of the current word to the total distance sum using the += operator.
// Print the current word and its distance from the target number to the console using the console.log() function. Use template literals to format the output as a string in the required format.
// After the loop, calculate the average distance by dividing the total distance sum by the number of words. Store the resulting number in a constant called averageDistance.
// Print the average distance to the console using the console.log() function. Round the number to two decimal places using the toFixed() method.

// Angel and Bibkata have very weird taste - their last idea of fun is calculating the "distance" that a word is from a given number.
// The distance is calculated by summing the position in the alphabet of each letter in the word and than finding the absolute difference between that word and another predefined number.
// You are a programmer so you must ruin their fun by automating the process.
// Examples:
// word 'bob', number = 22, distance = 3 ('b' + 'o' + 'b' = 2 + 15 + 2 = 19)
// word 'bob', number = 10, distance = 9
// Write a program that calculates the distance for each string and also outputs the average distance.
// Input
// The input consists of several lines.
// T - the target number
// N - the number of words to follow
// on the next N lines - each word on a new line
// Output
// Output consists of N + 1 lines
// First N lines - word + its distance in format word distance
// Last line - the average distance, rounded to two digits after the decimal point
// Constraints
// Each word consists of only uppercase and lowercase english alphabet letters
// 1 <= N <= 20
// 0 <= T <= 1000
// Sample Tests
// Input
// 28
// 3
// coffee
// tea
// pineapple
// Output
// coffee 12
// tea 2
// pineapple 66
// 26.67