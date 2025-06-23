// Data Protector

let input = [
    '1 2 3 4',
    'a b c d',
    '1 2, 2 3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arrayOne = gets().split(' ');
let arrayTwo = gets().split(' ');
let instructions = gets().split(',');;
let arrayOneUpdated = '';
let arrayTwoUpdated = '';

for (let instruction of instruction) {

}
console.log(arrayOneUpdated);
console.log(arrayTwoUpdated);

// Инструкции 1 2, (разменяме по индекс 1 и 2)  - разменяме всичко между първи и втори индекс примерно: 1234 и abcd, става 1bc4 и а23d
// Инструкции 2 3, (вече ъпдейтнатите масиви се ъпдейтват по 2 и 3 индекс)  - 1bc4 и a23d става 1б3d i a2c4
// Инструкции 4 1,   12345 и abcde стават
//                   12cd5   ab43e
//

// You are beginning to resent your job as a Data Protector and why wouldn't you - just copying sequences of symbols over and over again.
// Data Protection is a mundane but important business - tough job, but somebody has to do it.
// While applying protection to the last two sequences, you notice something you haven't thought of before - it's the same process every time, just the symbols are different!

// For example, when you have the sequences 1 2 3 4 and a b c d, and the instructions 1 2, applying protection would mean just swapping everything between the first and second index (both inclusive)
// - so the protected sequences would be 1 b c 4 and a 2 3 d.
//
// And that's just the first level of protection, if there is another one with instructions 2 3, what would you get is (applied to the already protected sequences) 1 b 3 d and a 2 c 4.
//
// You start seeing the pattern and realize that if you automate this tedious process you'll never have to repeat it ever again!

// There is one tricky part though - sometimes the instructions are reversed! With the sequences 1 2 3 4 5 and a b c d e and instructions 4 1 you need to swap the last ones (at index 4) and then jump to the front to finish with indices 0 and 1.
//
// You are a little confused at first but then you write down the results a b 3 4 e and 1 2 c d 5 and suddenly it all makes perfect sense!

// Input
// Exactly three lines:

// first sequence (separated by a space)
// second sequence (separated by a space)
// instructions (pairs separated by commas) - S1 E1, S2 E2, ..., Sn En
// Output
// Exactly two lines:

// first protected sequence (separated by a space)
// second protected sequence (separated by a space)
// Constraints
// the two sequences are always the same length
// there are no invalid indices
// the two indices in a pair are always different
// Sample tests
// Input
// 1 2 3 4
// a b c d
// 1 2, 2 3
// Output
// 1 b 3 d
// a 2 c 4
// Input
// 1 2 3 4 5
// a b c d e
// 4 1, 2 4, 2 3
// Output
// a b 3 4 5
// 1 2 c d e