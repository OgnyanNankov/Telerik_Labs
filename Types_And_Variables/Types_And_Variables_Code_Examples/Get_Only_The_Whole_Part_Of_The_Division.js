// Division
// Number division always produce a real number:

let a = 9 / 3;       // 3
let b = 11 / 3;      // 3.6666666666666665 
let c = 1 / 3;       // 0.3333333333333333
let x = 11.0 / 3.0;  // 3.6666666666666665
let y = -2.5 / 7.5;  // -0.3333333333333333

// Get only the whole part of the division

let x2 = parseInt(11.0 / 3.0);  // 3     Witghout parseInt - 3.6666666666666665
let y2 = parseInt(2.5 / 7.5);   // 0     Witghout parseInt - 0.3333333333333333

console.log(x2);
console.log(y2);