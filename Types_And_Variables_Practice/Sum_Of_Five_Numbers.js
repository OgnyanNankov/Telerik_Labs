// Task 'Sum Of Five Numbers':

let input = [
    '1',
    '2',
    '3',
    '4',
    '5',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

// Process the data
let sum = a + b + c + d + e;

// Produce an output the system can then check
print(sum);
