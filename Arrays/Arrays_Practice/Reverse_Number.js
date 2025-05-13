// Task 'Reverse Number'                                                             // Въведено е цяло число. Програмата трябва да го обърне цифра по цифра и да отпечата резултата.
let input = [
    '256'                                                                            // Това е симулиран вход – масив с едно число като стринг '256'.
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = gets().split('');                                                       // Какво се случва тук: gets() връща стринга '256', .split('') → разделя стринга на масив от символи (всяка цифра поотделно)
let reversedNumber = [];                                                             // Създаваме празен масив, в който ще записваме обърнатите цифри.


for (let i = number.length; i >= 0; i--) {                                           // Това е for цикъл, който обхожда масива number отзад напред. Коментар 1.
    reversedNumber.push(number[i]);                                                  // Добавяме текущата цифра в reversedNumber. 

}

console.log(reversedNumber.join(''));                                                // След като обърнем цифрите, ги събираме в стринг: .join('') → събира всички елементи без разделител. Пример: ['6', '5', '2'] → '652'

// Коментар 1: // Проблем: i = number.length започва от един индекс извън границите на масива, защото length = 3, а валидните индекси са 0, 1, 2. Коментар 1.
// По-добра версия: for (let i = number.length - 1; i >= 0; i--) -  Това започва от последния валиден индекс (2) и върви до 0. 
// Цел: Обхождаме масив отзад напред – т.е. започваме от последния елемент и вървим към първия.
// Примерен масив:
// let number = ['2', '5', '6']; // индексите са:
//                //   0    1    2
// Грешен вариант:
// for (let i = number.length; i >= 0; i--) {
//     reversedNumber.push(number[i]);
// }
// Проблем: number.length = 3
// Но валидните индекси на масива са само: 0, 1, 2
// number[3] не съществува → ще върне undefined
// Итерации в грешния цикъл:
// Стойност на i	number[i]	    Какво се добавя в reversedNumber
// 3	            undefined	    грешка / нежелан резултат
// 2	            '6'	            добавя се '6'
// 1	            '5'             добавя се '5'
// 0	            '2'	            добавя се '2'
// -1	            undefined	    надолу до -1 = излишна итерация
// Какво се получава:
// reversedNumber = [undefined, '6', '5', '2']
// Ако после го join()-неш, ще получиш: undefined652
// Правилен вариант:
// for (let i = number.length - 1; i >= 0; i--) {
//     reversedNumber.push(number[i]);
// }
// Обяснение: number.length - 1 → дава последния валиден индекс
// i-- → вървим отзад напред
// i >= 0 → спираме на първия валиден индекс
// Итерации в правилния цикъл:
// Стойност на i   number[i]	Какво се добавя
// 2	           '6'	        '6'
// 1	           '5'	        '5'
// 0	           '2'	        '2'
// reversedNumber = ['6', '5', '2']
// Финален резултат: reversedNumber.join('') → '652'
// Обобщение:
// Цикъл	              Старт	  Условие	Посока	Правилно?
// i = number.length	  3	      i >= 0	назад	❌ НЕ! number[3] не съществува
// i = number.length - 1  2	      i >= 0	назад	✅ Да! обхожда 2 → 1 → 0

// Можем да рещим задачата и просто с .reverse:
// let reversedNumber = gets().split('').reverse().join('');
// console.log(reversedNumber);

// Write a method that reverses the digits of a given decimal number.
// Input
// On the first line you will receive a number
// Output
// Print the given number with reversed digits
// Sample tests
// Input	Output
// 256	652
// 123.45	54.321

