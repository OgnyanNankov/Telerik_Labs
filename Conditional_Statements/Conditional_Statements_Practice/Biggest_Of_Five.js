// Task `Biggest of Five`

let input = [
    '4',
    '4',
    '4',
    '4',
    '4',

]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let first = +gets();
let second = +gets();
let third = +gets();
let fourth = +gets();
let fifth = +gets();

// Output the results 
if (first > second && first > third && first > fourth && first > fifth) {
    print(first);
} else if (second > first && second > third && second > fourth && second > fifth) {
    print(second);
} else if (third > first && third > second && third > fourth && third > fifth) {
    print(third);
} else if (fourth > first && fourth > second && fourth > third && fourth > fifth) {
    print(fourth);
} else {
    print(fifth);
}

// Another solution
// Read five input numbers and convert them to Number data type
const a = Number(gets());  // read the first number from input and convert it to Number
const b = Number(gets());  // read the second number from input and convert it to Number
const c = Number(gets());  // read the third number from input and convert it to Number
const d = Number(gets());  // read the fourth number from input and convert it to Number
const e = Number(gets());  // read the fifth number from input and convert it to Number
 
let biggestNumber = a; // initialize the current biggest number to be the first number
 
if (b > biggestNumber) {  // check if the second number is bigger than the current biggest number
    biggestNumber = b;      // if yes, then update the biggest number to be the second number
}
 
if (c > biggestNumber) {  // check if the third number is bigger than the current biggest number
    biggestNumber = c;      // if yes, then update the biggest number to be the third number
}
 
if (d > biggestNumber) {  // check if the fourth number is bigger than the current biggest number
    biggestNumber = d;      // if yes, then update the biggest number to be the fourth number
}
 
if (e > biggestNumber) {  // check if the fifth number is bigger than the current biggest number
    biggestNumber = e;      // if yes, then update the biggest number to be the fifth number
}
 
// Output the biggest number
console.log(biggestNumber);  // print the biggest number to the console