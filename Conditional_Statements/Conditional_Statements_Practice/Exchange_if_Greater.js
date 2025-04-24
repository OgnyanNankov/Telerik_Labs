// Task `Exchange If Greater`

let input = [
    '5',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();

// Output the results 

if (a > b) {
  print(`${b} ${a}`);

} else {

  print(`${a} ${b}`);
}



// Write a program that reads two double values from the console A and B, stores them in variables and exchanges their values if the first one is greater than the second one. Use an if-statement. 
// As a result print the values of the variables A and B, separated by a space.
// Input
// On the first line, you will receive the value of A
// On the second line, you will receive the value of B
// Output
// On the only output line, print the values of the two variables, separated by a whitespace
// Constraints
// A and B will always be valid real numbers between -100 and 100
// Sample tests
// Input
// 5
// 3
// Output
// 3 5
// Input
// 2
// 4