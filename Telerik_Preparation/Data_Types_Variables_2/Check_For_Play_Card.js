// Check for Play Card

let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let card = gets();
let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

if (faces.includes(card)) {
    console.log(`yes`);
} else {
    console.log(`no`);
}

// Решение с for цикъл:

// let found = false; // флаг дали сме намерили съвпадение

// for (let i = 0; i < faces.length; i++) {
//     if (card === faces[i]) {
//         found = true;
//         break; // излизаме веднага щом го намерим
//     }
// }

// if (found) {
//     print('yes');
// } else {
//     print('no');
// }

// Обяснение ред по ред:
// let found = false; – започваме с предположението, че не сме намерили картата.
// Обхождаме масива faces с for.
// Ако card === faces[i] → задаваме found = true и спираме цикъла с break.
// Накрая – ако found === true → печатаме 'yes', иначе 'no'.

// Classical play cards use the following signs to designate the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A.
// Write a program that enters a string and prints "yes" if it is a valid card sign or "no" otherwise.
// Input
// On the only line you will receive a single string.
// Output
// Output "yes" if the string is a card sign, otherwise print "no".
// Constraints
// String length will always be between 1 and 5
// Sample tests
// Input
// 5
// Output
// yes
// Input
// q
// Output
// no
// Input
// Q
// Output
// yes