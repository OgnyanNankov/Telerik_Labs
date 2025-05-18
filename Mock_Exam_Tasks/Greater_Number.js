// Task 'Greater Number'

let input = [
    '4,1,2',
    '1,3,4,2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrayOne = gets().split(',').map(Number);
const arrayTwo = gets().split(',').map(Number);
let output = [];                                                                 // output ще съхранява финалните резултати
let result = -1;                                                                 // result ще пази текущия резултат за елемент от arrayOne. Коментар 1

for (let i = 0; i < arrayOne.length; i++) {                                      // Външен цикъл – за всеки елемент от arrayOne
    let index = arrayTwo.indexOf(arrayOne[i]);                                   //  Намираме позицията на arrayOne[i] в arrayTwo: Например: arrayOne[0] = 2 → arrayTwo.indexOf(2) = 1
    for (let j = index + 1; j < arrayTwo.length; j++) {                          // Вътрешен цикъл – търсене вдясно: Започваме от следващата позиция вдясно от текущата. Търсим първото по-голямо число
        if (arrayTwo[j] > arrayOne[i]) {                                         // Ако намерим число, по-голямо от текущото → запазваме го в result и спираме вътрешния цикъл (понеже търсим първото)
            result = arrayTwo[j];
            break;
        }
    }
    output.push(result);                                                         //  Добавяме резултата за текущия елемент и нулираме result за следващия
    result = -1;
}

console.log(output.join(','));

// Какво се иска? Имаме два масива: arrayOne е подмножество на arrayTwo
// За всеки елемент от arrayOne трябва да намерим първото по-голямо число вдясно от него в arrayTwo
// Ако няма такова → отпечатваме -1
// Пример вход:
// arrayOne = [2, 4];
// arrayTwo = [1, 2, 3, 4];
// За 2 → в arrayTwo след 2 идва 3, което е по-голямо → 3
// За 4 → няма число след него → -1
// Изход: 3,-1

// let result = -1 - Защо result започва от -1?
// Значението на -1 в тази задача: Това е дефолтна стойност, която използваме ако не намерим по-голям елемент вдясно.
// В условието изрично се казва: "If no greater element exists to the right, return -1."
// Пример:
// arrayOne = [4];
// arrayTwo = [1, 2, 3, 4];
// 4 се намира на последна позиция → няма елементи вдясно → няма как да се намери по-голямо число
// Тогава result си остава -1, и точно това се отпечатва
// Логика в кода:
// let result = -1;                                    // започваме с -1, в случай че не открием нищо
// for (let j = index + 1; j < arrayTwo.length; j++) {
//     if (arrayTwo[j] > arrayOne[i]) {
//         result = arrayTwo[j];                       // заменяме само ако намерим по-голямо число
//         break;
//     }
// }
// Ако вътрешният цикъл не намери по-голямо число, result остава -1
// Ако намери по-голямо число, тогава го презаписваме и го добавяме в output
// Обобщено:
// Стойност	    Значение в контекста
// -1	        Няма по-голям елемент вдясно
// число	    Първото по-голямо число вдясно


// You are given two arrays where the elements of the first one are subset of the elements of the second one.
// For each element in the first array, find the next greater element in the second array, starting at the position of the given element.
// Input: Read from the standard input.
// On the first line will be the first array of numbers, separated by comma.
// On the second line will be the second array of numbers, separated by comma.
// Output: Print the result on the standard output.
// The result should be the numbers, separated by comma.
// Constraints
// All elements will be unique (the elements from the first array are unique in the first array, the elements from the second array are unique in the second array).
// The length of both arrays would not exceed 1000.
// Sample tests
// Input
// 4,1,2
// 1,3,4,2
// Output
// -1,3,-1
// Explanation
// For 4 only 2 is to its right in the second array. There is no greater element, so output -1.
// For 1 the elements to its right in the second array are [3, 4, 2]. The first greater element is 3.
// For 2 there are no elements to its right in the second array, so output -1.