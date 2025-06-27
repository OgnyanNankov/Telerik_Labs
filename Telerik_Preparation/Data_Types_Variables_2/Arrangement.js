// Arrangement

let input = [
    '5 4 6 3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let numbers = gets().split(' ').map(Number);
let pot1 = numbers[0];
let pot2 = numbers[1];
let pot3 = numbers[2];
let pot4 = numbers[3];

if (pot1 < pot2 && pot2 < pot3 && pot3 < pot4) {
    console.log(`Ascending`);
} else if (pot1 > pot2 && pot2 > pot3 && pot3 > pot4) {
    console.log(`Descending`);
} else {
    console.log(`Mixed`);
}




// Loni the elephant has four flower pots on his window sill.
// The pots have specific heights and Loni likes it when they are arranged in an ascending order of height.
// Loni's mother rearranges the pots every day and Loni gets confused. Now he wants to teach his home robot to do the arrangement.
// For the purpose, write a program sort, which sends the robot a message about how the pots are arranged, given the heights of the pots.
// Input
// On the first and only line of the standard input you will receive four integers h1, h2, h3, h4 - the heights of the pots
// Output
// Print one of the following to the standard output:
// Ascending if the pots have strictly increasing heights
// Descending if the pots have strictly decreasing heights
// Mixed if the pots are not sorted by height
// Constraints
// 0 ≤ h1,h2,h3,h4 ≤ 100;
// Sample tests
// Input
// 3 4 5 6
// Output
// Ascending
// Input
// 3 4 4 5
// Output
// Mixed
// Input
// 6 4 3 1
// Output
// Descending
// Input
// 5 4 6 3
// Output
// Mixed