// Task 'Chicken Latin'

let input = [
    'Welcome to Chepelare',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sentence = gets();                                                        // 1. Четем изречението от входа → "Welcome to Chepelare"
let words = sentence.split(' ');                                              // 2. Разделяме изречението на отделни думи по интервал → ['Welcome', 'to', 'Chepelare']
let vowels = 'aeiouAEIOU';                                                    // 3. Създаваме стринг с всички гласни букви – използваме го, за да проверим дали дадена дума започва с гласна.
let result = [];                                                              // 4. Празен масив, в който ще събираме трансформираните думи (преведени на Chicken Latin).

for (let word of words) {                                                     // 5. Цикъл, който обхожда всяка дума от масива words.
    let transformed = '';                                                     // 6. Инициализираме празен стринг transformed, който ще съдържа преобразуваната версия на текущата дума.

    if (vowels.includes(word[0])) {                                           // 7. Проверяваме дали първата буква на думата (word[0]) е гласна (част от vowels).
        transformed = word.slice(1) + word[0] + 'che';                        // 8. Коментар 1
    } else {                                                                  // 9. Ако думата не започва с гласна, просто добавяме 'che' накрая.
        transformed = word + 'che';                                           // 10. Пример: "chicken" → "chickenche"
    }

    if (word.length % 2 === 0) {                                              // 11. Ако дължината на transformed е четна, добавяме още едно 'e' в края.
        transformed += 'e';                                                   // 12. Пример: "chickenche" има 10 символа → четно → става "chickenchee"
    }

    result.push(transformed);                                                 // 13. Добавяме преобразуваната дума в масива translated.
}

console.log(result.join(' '));                                                // 14. Съединяваме обратно всички думи от масива translated със спейс → пълно изречение.

// Коментар 1: Да разгледаме какво прави това: Пример: word = "orange"
// 1. word.slice(1) → "range" - взимаме от 1-вия индекс до края – без първата буква
// 2. word[0] → "o" - първата буква
// 3. 'che' → добавяме che в края
// Резултат: transformed = 'range' + 'o' + 'che'; // "rangeoche"

// Какво прави: if (vowels.includes(word[0])) {
// Проверява дали първата буква на думата (word[0]) е гласна буква, т.е. някоя от 'a', 'e', 'i', 'o', 'u' (или главните им букви).
// Как работи: word[0] → това е първият символ от думата
// Пример: let word = "Apple";
// word[0]; -> 'A'
// vowels.includes(word[0]) → проверява дали word[0] се съдържа в стринга vowels
// let vowels = 'aeiouAEIOU';
// vowels.includes('A'); // true
// vowels.includes('b'); // false
// Ако резултатът е true → думата започва с гласна
// Ако резултатът е false → думата започва със съгласна

// Какво прави:  transformed = word.slice(1) + word[0] + 'che';
// Преобразува думата по правилото за гласни:
// махаме първата буква, добавяме я в края, и добавяме "che"
// Обяснение на методите:
// 1. word.slice(1): Връща част от стринга, започвайки от индекс 1 до края (изключва първия символ).
// Пример: let word = "orange";
// word.slice(1); // 'range'
// 2. word[0]: Връща първия символ на думата
// Пример:let word = "orange";
// word[0]; // 'o'
// 3. 'che': Просто добавяме 'che' като суфикс (накрая на новата дума).
// Цял ред на практика:
// let word = 'orange';
// let transformed = word.slice(1) + word[0] + 'che';
// console.log(transformed); // 'rangeoche'
// Общ пример с подробни стъпки:
// word = 'Amy';
// word[0] = 'A' → гласна
// word.slice(1) = 'my'
// word[0] = 'A'
// 'my' + 'A' + 'che' → 'myAche'

// Even though the Latin is considered dead language there are several variations of it still living in Shakespeare’s plays and programming tasks. I refer to Pig and Dog Latin.
// Today we’ll dive into the Chicken Latin. This specific dialect comes from Bulgarian South and the chickens there use "che" instead of "pi”.
// To translate one sentence, we need to take in consideration each word in it. The sentence consists of words, separated by only one space. Every word is composed only of lower or uppercase letters.
// The rules of Chicken Latin are:
// If a word begins with a vowel (a, e, i, o, u or A, E, I, O, U), remove the first letter and append it to the end, then add "che". If you have the word “orange” It translates to “rangeoche”
// If a word begins with a consonant (i.e. not a vowel), append "che" to the end of the word. For example, the word "chicken" becomes "chickenche".
// If the word has even number of letters append one more "e" to the end of it.
// Print the translated sentence.
// Input
// Read from the standard input:
// There is one line of input, a string:
// Hello there Amy
// Output
// Print to the standard output:
// One line of output - the translated sentence
// Helloche thereche myAche
// Constraints
// The sentence contains only uppercase, lowercase and spaces. Exactly one space between each word.
// 1 <= sentence.length <= 150.
// Sample tests
// Input
// Welcome to Chepelare
// Output
// Welcomeche tochee Chepelareche
// Input
// He is no spring chicken anymore
// Output
// Hechee sichee nochee springchee chickenche nymoreache

// Условия:
// 1. ако започва с гласни (a, e, i, o, u or A, E, I, O, U), махаме първата буква и я слагаме в края, след това добавяме и "che". Пример: “orange”става “rangeoche”
// 2. ако започва със съгласни, само добавяме "che" към края. Пример: "chicken" става "chickenche".
// 3. Ако думата има четен брой букви, добавяме още едно "e" към края. Пример: "chickenche" става "chickencheе".  