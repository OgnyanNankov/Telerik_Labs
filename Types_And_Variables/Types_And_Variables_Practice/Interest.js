// Task 'Interest':

let input = [
    '100',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let interestFirstYear = (n * 5)/100;
let totalFirstYear = n + interestFirstYear;
let interestSecondYear = (totalFirstYear * 5)/100;
let totalSecondYear = totalFirstYear + interestSecondYear;
let interestThirdYear = (totalSecondYear * 5)/100;
let totalThirdYear = totalSecondYear + interestThirdYear;

// Produce an output the system can then check
print(totalFirstYear.toFixed(2));
print(totalSecondYear.toFixed(2));
print(totalThirdYear.toFixed(2));

// Easier solution with 0.05 (5%) - always try to convert percentage to decimal - 5% means that you have 5 out of 100 (5/100). Because there is a one in front you divide 5 by 1, which is just 5. 
// Then you move the decimal point left by the number of zeroes, which is 2. So 5.0 becomes 0.05.

let deposit = +gets();
let firstYear = deposit + deposit * 0.05;
let secondYear = firstYear + firstYear * 0.05;
let thirdYear = secondYear + secondYear * 0.05;

print(firstYear.toFixed(2));
print(secondYear.toFixed(2));
print(thirdYear.toFixed(2));
