// Task 'Find Average' 

let input = [
    '4',
    '1',
    '1',
    '1',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let sum = 0;

for (let i = 1; i < n; i++) {
    let value = +gets();
    sum += value;
}

let average = sum / n;

print(average.toFixed(2));


// You need to calculate the average of a collection of values. Every value will be valid number. The average must be printed with two digits after the decimal point.
// Input
// On the first line, you will receive N - the number of the values you must read
// On the next N lines you will receive numbers.
// Output
// On the only line of output, print the average with two digits after the decimal point.
// Input
// 4
// 1
// 1
// 1
// 1
// Output
// 1.00


// Read the first line of input from the console using the gets() function. Convert the input string to a number using the unary plus operator (+). Store the resulting number in a variable called n.
// Initialize a variable called sum to 0. This variable will be used to calculate the sum of the values.
// Start a for loop that will iterate n times. The variable i is the loop counter.
// Inside the loop, read the next value from the input using the gets() function. Convert the input string to a number using the unary plus operator. Store the resulting number in a variable called value.
// Add the current value to the sum using the += operator.
// After the loop, calculate the average by dividing the sum by n. Store the resulting number in a variable called average.
// Print the average to the console using the console.log() function. Round the average to two decimal places using the toFixed() method.