// Task 'Calculate Complex Sum'                                          // Напиши програма, която за дадени две числа N и X, пресмята сумата: S = 1 + 1! / X + 2! / X² + 3! / X³ + ... + N! / Xⁿ
let input = [
    '3',                                                                 // '3' → стойността на n (колко термина да включим)
    '2',                                                                 // '2' → стойността на x (знаменател за степените)
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                        // прочитаме '3' → преобразуваме го в число. n = 3 → ще правим 3 стъпки в цикъла
let x = +gets();                                                        // прочитаме '2' → преобразуваме го в число. x = 2 → всяка следваща стойност е делена на x^i
let result = 1;                                                         // Започваме с S = 1, защото по формулата винаги имаме първоначален член = 1. (първият елемент е без факториел и без x, така че е просто 1)
let latestFactorial = 1;                                                // Тази променлива ще държи стойността на текущия факториел, който ще изчисляваме стъпка по стъпка в цикъла. Започваме с 1! = 1

// Process the data 
for (i = 1; i <= n; i++) {                                              // Влизаме в цикъла: Цикълът ще се изпълни от i = 1 до i = 3 (включително), защото n = 3.

    latestFactorial *= i;                                               // Това изчислява факториела поетапно: Виж в коментар 1
    result += latestFactorial / Math.pow(x, i);                         //  Тук става същността на задачата: Виж в коментар 2
}

print(result.toFixed(5));

// Коментар 1: Това изчислява факториела поетапно:
// i = 1 → latestFactorial = 1 * 1 = 1
// i = 2 → latestFactorial = 1 * 2 = 2
// i = 3 → latestFactorial = 2 * 3 = 6
// Всяка нова стойност използва предишната – така не смяташ всичко от нулата.
// Коментар 2: Тук става същността на задачата:
// Math.pow(x, i) пресмята x на степен i
// Делиш текущия факториел на тази стойност
// И добавяш към общата сума result
// Пример – при x = 2:
// i	latestFactorial 	Math.pow(2, i)	 Term	        result
// 1	1	                2	             1 / 2 = 0.5	1 + 0.5 = 1.5
// 2	2	                4	             2 / 4 = 0.5	1.5 + 0.5 = 2.0
// 3	6	                8	             6 / 8 = 0.75	2.0 + 0.75 = 2.75

// Условие на задачата (разбираемо обяснение)
// Напиши програма, която за две дадени числа – N и X, пресмята една специална математическа сума.Какво означава това?
// Ти трябва да пресметнеш една сума от няколко дроби, където:
// ! означава факториел – това е умножението на всички числа до дадено число:
// 1! = 1
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6 и т.н.
// X^N означава, че в знаменателя на всяка дроб стои числото X, повдигнато на степен N
// Например: X = 2, X^2 = 4, X^3 = 8 и т.н.
// Първият ред съдържа N – колко члена да има сумата
// Вторият ред съдържа X – основата за степенуване

// Факториел: https://bg.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-factorial-function
// Записваме факториелът на n като n!. Това е просто произведението на целите числа от 1 до n. Например 5! е равно на 1*2*3*4*5, или 120.

// Write a program that, for a given two numbers N and X, calculates the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.
// Use only one loop. Print the result with 5 digits after the decimal point.
// Each element is calculated as follows: (previous_element) * i / x
// Input
// On the first line you will receive one number - N.
// On the second line you will receive another number - X.
// Output
// Output only one number - the sum of the sequence for the given N and X.
// Constraints
// N will always be a valid integer between 2 and 10, inclusive.
// X will always be a valid floating-point number between 0.5 and 100
// Sample tests
// Input
// 3
// 2
// Output
// 2.75000


// Read the first number N from the console using the gets() function. Convert the input string to a number using the unary plus operator. Store the resulting number in a constant called n.
// Read the second number X from the console using the gets() function. Convert the input string to a number using the unary plus operator. Store the resulting number in a constant called x.
// Initialize a variable called result with the first term of the series, which is 1.
// Initialize a variable called latestFactorial to store the current factorial value. Start with 1 because the factorial of 0 is 1.
// Start a for loop that iterates from 1 up to and including n. The variable i is the loop counter and represents the current term number.
// Inside the loop, calculate the factorial of i by multiplying latestFactorial by i using the *= operator.

// Add the current term to the result. The current term is calculated as the factorial of i divided by x raised to the power of i. Use the Math.pow() function to calculate x to the power of i.

// After the loop, print the final result to the console using the console.log() function. Round the result to five decimal places using the toFixed() method.