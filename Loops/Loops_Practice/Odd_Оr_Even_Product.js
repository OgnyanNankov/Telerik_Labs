// Task 'Odd or Even Products'                                      // Имаме N числа, дадени в един ред. Трябва да изчислим произведението на числата, които се намират на четни позиции и на нечетни позиции (позициите, не самите числа!).
//                                                                  // Накрая сравняваме двете произведения: ако са равни → отпечатваме yes <произведение> ако не са → отпечатваме no <oddProduct> <evenProduct>
let input = [                                                       // Това е тестов вход – първото число '5' показва, че ще има още 5 числа. Следват самите числа '2', '1', '1', '6', '3'.
    '5',
    '2 1 1 6 3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                     // Четем първия ред от входа ('5') и го превръщаме в число → n = 5. Това е броят на числата, които ще обработваме.
let numbers = gets().split(' ').map(Number);                         // Прочитаме втория ред – '2 1 1 6 3' / .split(' ') → разделя го на масив: [ '2', '1', '1', '6', '3' ] / .map(Number) → превръща всеки елемент в число: [2, 1, 1, 6, 3]

// Process the data                                                  // Инициализираме 2 променливи за произведението:
let evenProduct = 1;                                                 // evenProduct за числата на четни позиции (позиции: 2, 4, …)
let oddProduct = 1;                                                  // oddProduct за числата на нечетни позиции (позиции: 1, 3, …)

for (let i = 0; i < n; i++) {                                        // Започва цикъл, който ще се изпълни n = 5 пъти (от i = 0 до i = 4)
    let num = numbers[i];                                            // Всяка итерация взима следващото число от масива numbers[i]
    if ((i + 1) % 2 === 0) {                                         // Even index - (i + 1) се използва, защото позициите са броени от 1 (човешко броене), а i започва от 0 (програмистко броене)
        evenProduct *= num;                                          // Ако (i + 1) % 2 === 0 → позицията е четна → умножаваме evenProduct *= num
    } else {                                                         // Odd index 
        oddProduct *= num;                                           // Ако позицията е нечетна (има остатък) → умножаваме oddProduct *= num
    }
}

if (oddProduct === evenProduct) {                                    // След цикъла проверяваме дали двете произведения са равни.
    print(`yes ${oddProduct}`);                                      // Ако са равни → печатаме yes <произведение>
} else {
    print(`no ${oddProduct} ${evenProduct}`);                        // Ако не са → печатаме no <oddProduct> <evenProduct>
}

// Резултат при този вход:
// let input = [
//     '5',
//     '2 1 1 6 3',
// ];
// Позиции (1-based): 2 (1) 1 (2) 1 (3) 6 (4) 3 (5)
// Нечетни позиции: 2, 1, 3 → oddProduct = 2 × 1 × 3 = 6
// Четни позиции: 1, 6 → evenProduct = 1 × 6 = 6
// Те са равни → yes 6


// Description
// Given N numbers, write a program that checks whether the product of the elements on odd indexes is equal to the product of the elements on even indexes.
// The first element is at index 1, the second element is at index 2 and so on.
// Input
// On the first line you will receive the number N.
// On the second line you will receive N numbers, separated by whitespace.
// Output
// If the two products are equal, print a string in the format "yes PRODUCT_VALUE".
// If they are not equal, print "no ODD_PRODUCT_VALUE EVEN_PRODUCT_VALUE".
// Constraints
// N will always be a valid integer number in the range [4, 50].
// All numbers from the second line will also be positive and valid.
// Sample tests
// Input
// 5
// 2 1 1 6 3
// Output
// yes 6
// Explanation
// The elements are: 2 1 1 6 3
// The indexes are:  1 2 3 4 5
// The products are: 2 * 1 * 3 and 1 * 6. Both are equal to 6.

// Read the first line of input from the console using the gets() function. Convert the input string to a number using the Number() function. Store the resulting number in a variable called N.
// Initialize two variables called evenProduct and oddProduct to 1. These variables will be used to calculate the products of the numbers on the even and odd lines.
// Start a for loop that will iterate N times. The variable i is the loop counter and represents the current line number.
// Inside the loop, read the next number from the input using the gets() function. Convert the input string to a number using the Number() function. Store the resulting number in a variable called num.
// Check if the current line number is even by using the modulus operator (%) with 2. If the remainder is 0, the line number is even.
// If the line number is even, multiply evenProduct by num using the *= operator.
// If the line number is odd, multiply oddProduct by num.
// After the loop, check if the products of the numbers on the even and odd lines are equal. Use the strict equality operator (===) to perform this check.
// If the products are equal, print "yes" followed by the product value to the console using the console.log() function.
// If the products are not equal, print "no" followed by the even and odd product values to the console. Use template literals to format the output as strings in the required format.
