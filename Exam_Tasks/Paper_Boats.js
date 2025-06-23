// Paper Boats

let input = [
    '5 8 4 1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputNumbers = gets().split(' ');

let t = Number(inputNumbers[0]);
let n = Number(inputNumbers[1]);
let s = Number(inputNumbers[2]);
let p = Number(inputNumbers[3]);

let numberOfListsPerTrainer = Math.ceil(n / s);
let totalNumberOfListsNeeded = Math.ceil(t * numberOfListsPerTrainer);
let totalPackages = Math.ceil(totalNumberOfListsNeeded/p)

console.log(totalPackages);

// let numberOfTrainers = 5             // T
// let numberOfBoats = 8                // N
// let numberOfTrainers = 5             // S
// let sheetPackages = 1                 // P

// Всеки трейнър трябва да направи N брой лодки                  N
// От всеки лист хартия могат да се направят S броя лодки        S
// листата идват в пакети. Всеки пакет съдържа P броя листа      P
// има променлива с броя трейнъри                                Т

// инпутът е както следва: TNSP -> Или 5 трейнъра, 8 броя лодки за трейнър, от всеки лист хартия могат да се направят 4 лодки, Брой листа в пакет, което е 1 лист в пакет

// Трябва да изчислим броя пакети, които трябва да купим, за да има достатъчно листа за всеки трейнър:
// За всеки трейнър - 8 броя лодки, два листа, два пакета, съответно за всички 5 трейнъри, ще ни трябват 10 пакета

// Опитах и с math.abs - не стана /гледах видеото за math методи. Използвах част от решението на mock exam task game 


// The annual paper boat race down the Perlovska river is next week and the TA Trainers Team (TTT) are going to participate. There's a slight catch though - the TTT need to make their own paper boats.
// Because they are very good trainers they have decided to optimize the process so the following rules were established:
// Each trainer will have to make N paper boats.
// Each sheet of paper can be used to make S number of boats.
// Sheets come in packages and each contains P sheets of paper.
// There is a variable number of trainers T
// Trainers are pretty stingy so they don't share paper.
// All of the TTT are absolutely awful at math so you will have to calculate the number of packages that need to be bought so there are enough sheets of paper for every trainer.

// Input
// Read from the standard input:

// There is one line of input, containing the four variables:
// T N S P
// Output
// Print to the standard output:

// One line of output - the number of packages that needs to be bought.
// Constraints
// 1 <= T, N, S, P <= 1000
// Sample Tests
// Input
// 5 8 4 1
// Output
// 10
// Input
// 5 3 2 3
// Output
// 4