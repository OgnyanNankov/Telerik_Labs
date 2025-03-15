// Task `Biggest of Three`

let input = [
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

// Output the results 
if (first > second && first > third) {
    print(first);
} else if (second > first && second > third) {
    print(second);
} else if
    (third > first && third > second) {
    print(third);
} else {
    print(first)
}

// Programming Concept: To cover all possibilities, you'll want to use multiple if-else statements. 
// This ensures that after checking one condition, the program can check the next one if the previous condition wasn't met.
// Hint: After your first if check, try adding an else if to compare the second number with the others, and finally use an "else" to handle the case where the third number is the biggest.

