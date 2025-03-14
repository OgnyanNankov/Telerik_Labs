// Task `Dog Years`

let input = [
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let humanYears = +gets();

// Process the data

if (humanYears <= 2) {
    print(humanYears * 10);
} else {
    print(((humanYears - 2) * 4) + (2 * 10));
}


// // Another solution: 
// // Read the number of human years from the input and convert it to a numerical value.
// let HY = +gets();
 
// // Initialize a variable to store the count of years beyond the first 2 human years.
// let rest = 0;
 
// // Check if the given human years are 2 or less.
// if (HY <= 2) {
//     // If yes, each human year is equivalent to 10 dog years. Print the result.
//     print(HY * 10);
// } else {
//     // Calculate how many years exceed the first 2 human years.
//     rest = HY - 2;
 
//     // The first 2 human years equate to 20 dog years. For the rest of the years, each year is 4 dog years.
//     // Calculate the total dog years and print the result.
//     print(20 + (rest * 4));
// }