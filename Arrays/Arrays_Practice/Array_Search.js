// Task 'Array Search'                                                  
let input = [
    '1, 2, 3, 3, 5'                                                          // Инициализираме масив input, който имитира вход от потребителя или judge системата. Този масив съдържа една единствена стойност – стринг с числа, разделени със запетая
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(',').map(Number);                                          // Прочитаме входа и го разделяме по запетая, след което преобразуваме всеки елемент в число. Коментар 1.
let missingNumbers = [];                                                              // Създаваме празен масив, в който ще съхраняваме липсващите числа

for (let i = 1; i <= numbers.length; i++) {                                           // Стартираме for цикъл, който минава от 1 до N включително (N = numbers.length).
    if (!numbers.includes(i))                                                         // Проверяваме дали числото от 1 до N е в масива, ако не е - добавяме го в масива с липсващите числа
        missingNumbers.push(i);                                                       // Ако липсва го добавяме с .push(i) в missingNumbers
}

console.log(missingNumbers.join(','));                                                // .join(',') преобразува масива в стринг


// Коментар 1: let numbers = gets().split(',').map(Number); -- Тук се случва най-важното парсване:
// gets() – връща '1, 2, 3, 3, 5' (като стринг),  .split(',') – разделя стринга на части по запетая  - Резултат: ['1', ' 2', ' 3', ' 3', ' 5']
// .map(Number) – преобразува всяка стойност в число
// Финално получаваме: numbers = [1, 2, 3, 3, 5]
// Използвани методи:
// .split(',') – защото входът е разделен със запетая
// .map(Number) – за да преобразуваме елементите от стрингове към числа

// Обобщение на методите:
// Метод	       Какво прави	                                            Защо го ползваме тук
// gets()	       Взема входен ред като стринг	                            Четем стойността от масива input
// .split(',')	   Разделя стринг по запетая	                            За да получим отделни стойности
// .map(Number)	   Преобразува стринг елементи в числа	                    За да работим с числата, не със стрингове
// .includes(i)	   Проверява дали i присъства в масива	                    За да открием кои числа липсват
// .push(i)	       Добавя стойност в края на масив	                        Запазваме липсващите числа
// .join(',')	   Превръща масив в стринг, със запетая между елементите	За изход във формат: 1,2,3,...

// Пример вход: '1,2,3,3,5'
// numbers.length = 5 → Проверяваме числа от 1 до 5
// Числото 4 липсва → missingNumbers = [4]

// Array Search
// Given an array of integers, some elements appear twice and others appear once. Each integer is in the range of [1, N], where N is the number of elements in the array.
// Find all the integers of [1, N] inclusive that do NOT appear in this array.
// Read from the standard input:
// There is one line of input, containing N amount of integers, seperated by a comma (",")
// Print to the standard output:
// There is one line of output, containing the sorted integers, seperated by a comma (",")
// Constraints: N will always be in the range of [5, 1000]
// Sample Tests
// Input
// 1,2,3,3,5
// Output
// 4