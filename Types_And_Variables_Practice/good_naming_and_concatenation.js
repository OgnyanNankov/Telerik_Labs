// let input = [
//     '-2', 
//     '-5',
// ];
 
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// // Read the input from the system
// let inputOne = +gets();
// let inputTwo = +gets();
 
// // Process the data
// let output = inputOne + inputTwo;
 
// // Produce an output the system can then check
// print(output);


// ************************************************

// // let input = [
// //     '2 2', 
// // ];
 
// // let print = this.print || console.log;
// // let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// // let inputOne = +gets(); 

// // print(inputOne);


//  ***********************************************

let input = [
    '10', 
    '10',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let lenght = +gets();
let width = +gets();
 
// Process the data
let area = lenght * width;
 
// Produce an output the system can then check
print(area);


//  **************************************************

// Demonstrating variable declaration and good naming practices
let userIncome = 1200; // Number type
let userExpense = 300.50; // Floating point number
let hasSavings = true; // Boolean type
 
// Demonstrating arithmetic operators and parsing
let sum = userIncome + userExpense; // Addition
let difference = userIncome - userExpense; // Subtraction
let division = userIncome / 2; // Division
let multiplication = userExpense * 2; // Multiplication
 
// Parsing
let stringNumber = "150";
let parsedNumber = parseInt(stringNumber); // Parsing string to integer
 
// Using console.log()
console.log(`Sum: ${sum}, Difference: ${difference}, Division: ${division}, Multiplication: ${multiplication}`);
console.log();
console.log(`Parsed Number: ${parsedNumber}`);
 