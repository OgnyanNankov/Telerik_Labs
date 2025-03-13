// Task 'Sum of three numbers': 

let input = [
    '3',
    '4',
    '11',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let firstNumber = +gets();
let secondNumber = +gets();
let thirdNumber = +gets();

// Process the data
let sumThree = firstNumber + secondNumber + thirdNumber;

// Produce an output the system can then check
print(sumThree);
