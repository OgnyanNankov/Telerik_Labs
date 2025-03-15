// Task `Bonus Score`

let input = [
    '10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let score = +gets();

// Output the results 

if (score >= 1 && score <= 3) {
    print(score * 10);
} else if (score > 4 && score < 6) {
    print(score * 100);
} else if
    (score >= 4 && score <= 6) {
    print(score * 100);
} else if
    (score >= 7 && score <= 9) {
    print(score * 1000);
} else  {
print(`invalid score`); 
}


// Another solution
// let score = Number(gets());
 
// if (score >= 1 && score <= 3) {
//     score = score * 10;
//     console.log(score);
// } 
// else if (score >= 4 && score <= 6) {
//     score = score * 100;
//     console.log(score);
// } 
// else if (score >= 7 && score <= 9) {
//     score = score * 1000;
//     console.log(score);
// } 
// else if (score <= 0 || score > 9) {
//     console.log('invalid score');
// }
 
// The conditional blocks apply bonus points according to the score ranges defined in the task description,
// ensuring that only scores within 1 to 9 are processed, while any other scores are considered invalid.
