// Task 'Find Average'                                                         // Трябва да се пресметне средното аритметично на N на брой числа, като резултатът се отпечатва с точно две цифри след десетичната запетая.

let input = [
    '4',                                                                       // Първият елемент '4' означава: ще има 4 числа
    '1',                                                                       // Следващите са самите числа: '1', '1', '1', '1'
    '1',
    '1',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();

// Process the data
let sum = 0;                                                                   // Инициализираме променлива sum, в която ще събираме всичките въведени числа.

for (let i = 0; i < n; i++) {                                                  // Стартираме цикъл, който ще се изпълни n пъти (в случая – 4 пъти) – i е брояч от 0 до 3 (общо 4 стойности)
    let value = +gets();                                                       // Четем следващото число от входа
    sum += value;                                                              // Добавяме текущото число към променливата sum.След всяка итерация, sum нараства с новата стойност.
}

let average = sum / n;                                                         // След края на цикъла, делим общата сума на броя числа, за да получим средното аритметично. Пример: ако въведените числа са 1, 1, 1, 1 → sum = 4, n = 4 → average = 4 / 4 = 1

print(average.toFixed(2));

// Средната аритметична стойност се изчислява чрез събиране на числата и разделяне на резултата на броя на числата.


// You need to calculate the average of a collection of values. Every value will be valid number. The average must be printed with two digits after the decimal point.
// Input
// On the first line, you will receive N - the number of the values you must read
// On the next N lines you will receive numbers.
// Output
// On the only line of output, print the average with two digits after the decimal point.
// Input
// 4
// 1
// 1
// 1
// 1
// Output
// 1.00