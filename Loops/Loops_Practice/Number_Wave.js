// Task 'Number Wave'                                                       // Скриптът генерира вълна от числа, като всяка следваща редица е с 1 по-голяма от предишната. Входът е число N, а изходът е N реда с числа от 1 до N. Всеки ред е с различна дължина и започва от 1
let input = [
    '3',                                                                    // Симулираме входа – числото 3. Това е n, до което ще изградим вълната.


];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                            // Четем входа от конзолата. Входът е число, което ще използваме за генериране на вълната.
let numbersToPrint = '';                                                    // Инициализираме променлива, в която ще съхраняваме числата за печатане. Започваме с празен стринг.

for (let i = 0; i < n; i++) {                                               // Първи for цикъл: от 1 до n. Цикълът итерира от 0 до n - 1. i е текущият индекс на цикъла. Повече информация коментар 1
    numbersToPrint += (i + 1) + ' ';                                        // Генерираме числата от 1 до N. Използваме i + 1, за да започнем от 1, а не от 0. Добавяме интервал след всяко число.
}
for (let i = n - 1; i >= 1; i--) {                                          // Втори for цикъл: от n-1 надолу до 1. Цикълът итерира от n - 1 до 1. i е текущият индекс на цикъла. Повече информация коментар 2
    numbersToPrint += i + ' ';                                              // Генерираме числата от n - 1 до 1. Добавяме интервал след всяко число. Използваме i, за да вземем текущото число от цикъла.
}

print(numbersToPrint.trim());                                               // Отпечатваме числата, които сме генерирали. Използваме print функцията, за да покажем резултата на конзолата.


// Коментар 1: Какво брои този цикъл: i започва от 0, стига до n - 1.
// На всяка стъпка: Взимаме (i + 1), за да започнем от 1 вместо 0. Добавяме числото + интервал в numbersToPrint.
// Какво добавяме в стринга: При i = 0 → добавяме 1, При i = 1 → добавяме 2, При i = 2 → добавяме 3
// След този цикъл имаме: numbersToPrint = "1 2 3 "
// Коментар 2: Какво брои този цикъл: i започва от n-1 = 2 и намалява с 1 всеки път. Спира, когато i < 1.
// Какво добавяме в стринга: При i = 2 → добавяме 2, При i = 1 → добавяме 1
// След този цикъл имаме окончателно: numbersToPrint = "1 2 3 2 1 "
// Коментар 3: Защо са два отделни for цикъла, а не вложени (nested)? 
// Причина:Искаме първо да построим възходящата част на вълната (1 2 3).После отделно да построим низходящата част (2 1).
// Ако бяха вложени (единият цикъл вътре в другия), щяхме да правим повтарящи се комбинации (например: 1 1, 1 2, 1 3...), което не е правилното поведение за тази задача.
// Всеки цикъл самостоятелно изгражда една половина на вълната.

// Как брои всеки един от двата for цикъла?
// Цикъл	    Начална стойност	  Крайна стойност	  Промяна на всяка стъпка
// Първи (i++)	i = 0	              i = n-1	          Увеличаваме с 1
// Втори (i--)	i = n-1	              i = 1               Намаляваме с 1
// Нека да видим как точно текат итерациите при n = 3:
// Първи цикъл:
// i	 (i+1)	    Добавяме в numbersToPrint
// 0	  1	        "1 "
// 1	  2	        "2 "
// 2	  3	        "3 "
// Втори цикъл:
// i	            Добавяме в numbersToPrint
// 2	            "2 "
// 1	            "1 "
// Обобщение на логиката:
// Четем n.
// Първи цикъл: добавяме числата от 1 до n.
// Втори цикъл: добавяме числата обратно от n-1 до 1.
// Печатаме цялата поредица на един ред.

// Read the input from the console using the gets() function. Convert the input string to an integer using the parseInt() function. Store the resulting number in a constant called number.
// Initialize an empty string called numbersToPrint. This string will be used to store the numbers to be printed.
// Start a for loop that iterates from 1 up to but not including number. The variable i is the loop counter and represents the current number.
// Inside the loop, append the current number and a space to the numbersToPrint string using the += operator.
// Start another for loop that iterates from number down to and including 1. The variable i is the loop counter and represents the current number.
// Inside the loop, append the current number and a space to the numbersToPrint string using the += operator.
// After the loops, print the numbersToPrint string to the console using the console.log() function. The result should be a sequence of numbers increasing from 1 to number and then decreasing back to 1, separated by spaces.

// Write a program that prints a wave till a certain number and backward.
// Input
// On the first line, you will receive the number N.
// Output
// Print a "wave" i.e. the numbers from 1 to N and then the numbers from N - 1 to 1 on a single line separated by space.
// Constraints
// 1 <= N <= 1000
// Sample tests
// Input
// 3
// Output
// 1 2 3 2 1