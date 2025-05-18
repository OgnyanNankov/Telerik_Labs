// Task 'Alone Numbers'

let input = [
    '1, 2, 3, 2, 5, 2',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',').map(Number);                                  // Взимаме първия ред: '1, 2, 3, 2, 5, 2',  .split(',') → ['1',' 2',' 3',' 2',' 5',' 2'], .map(Number) → [1, 2, 3, 2, 5, 2] - (методът автоматично премахва интервалите)
let target = Number(gets());                                              //  Прочитаме втория ред → числото, което ще проверяваме (тук 2)

for (i = 0; i < arr.length; i++) {                                        // Обхождаме масива от началото до края
    if (target === arr[i]) {                                              // Логика за „самотен“ елемент: Проверяваме дали текущият елемент е равен на търсеното число
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {             // Проверяваме дали предишният и следващият елемент са различни от него → така разпознаваме „самотен“ елемент. Коментар 1: 
            if (arr[i - 1] > arr[i + 1]) {                                // Ако числото е самотно, го заменяме с по-голямото от съседите му
                arr[i] = arr[i - 1]
            } else if (arr[i + 1] > arr[i - 1]) {
                arr[i] = arr[i + 1]
            }
        }
    }
}

console.log(`[${arr}]`);

// Какво се иска: Даден е масив и „таргет“ число (напр. 2). Трябва да заменим всеки „самотен“ елемент, който:
// има различни стойности преди и след него, т.е. не е обграден от други същите като него
// Заменяме го с по-голямата от стойностите отляво или отдясно.
// Пример: [1, 2, 3], таргет 2
// 2 е между 1 и 3, и те са различни от 2 → „самотен“
// → заменяме 2 с по-голямото от 1 и 3 → 3
// Резултат: [1, 3, 3]

// Коментар 1: arr[i - 1] и arr[i + 1] трябва да съществуват
// → това работи, защото на undefined !== 2 ще даде true
// но при първия/последния елемент ще се пропусне, тъй като няма и двете страни






// We will give you array and a target! You need to find all "alone" elements in the array that match the given target.
// These elements are alone if they have values before and after them, but those values are different from them.
// Return new version of the given array where every element that matches the target and is alone is replaced by whichever value to its left or right is larger.
// Input: Read from the standard input:
// The first line is the array with coma separated integer values -> 1,2,3
// The second line is the target that you should check against -> 2
// Output: Print to the standard output:
// One line of output - the changed array -> [1, 3, 3]
// please note that there is space after each coma.
// Sample Tests
// Input
// 1, 2, 3
// 2
// Output
// [1, 3, 3]
// Input
// 1, 2, 3, 2, 5, 2
// 2
// Output
// [1, 3, 3, 5, 5, 2]