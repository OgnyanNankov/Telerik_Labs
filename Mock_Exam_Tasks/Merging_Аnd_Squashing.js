// Task 'Merging and Squashing'                                                 // Работим с поредица от 2-цифрени числа (напр. 12, 23, 34...), Идеята е: Коментар 1
let input = [
    '4',
    '12',
    '23',
    '34',
    '45',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());                                                           // Прочитаме броя на числата: n = 4
let mergedNum = '';                                                               // Тук ще съхраняваме резултатите за отпечатване: mergedNum: поредица от слети цифри
let squashedNum = '';                                                             // squashedNum: нови числа по правилото за "смачкване"
let previousNum = gets();                                                         // Четем първото число: previousNum = '12'

for (i = 0; i < n - 1; i++) {                                                     // Ще направим 3 итерации (n - 1 = 3), защото сравняваме двойки: 12 → 23, 23 → 34, 34 → 45
    let currentNum = gets();                                                      // Четем следващото число (в първата итерация → 23)
    let a = previousNum[0];                                                       // Пример: previousNum = '12' → a = '1', b = '2',  currentNum = '23' → c = '2', d = '3'
    let b = previousNum[1];
    let c = currentNum[0]
    let d = currentNum[1]

    mergedNum += `${b + c} `;                                                    // Слепяме втората цифра на предишното с първата на текущото: '2' + '2' = '22' → добавяме към mergedNum
    squashedNum += `${a + ((Number(b) + Number(c)) % 10) + d} `;                 // Обяснение в Коментар 2: 

}

console.log(mergedNum);
console.log(squashedNum);

// Коментар 1: Цел на задачата: Работим с поредица от 2-цифрени числа (напр. 12, 23, 34...). Идеята е:
// Merged → слепваме втората цифра на предходното и първата на текущото число
// Squashed → образуваме ново 3-цифрено число, където:
// първата цифра е a (първа от предишното)
// втората е (b + c) % 10
// третата е d (втора от текущото)
// Коментар 2: squashedNum += `${a + ((Number(b) + Number(c)) % 10) + d} `;
// a → първата цифра от previousNum ('1')
// b → втората цифра от previousNum ('2')
// c → първата от currentNum ('2')
// d → втората от currentNum ('3')
// Пресмятаме:
// (Number(b) + Number(c)) % 10 = (2 + 2) % 10 = 4
// Сглобяваме: '1' + '4' + '3' → '143'
// Добавяме към squashedNum

// Итерации за вход: 12, 23, 34, 45
// 1. 12 → 23
// Merged: '2' + '2' = '22'
// Squashed: '1' + (2+2)%10 + '3' = '143'
// 2. 23 → 34
// Merged: '3' + '3' = '33'
// Squashed: '2' + (3+3)%10 + '4' = '264'
// 3. 34 → 45
// Merged: '4' + '4' = '44'
// Squashed: '3' + (4+4)%10 + '5' = '385'
// Финален изход:
// 22 33 44 
// 143 264 385 


// We have the following operations defined for two-digit numbers. There are two possible ways of merging them:
// Merging ab and cd produces bc
// 42 merged with 17 produces 21
// 17 merged with 42 produces 74
// Squashing ab and cd produces a(b+c)d - the middle digit is the sum of b and c
// 42 squashed with 17 produces 437
// 39 squashed with 57 produces 347 (9 + 5 = 14, we use only the 4)
// You have a sequence of N two-digit numbers. Your task is to merge and squash each pair of adjacent numbers.
// Input
// All input data is read from the standard input
// On the first line, you will receive an integer N
// On the next N lines you will receive N two-digit numbers
// Each number will be on a separate line
// Output
// The output data is printed on the standard output
// On the first output line print the merged numbers
// There should be N - 1 of them
// Separate them by spaces
// On the second output line print the squashed numbers
// There should be N - 1 of them
// Separate them by spaces
// Constraints
// 2 <= N <= 1000
// Numbers will consist of two non-zero digits
// The input data will always be correct and there is no need to check it explicitly
// Sample Tests
// Input
// 4
// 12
// 23
// 34
// 45
// Output
// 22 33 44
// 143 264 385