// Task 'Time':

let input = [
    '4',
    '3',
    '11',
    '40',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let days = +gets();
let hours = +gets();
let minutes = +gets();
let seconds = +gets();

// Process the data
let secInMinutes = minutes * 60;
let secInHours = (hours * 60) * 60;
let minInDays = (days * 24) * 60;
let secInDays = minInDays * 60

let sum = seconds + secInMinutes + secInHours + secInDays;

// Produce an output the system can then check
print(sum);
