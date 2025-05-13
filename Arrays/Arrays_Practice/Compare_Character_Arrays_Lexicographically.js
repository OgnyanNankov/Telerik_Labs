// Task 'Compare Character Arrays Lexicographically'                        // Да се напише програма, която сравнява два текста (като масиви от символи) лексикографски – т.е. по азбучен ред, както се подреждат думи в речник.
let input = [
    'telerik',
    'teleric',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let first = gets().split('');                                               // Четем всеки стринг и го превръщаме в масив от символи: 'telerik' → ['t','e','l','e','r','i','k']
let second = gets().split('');                                              // 'teleric' → ['t','e','l','e','r','i','c'] -- Така можем да сравняваме символ по символ.
let isEqual = true;                                                         // Флаг (булева променлива), който предполага, че стринговете са равни. Ако открием разлика, ще го сменим на false.

for (i = 0; i < Math.min(first.length, second.length); i++) {               // Обхождаме от индекс 0 до дължината на по-късия масив. Защо - Коментар 1.
    if (first[i] < second[i]) {                                             // Лексикографско сравнение: Ако символът от първия е по-рано в азбуката → first е "по-малък"
        isEqual = false;
        console.log('first');
        break;                                                              // При първа разлика: отпечатваме резултата и прекъсваме цикъла с break.
    } else if (first[i] > second[i]) {                                      // Ако символът от втория е по-рано → second печели
        isEqual = false;
        console.log('second');
        break;                                                              // При първа разлика: отпечатваме резултата и прекъсваме цикъла с break.
    }

} if (isEqual) {
    if (first.length < second.length) {                                     // 'cat' vs 'caterpillar' → еднакво до 3-та буква, но вторият има още → печели първият като по-къс
        console.log('first');
    } else if (first.length > second.length) {
        console.log('second');
    } else {
        console.log('equal');                                               // 'abc' vs 'abc' → еднакви дължини и символи → equal
    }
}

// Коментар 1: Защото при сравнение "буква по буква", ако стигнем до края на по-късата дума – няма смисъл да обхождаме нататък. Например:'cat' vs 'caterpillar' → сравняваме само 3 символа

// Пример: 'telerik' vs 'teleric' - Сравняваме:
// Индекс	Символ от first	 Символ от second	Резултат
// 0	    't'	             't'	            еднакви
// 1	    'e'	             'e'	            еднакви
// 2	    'l'	             'l'	            еднакви
// 3	    'e'	             'e'	            еднакви
// 4	    'r'	             'r'	            еднакви
// 5	    'i'	             'i'	            еднакви
// 6	    'k'	             'c'	            'k' > 'c' → second е по-малък
// Изход: second
// Сравненията между символи в JavaScript (и повечето програмни езици) се извършват по ASCII (или по-точно Unicode) стойности на символите.
// Пример: 'k' > 'c'   // true - Защо?
// Символ	ASCII стойност
// 'c'	    99
// 'k'	    107
// Понеже 107 > 99, се счита, че 'k' > 'c'.

// Обобщение:
// Какво прави кодът	Защо го правим
// .split('')	Превръща стринг в масив от символи
// Math.min(length1, length2)	За да сравним до по-късата дължина
// if (first[i] < second[i])	Лексикографско сравнение (по азбука)
// isEqual	Флаг, ако до момента няма разлики
// if (first.length < second.length)	Ако символите са еднакви, по-късата дума печели

// Write a program that compares two char arrays lexicographically (letter by letter). Research how to convert string to char array.
// Input
// On the first line, you will receive the first array as a string
// On the second line, you will receive the second array as a string
// Output
// Print "first" if the first array is lexicographically smaller
// Print "second" if the second array is lexicographically smaller
// Print "equal" if the arrays are equal
// Constraints
// The strings will always be with lower case characters
// You do not need to explicitly validate the input
// Sample tests
// Input
// telerik
// teleric
// Output
// second

