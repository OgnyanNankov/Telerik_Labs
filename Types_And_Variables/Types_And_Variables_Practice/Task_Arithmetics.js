// Task 'Arithmetics':

let input = [
    '2',
    '2',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();

// Process the data
let sum = a + b;
let difference = a - b;
let product = a * b;
let remainder = a % b;        // In JavaScript, you can find the remainder when a is divided by b using the modulus operator (%) - This operation finds the remainder when num a is divided by num b
let power = a ** b;           // In javaScript, you can find the power using the the Exponentiation Operator (**) - This operation computes num a raised to the power of num b.

// Produce an output the system can then check
print(sum);
print(difference);
print(product);
print(remainder);
print(power);



