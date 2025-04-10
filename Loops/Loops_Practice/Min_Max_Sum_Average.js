// Task 'Min Max Sum Average' 

let input = [                                                              // Инпутът е тестов вход – масив от низове. Първият елемент '3' е броят на числата, а останалите са самите числа. Това симулира поведение, подобно на четене от конзола.
    '3',
    '2',
    '5',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let sum = 0;                                                                  // Защо -Infinity и +Infinity?
let max = -Infinity;                                                          // max = -Infinity – така всяко реално число ще е по-голямо и ще замести max при първата проверка.
let min = +Infinity;                                                          // min = +Infinity – всяко реално число ще е по-малко, така че ще замести min. Това гарантира, че първото число, което прочетеш, автоматично ще зададе начални реални стойности на min и max.

for (let i = 0; i < n; i++) {                                                 // Цикъл, който ще се изпълни n пъти. Във всяка итерация: Чете число от входа и го добавя го към sum
    let num = +gets();
    sum += num;

    let currentNum = num;

    if (currentNum > max) {                                                   // Проверява дали текущото число е по-голямо от текущото max: → ако да, обновява max
        max = currentNum;
    }

    if (currentNum < min) {                                                   // Проверява дали текущото число е по-малко от текущото min: → ако да, обновява min
        min = currentNum;
    }
}

let average = sum / n;                                                        // Изчислява средноаритметичното (avg) от всички числа.

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${average.toFixed(2)}`);


// Обобщение – Защо +Infinity и -Infinity?
// Променлива	Начална стойност	Защо така?
// min	        +Infinity	        Защото всяко реално число ще е по-малко → първото число ще го замести
// max	        -Infinity	        Защото всяко реално число ще е по-голямо → първото число ще го замести
// Така си гарантираш, че независимо какви са входните числа (дори всички да са отрицателни или положителни), логиката за намиране на min/max ще сработи правилно.

// Description: Write a program that reads from the console a sequence of N real numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).
// The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
// The output is like in the examples below.
// Input
// On the first line, you will receive the number N.
// On each of the next N lines, you will receive a single real number.
// Output
// You output must always consist of exactly 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:
// min=3.00
// max=6.00
// sum=9.00
// avg=4.50
// Constraints
// 1 <= N <= 1000
// All numbers will be valid numbers that will be in the range [-10000, 10000]

// Read the first line of input from the console using the gets() function. Convert the input string to a number using the Number() function. Store the resulting number in a variable called N.
// Initialize a variable called sum to 0. This variable will be used to calculate the sum of the numbers.
// Initialize two variables called min and max to store the minimum and maximum values. Set min to positive infinity and max to negative infinity to ensure that they are correctly updated in the loop.
// Start a for loop that will iterate N times. The variable i is the loop counter.
// Inside the loop, read the next number from the input using the gets() function. Convert the input string to a number using the Number() function. Store the resulting number in a variable called num.
// Add num to the sum using the += operator.
// Update min and max if num is lower or higher than the current values respectively. Use the if statement and the less than (<) and greater than (>) operators to perform these checks.
// After the loop, print the minimum, maximum, sum, and average values to the console using the console.log() function. Format each value to two decimal places using the toFixed() method. Use template literals to format the output as strings in the required format.
