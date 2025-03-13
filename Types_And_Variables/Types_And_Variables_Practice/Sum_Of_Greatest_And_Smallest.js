// Task 'Sum Of Greatest And Smallest Numbers':

let input = [
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();
let c = +gets();

// Process the data
let smallest = Math.min(a, b, c);          // Use the Math.min() function to find the smallest among the three numbers and store it in the smallest variable.
let greatest = Math.max(a, b, c);          // Use the Math.max() function to find the greatest among the three numbers and store it in the greatest variable.
let sum = smallest + greatest;

// Produce an output the system can then check
print(sum);




 
