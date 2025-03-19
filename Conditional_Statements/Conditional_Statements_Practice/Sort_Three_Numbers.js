// Task 'Sort Three Numbers'

let input = [
    '1',
    '2',
    '20',

]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let first = +gets();
let second = +gets();
let third = +gets();

// Output the results  -  Sorting logic using nested if-statements
if (first >= second && first >= third) {
    if (second >= third) {
        print(`${first} ${second} ${third}`);
    } else {
        print(`${first} ${third} ${second}`);
    }
} else if (second >= first && second >= third) {
    if (first >= third) {
        print(`${second} ${first} ${third}`);
    } else {
        print(`${second} ${third} ${first}`);
    }
} else { // third is the largest
    if (first >= second) {
        print(`${third} ${first} ${second}`);
    } else {
        print(`${third} ${second} ${first}`);
    }
}

// All Possible Scenarios for 3 Numbers (Descending Order)
// We need to compare A, B, and C in all possible relative orders.

// Case 1: A is the Largest
// A ≥ B ≥ C → Print: A B C
// A ≥ C ≥ B → Print: A C B
// Case 2: B is the Largest
// B ≥ A ≥ C → Print: B A C
// B ≥ C ≥ A → Print: B C A
// Case 3: C is the Largest
// C ≥ A ≥ B → Print: C A B
// C ≥ B ≥ A → Print: C B A
// Case 4: All Numbers are Equal
// A == B == C → Print: A B C

// 💡 Why This Covers All Cases
// Each number has a chance to be the largest.
// The remaining two numbers are compared to determine the order.
// We account for the equality case separately.

// 🚀 Quick Reference Table
// Scenario	    Largest Number	     Order
// A ≥ B ≥ C	     A	             A B C
// A ≥ C ≥ B	     A	             A C B
// B ≥ A ≥ C	     B	             B A C
// B ≥ C ≥ A	     B	             B C A
// C ≥ A ≥ B	     C	             C A B
// C ≥ B ≥ A	     C	             C B A
// A == B == C	     -	             A B C

// 🎯 Summary
// When implementing the sorting logic:
// First, find the largest number (A, B, or C).
// Then, compare the remaining two numbers to determine their order.
// Handle the case where all three numbers are equal separately.


