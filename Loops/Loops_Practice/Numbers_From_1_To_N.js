// Task 'Numbers from 1 To N'

let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let result = '';                                                       // Initialize an empty string 'result' to store the sequence of numbers

for (let i = 1; i <= n; i++) {                                         // Start a loop that iterates from 1 up to (but not including) N
    result += i + ' ';                                                 // Сhorthand for result = result + i + ' ';  - It concatenates the current number 'i' and a space to the 'result' string
}

// Trim the final space and print
print(result);



// Read the input number from the console. Use the gets() function to read the input as a string, and the Number() function to convert the string to a number. Store the resulting number in a variable called N.
// Initialize an empty string called result to store the sequence of numbers.
// Start a for loop that iterates from 1 up to (but not including) N. The variable i is the loop counter and represents the current number.
// Inside the loop, concatenate the current number (i) and a space to the result string. Use the += operator to add the number and space to the end of the result string.
// After the loop, concatenate N to the result string. This is done outside the loop to avoid an extra space at the end of the string.
// Print the result string to the console using the console.log() function. The result string should contain a sequence of numbers from 1 to N, separated by spaces.

// Write a program that enters from the console a positive integer n and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.
// Input
// The input will consist of a single line - the number N
// Output
// The output should consist of a single line - the numbers from 1 to N, separated by a whitespace
// Constraints
// N will be a valid positive 32-bit integer
// Sample tests
// Input
// 5
// Output
// 1 2 3 4 5