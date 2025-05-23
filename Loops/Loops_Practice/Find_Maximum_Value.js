// Task 'Find Maximum Value'                                        // Да се прочетат n на брой числа от входа и да се намери най-голямото (максималното) сред тях. И след това да се отпечата. 

let input = [                                                       // Това е тестов вход – първото число '3' показва, че ще има още 3 числа. Следват самите числа '1', '2', '3'.
    '3',
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                    // Четем първия ред от входа ('3'). Това е броят на следващите числа, които ще обработим. 
// Process the data
let max = -Infinity;                                                // Тук иницилизираме променливата, в която ще държим най-малкото възможно число, което гарантира, че: всяко реално въведено число ще е по-голямо и ще замести тази стойност при първата итерация

for (let i = 1; i <= n; i++) {                                      //Цикъл, който се изпълнява n пъти – от 1 до n (в случая: от 1 до 3). Обичайно ползваме i = 0; i < n; i++, но i = 1; i <= n; i++ също работи в случая.

    let n2 = +gets();                                               // Можем да представим двата реда и така: let currentNum = +gets();            
    let currentNum = n2

    if (currentNum > max) {                                         // Проверяваме дали текущото число е по-голямо от запазеното досега max. Ако текущото число е по-голямо от текущото max, записваме го като ново max.
        max = currentNum;                                           // Така през всяка итерация запазваме най-голямото число, което сме срещали досега.
    }
}

// Output result
print(max);


// Защо -Infinity? За да може всяко реално число да бъде по-голямо и да замести max още при първата итерация.
// Ако беше започнал с 0, и всички числа бяха отрицателни, max щеше да остане 0 – грешен резултат!

// Какво прави програмата, стъпка по стъпка:
// Чете от входа едно число n – това е броят на следващите числа, които ще получиш.
// След това чете n на брой реални или цели числа.
// Обхожда всяко от тях и:
// сравнява го с текущото "най-голямо" (max)
// ако текущото е по-голямо → записва го като новото max
// Накрая отпечатва най-голямото от въведените числа.


// Read the first line of input from the console. Use the gets() function to read the input as a string, and the Number() function to convert the string to a number. Store the resulting number in a variable called n.
// Initialize a variable called max with a value of negative infinity. This will ensure that any number will be larger than max.
// Start a for loop that iterates from 1 up to and including n. The variable i is the loop counter.
// Inside the loop, read the next number from the input, convert it to a number, and store it in a variable called currentNum.
// Check if currentNum is greater than max. If it is, update max with the value of currentNum.
// After the loop, print the maximum number found (max) to the console using the console.log() function.

// Write a program that finds the maximum number from a given sequence.
// Input
// On the first line you will receive one number - N - the count of numbers to follow.
// On the next N lines you will receive the sequence of numbers, each on a new line.
// Output
// Output only one number - the maximum number you find
// Constraints
// 1 <= N <= 20
// -200 <= each number <= 200
// Input
// 3
// 1
// 2
// 3
// Output
// 3