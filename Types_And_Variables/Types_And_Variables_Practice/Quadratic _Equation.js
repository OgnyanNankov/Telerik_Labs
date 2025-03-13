// Task 'Quadratic Equation':

let input = [
    '2',
    '5',
    '-3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();
let c = +gets();

// Process the data
let d = b ** 2 - 4 * a * c;                   // ax2 + bx + c = 0   // Assume there always will be one or two real roots (d = b2 - 4ac >= 0).
let x1 = (-b - Math.sqrt(d)) / (2 * a);       // prints its real root x1 = (-b - sqrt(D)) / (2a)
let x2 = (-b + Math.sqrt(d)) / (2 * a);       // prints its real root x2 = (-b + sqrt(D)) / (2a)

// Produce an output the system can then check
print("x1= " + x1.toFixed(1));
print("x2= " + x2.toFixed(1));

// Explanation:
// 1. Input: We read the coefficients a, b, and c
// 2. Discriminant: We calculate D as D = b2 - 4ac >= 0  - this is the formula
// d = 5 ** 2 - 4 * 2 * -3
// d = 25 -- 24 
// d = 49  - The number is positive, hence both roots of this equation are real and unequal.
// 3. Quadratic Formula: Using the quadratic formula, we calculate the two roots x1 and x2: let x1 = (-b - Math.sqrt(D)) / (2 * a); let x2 = (-b + Math.sqrt(D)) / (2 * a);
// x1 = (-5 - Math.sqrt(49)) / (2 * 2)
// x1 = (-5 - 7 / 4)
// x1 = 2 / 4
// x1 = 0.5 
// Same with x2, but we use + instead
// x1 = (-5 + Math.sqrt(49)) / (2 * 2)
// x1 = (-5 + 7 / 4)
// x1 = - 12 / 4
// x1 = - 2 
// 4. Output: We print the roots using print(), rounded to the first decimal place using toFixed(1).

// Useful resources and calculators: 
// Quadratic Formula Calculator: https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php
// Discriminant Calculator: https://quadraticformulacalculator.net/calculator/discriminant-calculator/?a=2&b=5&c=-3&submit=submit
// Quadratic Formula Explanation: https://www.youtube.com/watch?v=aorOtJqOM2I
// Math.sqrt: https://www.youtube.com/watch?v=xR82Jx4pqIc 
 
