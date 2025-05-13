// Task 'Combine Lists'
let input = [
    '2, 3, 1',                                                                        // Първи ред → първи списък: '2,3,1'
    '5, 2, 3',                                                                        // Втори ред → втори списък: '2,3,1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstList = gets().split(',').map(Number);                                      // Четем първи ред: gets() → '2,3,1', .split(',') → ['2', '3', '1'] (разделя по запетая), .map(Number) → [2, 3, 1] (преобразува в числа). Коментар 1.
let secondList = gets().split(',').map(Number);                                     // Същото за втори ред
let combinedList = [];                                                              // Създаваме празен масив, в който ще съхраним крайния резултат – числата от двата списъка, комбинирани редуващо се.

for (let i = 0; i < firstList.length; i++) {                                        //  Обхождаме по индекс елементите на двата списъка едновременно. Задачата гарантира, че списъците са с еднаква дължина - затова използваме само firstList.lenght
    combinedList.push(firstList[i]);                                                // Добавяме елемент от първия списък (firstList[i])
    combinedList.push(secondList[i]);                                               // После добавяме съответния елемент от втория (secondList[i])
}

print(combinedList.join(','));                                                      // Отпечатваме крайния масив като стринг, със запетая между елементите. .join(',') → събира масива в един стринг: '2,5,3,2,1,3'

// Коментар 1: Използвани методи:
// .split(',') – защото входът е със запетая
// .map(Number) – за да преобразуваме от стринг към числа
// Коментар 2: Пример за i = 0:
// combinedList = [2]
// после combinedList = [2, 5]

// Обобщение на методите:
// Метод	       Какво прави	                              Защо го използваме тук
// .split(',')     Разделя стринг по запетая	              За да получим числата поотделно
// .map(Number)	   Преобразува всяка стойност в число	      За да получим [2, 3, 1] вместо ['2',..]
// .push(...)	   Добавя елемент в масив	                  За да комбинираме двете поредици
// .join(',')	   Събира масив в един стринг с разделител	  За да отпечатаме крайния резултат

// Write a program that reads two lists of numbers and combines them by alternatingly taking elements:
// combine 1,2,3 and 7,8,9 -> 1,7,2,8,3,9
// you can assume that the input lists will have the same length.
// Print the resulting combined list to the output, separating elements with a comma.
// Input
// On the first line you will receive the first list.
// On the second line -> 2nd list.
// Output
// On the only line of output, print all the numbers in format n1,n2,n3,..n
// Input
// 2,3,1
// 5,2,3
// Output
// 2,5,3,2,1,3