// Task `Chinese Zodiac`

let input = [
    '2000',
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let year = +gets();

// Process the data
let repeatingCycle = 12;

if (year % repeatingCycle == 0) {
    print(`Monkey`);
} else if (year % repeatingCycle == 1) {
    print(`Rooster`);
} else if (year % repeatingCycle == 2) {
    print(`Dog`);
} else if (year % repeatingCycle == 3) {
    print(`Pig`);
} else if (year % repeatingCycle == 4) {
    print(`Rat`);
} else if (year % repeatingCycle == 5) {
    print(`Ox`);
} else if (year % repeatingCycle == 6) {
    print(`Tiger`);
} else if (year % repeatingCycle == 7) {
    print(`Hare`);
} else if (year % repeatingCycle == 8) {
    print(`Dragon`);
} else if (year % repeatingCycle == 9) {
    print(`Snake`);
} else if (year % repeatingCycle == 10) {
    print(`Horse`);
} else if (year % repeatingCycle == 11) {
    print(`Sheep`);
}

// Understanding Why the Remainder Ranges from 0 to 11. When we use the modulo operator % (remainder) which finds the remainder when dividing one number by another.
// // Since we are dividing by 12, the remainder will always be between: 0 =< R <12, or  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
// It will never be 12 or higher, because once we reach 12, the cycle repeats(since 12 itself is a multiple of 12).

// Solved using the Modulo operator (remainder). Best way to determine which number of the 12 year cycle corresponds to each sign:
// 2000 % 12 = 8
// 2001 % 12 = 9
// 2002 % 12 = 10
// 2003 % 12 = 11
// 2004 % 12 = 0
// 2005 % 12 = 1
// 2006 % 12 = 2
// 2007 % 12 = 3
// 2008 % 12 = 4
// 2009 % 12 = 5
// 2010 % 12 = 6
// 2011 % 12 = 7




