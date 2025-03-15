// Task `Multiplication Sign`

let input = [
    `-0.5`,
    `0`,
    `-2`,
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

// Read the input from the system
let a = +gets();
let b = +gets();
let c = +gets();
let d = a + b + c;

// Output the results 

if (d > 0) {
    print(`+`);
} else if (d == 0) {
    print(0);
} else if (d < 0) {
    print(`-`)
}


// Write a program that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.

// Use a sequence of if operators.
// Input
// On the first three lines, you will receive the three numbers, each on a separate line
// Output
// Output a single line - the sign of the product of the three numbers
// Constraints
// The input will always consist of valid floating-point numbers
// Sample tests
// Input
// 2
// 5
// 2
// Output
// +

// I noticed that you're using the sum of the numbers (d = a + b + c) to determine the sign. 
// However, the problem asks for the sign of the product of the three numbers, not their sum.

// Understanding the product's sign involves:
// Checking for zero: If any number is zero, the product is 0.
// Counting negative numbers: If there's an odd number of negative inputs, the product is -; if it's even, the product is +.
// A helpful hint: Instead of adding the numbers, try using if statements to check each number for being negative or zero, and keep track of the count of negative numbers. 
// This approach will align your solution with the problem requirements. You're definitely on the right path—keep going!