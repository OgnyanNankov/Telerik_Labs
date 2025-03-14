// Example 1
// We can have more than one statement to check:

let score1 = 85; // You can change this value to test different outcomes
 
if (score1 === 100) {
  console.log('Excellent! This is the max score for a task!');
} else if (score1 < 100 && score1 >= 75) {
  console.log('These points are OK!');
} else {
  console.log('We recommend solving more tasks.');
}
// Example 2
// Chain if else statements to check multiple conditions.

let score = 85; // You can change this value to test different outcomes
let letter = '';
 
 
if (score >= 90) {
    letter = 'A'; // If score is between 90 and 100, it assigns "A" to letter.
} else if (score >= 80) {
    letter = 'B'; // If score is between 80 and 89, it assigns "B" to letter.
} else if (score >= 70) {
	letter = 'C'; // If score is between 70 and 79, it assigns "C" to letter.
} else if (score >= 60) {
	letter = 'D'; // If score is between 60 and 69, it assigns "D" to letter.
} else {
	letter = 'F'; // If score is below 60, it assigns "F" to letter.
}
 
console.log('Your grade is ' + letter);

// Example 3 

let letter2 = 'U'.toLowerCase();

if (letter2 === 'a') {
  console.log('Vowel [ei]');
} else if (letter2 === 'e') {
  console.log('Vowel [i:]');
} else if (letter2 === 'i') {
  console.log('Vowel [ai]');
} else if (letter2 === 'o') {
  console.log('Vowel [ou]');
} else if (letter2 === 'u') {
  console.log('Vowel [ju:]');
} else {
  console.log('Consonant');
}