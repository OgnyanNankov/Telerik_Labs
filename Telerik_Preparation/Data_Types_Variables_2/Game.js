// Game
let input = [
    '185',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = gets();                                                             // Четем кода от масива като стринг, за да можем да достъпим после символите от стринга и да ги конвертираме в числа 

let a = Number(n[0]);                                                       // n[0] достъпва първия символ от стринга → '1', Number('1') преобразува към число → 1
let b = Number(n[1]);                                                       // n[1] достъпва втория символ от стринга → '8', Number('8') преобразува към число → 8
let c = Number(n[2]);                                                       // n[2] достъпва третия символ от стринга → '5', Number('5') преобразува към число → 5

let result1 = a * b * c;
let result2 = a + b + c;
let result3 = a * b + c;
let result4 = a + b * c;

print(Math.max(result1, result2, result3, result4));                        // Намираме най-голямото от четирите резултата


// Решение със gets().split('').map(Number);
// let input = ['185'];
// let gets = ((arr, index) => () => arr[index++])(input, 0);

// let [a, b, c] = gets().split('').map(Number);

// let result = Math.max(
//   a + b + c,
//   a * b * c,
//   a + b * c,
//   a * b + c
// );

// console.log(result); // 41
// **********************
// Какво прави това:
// gets() – прочита входа като стринг → '185'
// .split('') – разделя го на масив от символи → ['1', '8', '5']
// .map(Number) – преобразува всеки елемент от масива в число → [1, 8, 5]
// let [a, b, c] = ... – деструктурира масива, така че:
// a = 1
// b = 8
// c = 5


// Three friends came up with a game for having fun in the break between the classes.
// One of them says a three-digit number and the others use it to form a mathematical expressions by using operators for sum and multiplication between the digits.
// The winner is the first one who founds the biggest number that is a result of the above mentioned rules.
// Write a program 'game', which prints out that biggest number.
// Input
// Read from the standard input
// The first line of the input will be positive three-digit number N.
// Output
// Print on the standard output
// The result should be the calculated biggest number.
// The calculation order
// Sample tests
// Input
// 185
// Output
// 41
// Input
// 111
// Output
// 3