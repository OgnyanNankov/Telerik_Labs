// Mirror Codes                                                                    // Програмата чете две числа, намира техните огледални стойности и отпечатва по-голямото.

let input = [
    '234 145',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let numbers = gets().split(' ').map(Number);                                        // Четем от входа:  .split(' ') → разделяме по интервал → ['234', '145'], .map(Number) → превръщаме всяка стойност в число → [234, 145]
let number1 = numbers[0];                                                           // Извличаме всяко число поотделно
let number2 = numbers[1];
let mirror1 = Number(number1.toString().split('').reverse().join(''));              // Превръщаме number1 в огледално число: .toString() → '234', .split('') → ['2', '3', '4'], .reverse() → ['4', '3', '2'], .join('') → '432', Number(...) → 432,  Резултат: mirror1 = 432
let mirror2 = Number(number2.toString().split('').reverse().join(''));

console.log(Math.max(mirror1, mirror2));                                            // Печатаме по-голямото от двете огледални числа:

// Огледално число (mirror number): Най-често означава: число, написано обратно — в обратен ред на цифрите. Пример: 234 → 432, 145 → 541
// Това може да се използва за: проверка дали едно число е палиндром (напр. 121 → 121), игри с огледални стойности, симетрични изчисления.

// Loni the elephant once again forgot his smartphone's PIN code.
// Since it's not the first time happening, he wrote down some guiding notes.
// There are two three-digit numbers. The mirror number of one of the numbers is the PIN code.
// The elephant remembers that this is the larger of the two mirror numbers.
// Write a program pincode, which determines the PIN code, given the two numbers from Loni's notes.
// Input
// Read from the standard input
// On the first line you will receive two three-digit integer numbers a and b - the numbers which Loni wrote down in his notes.
// Output
// Print to the standard output
// Print the found PIN code - the larger of the mirrors of the two numbers.
// Sample tests
// Input
// 234 145
// Output
// 541
// Input
// 100 200
// Output
// 2
// Input
// 202 202
// Output
// 202
// Input
// 210 211
// Output
// 112