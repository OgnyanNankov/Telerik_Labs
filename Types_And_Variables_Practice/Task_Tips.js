// Task 'Tips':

let input = [
    '10',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let bill = +gets();

// Process the data
let tip = bill * 10 / 100;
let total = bill + tip;

// Produce an output the system can then check
print(Math.round(total));


// 2. Second solution with calculating the tip by multiplying the meal price by 0.1 (which is 10%):

// let bill = +gets();
// let tipPercentage = 0.1; // 0.1 is 10%
// let tip = bill * tipPercentage;

// print(bill + tip);