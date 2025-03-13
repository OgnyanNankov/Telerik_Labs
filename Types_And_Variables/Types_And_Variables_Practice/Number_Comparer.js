// Task 'Number Comparer':

let input = [
    '5',
    '6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();

// Produce an output the system can then check
print(Math.max(a, b));                                 // Print the greater of the two numbers using Math.max() function
