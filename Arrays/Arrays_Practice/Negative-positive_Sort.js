// Task 'Negative-positive sort'                                               // Да преместим всички отрицателни числа в началото, после нулите, и след това положителните, като запазим реда на появяване от оригиналния списък.

let input = [
    '7 2 -2 1 -5 4 5 -3 1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let oldList = gets().split(' ').map(Number);                                   // Четем входа и го превръщаме в масив от числа: gets() → '7 2 -2 1 -5 4 5 -3 1', .split(' ') → ['7', '2', '-2', '1', '-5', '4', '5', '-3', '1'], .map(Number) → [7, 2, -2, 1, -5, 4, 5, -3, 1] - oldList сега е масив от числа
let newList = [];                                                              // Създаваме празен масив, където ще съхраняваме подредените числа.

for (let i = 0; i < oldList.length; i++) {                                     // Първи цикъл – отрицателни числа:              
    if (oldList[i] < 0) {                                                      //  Добавяме всички отрицателни числа в newList, в същия ред, в който са срещнати.
        newList.push(oldList[i])
    }
}

for (let i = 0; i < oldList.length; i++) {                                    // Втори цикъл – нули:
    if (oldList[i] === 0) {                                                   // В този пример няма нули но, ако има – ще бъдат добавени след отрицателните
        newList.push(oldList[i])
    }
}

for (let i = 0; i < oldList.length; i++) {                                    // Трети цикъл – положителни числа:
    if (oldList[i] > 0) {                                                     
        newList.push(oldList[i])                                              // Добавя положителните числа в края, в реда, в който са в oldList
    }
}

console.log(newList.join(' '));

// join() – Какво прави? - Методът .join() се използва върху масив, за да превърне всички негови елементи в един стринг, като между тях се поставя разделител (delimiter).
// Синтаксис: array.join(separator)
// array – масив от елементи (напр. числа или текстове)
// separator (по избор) – символ или стринг, който ще се сложи между елементите
// Ако не подадеш нищо → по подразбиране се използва ',' (запетая)
// Пример: масив от числа с интервал
// let numbers = [1, 2, 3, 4];
// let result = numbers.join(' ');
// console.log(result);  // → "1 2 3 4"

// Write a program that moves all negative numbers to the beginning and all positive ones to the end, without changing the order of positive negative
// Input
// On a single line you will receive numbers separated by space
// Output
// Print the sorted numbers
// Constraints
// The input will consist of valid integer numbers
// Sample tests
// Input
// 7 2 -2 1 -5 4 5 -3 1
// Output
// -2 -5 -3 7 2 1 4 5 1


