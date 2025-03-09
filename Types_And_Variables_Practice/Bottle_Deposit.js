// Task 'Bottle Deposit':

let input = [
    '10',
    '10',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let halfLitreBottles = +gets();
let litreBottles = +gets();

// Process the data
let totalHalf = halfLitreBottles * 0.1;
let totalLitre = litreBottles * 0.25;
let totalSum = totalHalf + totalLitre;

// Produce an output the system can then check
print(totalSum.toFixed(2));
