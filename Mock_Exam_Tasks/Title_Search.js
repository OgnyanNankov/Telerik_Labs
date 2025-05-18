// Task 'Title Search'

let input = [
    'peshoishere',
    '3',
    'eho',
    'piere',
    'telerik',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let title = gets();                                                                // Четем началния string: "peshoishere"
let n = Number(gets());                                                            // Брой думи, които ще проверяваме: 3
let emptyChar = '';                                                                // Символ, с който ще изтриваме срещнатите букви

for (let i = 0; i < n; i++) {                                                      // Основен цикъл – обработка на всяка дума
    let arrayTitle = title.split('');                                              // Преобразуваме title в масив от символи – защото ще модифицираме по индекси
    let word = gets();                                                             // Прочитаме текущата дума за търсене

    let foundTitle = true;                                                         // Флаг, който ще следим – дали открихме думата
    let lastIndex = 0;                                                             // Последният индекс, от който търсим нататък

    for (j = 0; j < word.length; j++) {                                            // Втори цикъл – търсене на всеки символ от думата в title
        let index = arrayTitle.indexOf(word[j], lastIndex);                        // Търсим текущия символ от думата (word[j]) в arrayTitle, започвайки от lastIndex → така гарантираме, че символите ще се срещат в правилен ред

        if (index > -1) {
            arrayTitle[index] = emptyChar;                                         // "изтриваме" символа
            lastIndex = index;                                                     // запомняме къде сме били
        } else {
            foundTitle = false;                                                    // ако не го намерим, отказваме. Коментар 1: 
        }
    }

    if (foundTitle) {                                                              // Извън вътрешния цикъл – резултат
        title = arrayTitle.join('');                                               // Обновяваме оригиналния title
        console.log(title);                                                        // Ако думата е намерена → отпечатваме новата версия на title
    } else {
        console.log('No such title found!')                                        // Ако не е → само съобщение, без да променяме title
    }

}

// Задание (накратко): Имаш дума title (например: "peshoishere")
// Получаваш няколко други думи (например "eho", "piere" и т.н.)
// Ако думата се съдържа в title в този ред (не задължително последователно),
// → я намираш, премахваш я символ по символ от title
// → отпечатваш останалата част
// Ако не се намира → печаташ "No such title found!"

// Коментар 1: Обяснение: 
// Ако всички букви от думата са намерени последователно → думата е валидна
// Изтриваме буквите от arrayTitle, за да "консумираме" дума

// Пример с вход:
// title: peshoishere
// words: eho, piere, telerik
// 1. Търсим "eho" в "peshoishere"
// 'e' → индекс 1 ✅
// 'h' → индекс 4 ✅
// 'o' → индекс 5 ✅
// → Всичко намерено → изтриваме буквите
// title = "psishere" ✅
// 2. Търсим "piere" в "psishere"
// 'p' → индекс 0
// 'i' → индекс 2
// 'e' → индекс 6
// 'r' → индекс 5 ❌ (няма такава след 'e')
// ⚠️ Грешка – тук трябва да се внимава – но в примера даден от Judge, все пак се намира "piere" и остава "ssh"
// (това става, защото буквите се срещат в правилен ред, но не задължително са съседни)
// 3. Търсим "telerik" в "ssh" → няма буква 't' → ❌
// → "No such title found!"

// Какво научихме:
// Елемент:	                    Значение:
// indexOf(char, fromIndex)     Търси символа след дадена позиция
// split('') и join('')	        Позволяват работа с масив от символи и после сглобяване обратно в string
// emptyChar = ''	            Символът, с който „изтриваме“ буквите
// lastIndex	                Осигурява, че търсим само в правилния ред на символите

// You will receive a string title which contains only small latin letters [a-z].
// After that you will have to read from the input N lines of text.
// For each of these lines, your task is to find out if there is such a sequence in the string you receive as input on the first line (title).
// The sequence may not be on consecutive indices. Each time you find a sequence of these characters you remove it from the initial string and print the modified string.
// If no such sequence is found you have to print No such title found! and not modify the string.
// Examples:
// telerik is found in telerikacademy and the remaining string is academy
// telerik is also found in tpeplpeprik and the remaining string is pppp
// Input: Read from the standard input
// On the first line you receive a string containing small latin letters [a-z]
// On the next line you receive an integer N which represents the number of lines which you will have to read
// On each of the next N lines you receive a string
// Output: Print on the standard output
// On every N line, print the result of the operation
// Examine the sample tests for explanation
// Constraints
// 3 <= N <= 10
// 200 <= title.length() <= 5000
// Sample tests
// Input
// peshoishere
// 3
// eho
// piere
// telerik
// Output
// psishere
// ssh
// No such title found!
// Explanation
// The title is peshoishere
// You receive 3 as an integer
// search eho in peshoishere => peshoishere
// Print: psishere (modified title)
// search piere in psishere => psishere
// Print: ssh (modified title)
// search telerik in ssh => Not found
// Print: No such title found!