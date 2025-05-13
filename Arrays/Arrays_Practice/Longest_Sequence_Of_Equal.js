// Task 'Longest Sequence of Equal'
let input = [
    '10',                                                                  // Първият ред '10' показва колко числа ще бъдат подадени (N = 10)
    '2',                                                                   // Останалите 10 реда са числата, които ще обработваме
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());                                                    // Четем първия ред от входа → n = 10 
let currentNum = 0;                                                        // Числото, което в момента проверяваме за последователност
let maxSequence = 0;                                                       // Най-дългата последователност, която сме открили до момента
let sequence = 0;                                                          //  Текущата дължина на последователността

for (let i = 0; i < n; i++) {                                              // Цикъл, който ще се изпълни 10 пъти – за всяко от числата.
    let numToCheck = Number(gets());                                       // Променливата numToCheck съдържа текущото число, което ще проверим дали е същото като предишното

    if (numToCheck === currentNum) {                                       // Сравняваме текущото число от входа с предишното число, което сме срещнали в поредица.
        sequence++;                                                        // Ако са равни увеличаваме текущата поредица (sequence), защото имаме още едно срещане на същото число.
        if (sequence > maxSequence) {                                      // Ако новата дължина на поредицата (sequence) е по-голяма от най-дългата досега (maxSequence), тогава я запазваме я в maxSequence. Коментар 1
            maxSequence = sequence;
        }
    } else {                                                               // Ако числото не е същото: Това значи, че започва нова поредица от различно число.
        currentNum = numToCheck;                                           // Задаваме новото число като "текущо", защото ще следим дали и то ще се повтори
        sequence = 1;                                                      // Започваме нова поредица, която има само едно срещане за момента
    }
}

console.log(maxSequence);

// Коментар 1: Пример: 
// Да кажем, че до момента сме срещнали: 2, 2
// И sequence = 2, maxSequence = 2.
// После идва още една 2:
// if (numToCheck === currentNum) → true
// sequence++ → sequence = 3
// if (sequence > maxSequence) → true → maxSequence = 3

// Коментар 2: Целта на тази логика:
// Случай	                     Действие
// Две еднакви числа подред	     Увеличаваме sequence
// Последователност продължава	 Проверяваме дали е най-дългата досега
// Ново число	                 Рестартираме sequence и обновяваме currentNum


// Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.
// Input
// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given
// Output
// Print the length of the maximal sequence
// Constraints
// 1 <= N <= 1024
// Sample tests
// Input
// 10
// 2
// 1
// 1
// 2
// 3
// 3
// 2
// 2
// 2
// 1
// Output
// 3