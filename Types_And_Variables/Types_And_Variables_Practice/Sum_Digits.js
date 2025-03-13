// Task 'Sum Digits':

let input = [
    '2346',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let number = gets();

// Process the data
let n1 = Number(number[0]);
let n2 = Number(number[1]);
let n3 = Number(number[2]);
let n4 = Number(number[3]);
let sum = n1 + n2 + n3 + n4;

// Produce an output the system can then check
print(sum);


// Second solution:
// 1. Use the gets() function to read the input from the console. The gets() function reads the user's input as a string. Store the resulting string value in a variable n. 
// 2. Access each digit of the input string using array indexing and convert each digit to a number using the + operator. Add the four numbers together to calculate the sum.
 // 3. Print the sum to the console using the print() function.

// let input = [
//     '2346',

// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// // Read the input from the system
// let n = gets();
 
// // Process the data
// let sum = +n[0] + +n[1] + +n[2] + +n[3];
 
// // Print the sum of the digits
// print(sum);