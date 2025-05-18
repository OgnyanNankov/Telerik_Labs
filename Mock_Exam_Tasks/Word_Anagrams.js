// Task 'Word Anagrams'                                                 // Дадена е дума (напр. anagram) и няколко други думи. Трябва да проверим дали всяка от тях е анаграм на първата. Коментар 1

let input = [
    'anagram',                                                          // Думата за сравнение: 'anagram'
    '6',                                                                // Брой последващи думи
    'gramana',                                                          // Следват 6-те думи, които ще проверим
    'aaagrnm',
    'margana',
    'abc',
    'xy',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let anagram = gets().split('').sort().join('');                               // Прочитаме референтната дума 'anagram' и я подготвяме за сравнение: Коментар 2
let n = Number(gets());

for (i = 0; i < n; i++) {                                                     // Цикъл по всяка дума
    let word = gets().split('').sort().join('');                              // Четем дума от входа и я преобразуваме в сортирана форма (същия процес като горе)

    if (anagram === word) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

// Коментар 1: Aнаграм = дума, съставена от същите букви, със същия брой, но подредени по друг начин.Примери:
// ✅ anagram ↔ margana    ❌ anagram ↔ abc
// Коментар 2: 
// // .split('') → прави масив от буквите: ['a','n','a','g','r','a','m']
// .sort() → сортира буквите: ['a','a','a','g','m','n','r']
// .join('') → сглобява: 'aaagmnr'         - използваме join, защото JS не може да сравнява масиви, но може да сравни стринг по ASCII стойностите на всеки елемент
// Резултат: anagram = 'aaagmnr'

// Обобщение
// Част от кода	               Какво прави
// split('')	              Разделя думата на букви
// sort()	                  Подрежда буквите по азбучен ред
// join('')	                  Събира буквите обратно в стринг
// if (sorted1 === sorted2)	  Сравнява дали двете думи имат същите букви (анаграми ли са)

// You are given a word and a list of words. Your task is to check whether all the words from the list are anagrams of the word.
// An anagram is a word formed by rearranging the letters of another word:
// The following are anagrams of "anagram":
// "gramana", "aaagrnm", "margana", etc..
// The following are NOT anagrams of "anagram":
// "aanagram", "aaagram", "anagra", "anagrama", "yxy"
// Input
// Read from the standard input
// On the first line, find W - the word to check against;
// On the second line, find N - the number of words in the list of words WORDS;
// On the next N lines, the words from WORDS;
// Output
// Print to the standard output
// For each word from WORDS print either:
// "Yes", if the word is an anagram of W;
// "No", if the word is NOT an anagram of W;
// Sample tests
// Input
// anagram
// 6
// gramana
// aaagrnm
// anagra
// margana
// abc
// xy
// Output
// Yes
// Yes
// No
// Yes
// No
// No