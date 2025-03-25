// Task 'Find Maximum Value'

let input = [
    '3',
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let max = -Infinity;

for (let i = 1; i <= n; i++) {

    let n2 = +gets();                                               // Можем да представим двата реда и така: let currentNum = +gets();            
    let currentNum = n2

    if (currentNum > max) {
        max = currentNum;
    }
}

// Output result
print(max);

// Read the first line of input from the console. Use the gets() function to read the input as a string, and the Number() function to convert the string to a number. Store the resulting number in a variable called n.
// Initialize a variable called max with a value of negative infinity. This will ensure that any number will be larger than max.
// Start a for loop that iterates from 1 up to and including n. The variable i is the loop counter.
// Inside the loop, read the next number from the input, convert it to a number, and store it in a variable called currentNum.
// Check if currentNum is greater than max. If it is, update max with the value of currentNum.
// After the loop, print the maximum number found (max) to the console using the console.log() function.

// Write a program that finds the maximum number from a given sequence.
// Input
// On the first line you will receive one number - N - the count of numbers to follow.
// On the next N lines you will receive the sequence of numbers, each on a new line.
// Output
// Output only one number - the maximum number you find
// Constraints
// 1 <= N <= 20
// -200 <= each number <= 200
// Input
// 3
// 1
// 2
// 3
// Output
// 3