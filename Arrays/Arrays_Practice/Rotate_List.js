// Task 'Rotate List'                                                    // Целта е да завъртим елементите на масив наляво N пъти, така че първият да отиде в края, при всяко завъртане. 
let input = [
    '5,3,2,1',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',');                                            // Четем първия ред '5,3,2,1' - .split(',') → разделя по запетаи → създава масив: Забележка: Всеки елемент остава стринг, не число.    
let n = Number(gets());                                                  // Четем втория ред от входа – '2' и го преобразуваме в число


for (i = 0; i < n; i++) {                                                //Започваме цикъл, който ще се изпълни n пъти – т.е. две завъртания на масива.
    let result = list.shift();                                           // .shift() → премахва първия елемент от масива и го връща. Пример (първа итерация): list = ['5', '3', '2', '1'], result = '5', list = ['3', '2', '1']
    list.push(result);                                                   // .push(...) → добавя елемента в края на масива

}

console.log(list.join(','));                                             //.join(',') → превръща масива обратно в стринг, като използва запетая между елементите

// Примерно изпълнение:
// Вход:
// 5,3,2,1
// 2
// Стъпки: list = ['5','3','2','1']
// завъртане 1 → '5' → ['3','2','1','5']
// завъртане 2 → '3' → ['2','1','5','3']
// Изход: 2,1,5,3
// Обобщение:
// Метод	       Какво прави
// .split(',')	   Превръща стринг в масив
// .shift()	       Премахва първия елемент
// .push()	       Добавя елемент в края
// .join(',')	   Събира масив обратно в текст със запетаи

// Write a program that rotates a list several times (the first element becomes last).
// list = 1,2,3,4,5 and N = 2 -> result = 3,4,5,1,2
// Note that N could be larger than the length of the list.
// list = 1,2,3,4,5 and N = 6 -> result = 2,3,4,5,1
// Input
// On the first line you will receive the list of numbers.
// On the second line you will receive N
// Output
// On the only line of output, print the numbers separated by a comma.
// Input
// 5,3,2,1
// 2
// Output
// 2,1,5,3

