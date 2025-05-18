// Task 'Game'                                              // Дадено е трицифрено число (напр. 185). Трябва да изпробваме всички възможни комбинации от събиране и умножение между трите цифри като спазваме приоритета на операциите. След това отпечатваме най-големия резултат.

let input = [                                                             
    '185'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = gets();                                                       // Прочитаме числото '185' – все още е стринг (стринг от символи: '1', '8', '5')

let a = Number(number[0]);                                                 // Разделяме трите цифри и ги преобразуваме в числа: а = 1, b = 8, c = 5
let b = Number(number[1]);
let c = Number(number[2]);

result1 = a + b + c;                                                       // 1 + 8 + 5 = 14
result2 = a * b * c;                                                       // 1 * 8 * 5 = 40
result3 = a + b * c;                                                       // Спазваме приоритета на операторите: b * c = 8 * 5 = 40 / a + (b * c) = 1 + 40 = 41
result4 = a * b + c;                                                       // Спазваме приоритета на операторите: a * b = 1 * 8 = 8 / 8 + 5 = 13

console.log(Math.max(result1, result2, result3, result4));


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
