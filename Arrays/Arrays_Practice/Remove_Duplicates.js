// Task 'Remove Duplicates'                                                    // Да прочетем списък от числа (като стринг), разделени със запетая, и да отпечатаме същите числа, но без повтарящи се стойности, като запазим оригиналния им ред.
let input = [
    '1,2,2,2,2,18,3,12'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',');                                                 // gets() взима първия и единствен ред → '1,2,2,2,2,18,3,12', .split(',') го разделя по запетая → получаваме масив от стрингове: list = ['1', '2', '2', '2', '2', '18', '3', '12'];
let newList = [];                                                             // Създаваме празен масив, в който ще събираме само уникалните стойности, срещнати за първи път.

for (let i = 0; i < list.length; i++) {                                       // Цикъл, който обхожда всеки елемент от масива list.
    if (newList.indexOf(list[i]) > - 1) {                                     // newList.indexOf(list[i]) → връща индекса, на който елементът вече се намира в newList. Ако резултатът е -1 → значи елементът още го няма
        continue;                                                             // Ако е по-голям от -1, значи вече сме го добавили → прескачаме (continue). Така добавяме всяка стойност само веднъж
    } else {
        newList.push(list[i]);
    }
}

print(newList.join(','));                                                     // Преобразуваме newList обратно в текст с .join(',') → отпечатваме:

// Итерации със стойности:
// i	list[i]	   newList	              indexOf(list[i])	 Действие
// 0	'1'	       []	                  -1	             добавя '1'
// 1	'2'	       ['1']	              -1	             добавя '2'
// 2	'2'	       ['1', '2']	          1	                 прескача
// 3	'2'	       ['1', '2']	          1	                 прескача
// 4	'2'	       ['1', '2']	          1	                 прескача
// 5	'18'	   ['1', '2']	          -1	             добавя '18'
// 6	'3'	       ['1', '2', '18']	      -1	             добавя '3'
// 7	'12'	   ['1', '2', '18', '3']  -1	             добавя '12'

// Обобщение:
// Елемент	            Какво прави
// split(',')	        Превръща стринг в масив от стойности
// indexOf(...) > -1	Проверява дали елементът вече съществува в масива
// push(...)	        Добавя елемента в newList, ако е нов
// join(',')	        Превръща масива обратно в текст за отпечатване

// Remove Duplicates// Write a program that removes all duplicates from a list of elements.
// 1,2,2,2,4,7 -> 1,2,4,7.
// Maintain the relative order of the remaining items.
// Input
// On the only line of input, you will receive the elements, separated by a comma.
// Output
// Display the list with the duplicates removed, separated by a comma.
// Constraints
// 1 <= list.length <= 20
// Input
// 1,2,2,2,2,18,3,12
// Output
// 1,2,18,3,12
