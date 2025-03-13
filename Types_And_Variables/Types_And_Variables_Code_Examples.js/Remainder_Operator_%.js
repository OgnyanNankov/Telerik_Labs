
// Remainder operator - %
// Computes the remainder after performing division:

let x = 6 % 2;    // 0
let y = 6 % 4;    // 2
let z = 6 % 8;    // 6
let k = 100 % 33; // 1   - closest to divide to 33 is 99 + the remaining 1 to 100

// The value is the remainder after performing integer division

let minutes = 137;
let hours = parseInt(minutes / 60);
let remainingMinutes = minutes % 60;
 
console.log(`${minutes} minutes is equal to `);
console.log(`${hours} hours and ${remainingMinutes} minutes`); 
// 137 minutes is equal to 2 hours and 17 minutes
