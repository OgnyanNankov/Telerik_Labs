// Task 'Mineral Water' 

let input = [
    '3',                                                                         // smallBottles → 3 малки бутилки (по 1 литър)
    '1',                                                                         // bigBottles   → 1 голяма бутилка (по 5 литра)
    '9',                                                                         // truckCapacity → капацитет на камиона: 9 литра
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let smallBottles = Number(gets());
let bigBottles = Number(gets());
let truckCapacity = Number(gets());

let maxBigBottlesNeeded = Math.floor(truckCapacity / 5);                         // 9 / 5 = 1.8 -> Math.floor(1.8) е 1. Можем да използваме максимум 1 голяма бутилка (5 литра), за да не надвишим капацитета.
let bigBottlesToUse = Math.min(bigBottles, maxBigBottlesNeeded);                 // Math.min(1, 1); // → 1. Имаме 1 голяма бутилка → ще я използваме
let litresFromBig = bigBottlesToUse * 5;                                         // litresFromBig = 1 * 5; // → 5 литра

let remainingLitres = truckCapacity - litresFromBig;                             // 9 - 5 = 4. Остават 4 литра, които трябва да се запълнят с малки бутилки (по 1л)

if (remainingLitres <= smallBottles) {                                          // Проверяваме: Имаме 3 малки бутилки. Нужни са ни 4 малки, за да достигнем 9 литра. В този случай не успяваме: 4 > 3 → няма достатъчно малки бутилки. Изход -1
    console.log(remainingLitres);                                               // Това е броят на малките бутилки, които ще се ползват
} else {
    console.log(-1);
}

// Jimmy is a truck driver who delivers mineral water.
// He loads the water from a warehouse and distributes it within many stores in the town.
// Sometimes when Jimmy goes to the warehouse there is not enough water to full the truck which makes him angry.
// He wants to go for delivery only if the truck is full.
// You can help him if you write a program that checks if it is possible to load the whole truck.
// The mineral water is available in two types of bottles - 1 liter and 5 liters.
// Jimmy always tries to load as much of the big bottles first and then adds small bottles.
// Given the capacity of the truck and the available bottles in the warehouse you should calculate the number of small bottles that he will load.
// If there are not enough small bottles the result should be -1.

// Input
// Read from the standard input:

// The number of small bottles in the warehouse - integer number
// The number of big bottles in the warehouse - integer number
// The capacity of the truck - integer number
// Output
// Print to the standard output:

// One line of output:
// the number of small bottles he will deliver.
// -1 if not possible to fill completely the truck.
// Sample Tests
// Input
// 3
// 1
// 8
// Output
// 3
// Input
// 3
// 1
// 9
// Output
// -1
// Explanation
// He can load 9 liters in the truck. If he gets 1 big bottle and 3 small bottles, he will have 8 liters and space for 1 more, so he will not make a delivery.