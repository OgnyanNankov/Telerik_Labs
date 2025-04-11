// Task 'Numbers from 1 To N'                                          // Да се прочете едно цяло число N, и да се отпечатат всички числа от 1 до N, разделени с интервали – на един ред. Ако N = 5 → изходът ще бъде: 1 2 3 4 5

let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                       // Четем първия (и единствен) ред от входа – '5'

// Process the data
let result = '';                                                       // Създаваме променлива result, в която ще натрупваме като текст числата от 1 до N – Започваме с празен стринг ''

for (let i = 1; i <= n; i++) {                                         // Цикъл, който започва от i = 1 и включва n, т.е. от 1 до 5. В този случай – ще направи 5 итерации: за i = 1, 2, 3, 4, 5
    result += i + ' ';                                                 // Това е съкратено изписване на: result = result + i + ' '; При всяка итерация добавяме числото i към низа result, заедно с един интервал.
}                                                                      // Пример: след първата итерация: '1 ', след втората: '1 2 ', след петата: '1 2 3 4 5 '

// Trim the final space and print
print(result);


// Визуализация стъпка по стъпка – при n = 5
// Итерация	 i	 result след тази стъпка
// 1	     1	 '1 '
// 2	     2	 '1 2 '
// 3	     3	 '1 2 3 '
// 4	     4	 '1 2 3 4 '
// 5	     5	 '1 2 3 4 5 '

// Read the input number from the console. Use the gets() function to read the input as a string, and the Number() function to convert the string to a number. Store the resulting number in a variable called N.
// Initialize an empty string called result to store the sequence of numbers.
// Start a for loop that iterates from 1 up to (but not including) N. The variable i is the loop counter and represents the current number.
// Inside the loop, concatenate the current number (i) and a space to the result string. Use the += operator to add the number and space to the end of the result string.
// After the loop, concatenate N to the result string. This is done outside the loop to avoid an extra space at the end of the string.
// Print the result string to the console using the console.log() function. The result string should contain a sequence of numbers from 1 to N, separated by spaces.

// Write a program that enters from the console a positive integer n and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.
// Input
// The input will consist of a single line - the number N
// Output
// The output should consist of a single line - the numbers from 1 to N, separated by a whitespace
// Constraints
// N will be a valid positive 32-bit integer
// Sample tests
// Input
// 5
// Output
// 1 2 3 4 5