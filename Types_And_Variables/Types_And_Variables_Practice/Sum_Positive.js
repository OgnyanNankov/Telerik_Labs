// Task 'Sum Positive ':

let input = [
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let sum = n * (n + 1) / 2;      // As advised in the description, we can use the formula sum = n * (n + 1) / 2 (Sum of N Terms of AP And Arithmetic Progression)

// Produce an output the system can then check
print(sum);


