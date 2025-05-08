// Task 'Find Largest Three Numbers'                                // Да се намерят трите най-големи числа от поредица, която получаваме от входа (например от потребителя или от масив).

let input = [                                                       // Това е тестов вход – първото число '3' показва, че ще има още 3 числа. Следват самите числа '3', '1', '2'.
    '3',
    '3',
    '1',
    '2',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                          // Прочитаме първия ред: '3' → превръщаме в число → n = 3
let largest = -Infinity;                                                  // Инициализираме трите стойности с най-ниската възможна – така че всяко първо реално число да ги замести..
let secondLargest = -Infinity;                                            // пример secondLargest = -Infinity – така всяко реално число ще е по-голямо и ще замести secondLargest при първата проверка.
let thirdLargest = -Infinity;

// Process the data
for (let i = 0; i <= n; i++) {                                            // Цикъл, който се върти n пъти (3 пъти в този случай).
    let nextNumber = +gets();                                             // всеки път прочитаме следващото число и го превръщаме в number 

    if (nextNumber > largest) {                                           // Сравняваме nextNumber със стойностите и ги "бутаме надолу", ако новото число е по-голямо.                                  
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = nextNumber;
    }
    else if (nextNumber > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = nextNumber;
    }
    else if (nextNumber > thirdLargest) {
        thirdLargest = nextNumber;
    }
}

print(`${largest}, ${secondLargest} and ${thirdLargest}`);



// Запомни:Когато местиш стойности между променливи, винаги започвай от последната, за да не изгубиш информация (затова започваме от thirdLargest, a не от largest/nextNumber)
// Логика:
// При всяко ново число:
// Ако то е по-голямо от largest → то става новият largest, а старите стойности слизат надолу.
// Ако е между largest и secondLargest, то става secondLargest, а secondLargest става thirdLargest.
// Ако е между secondLargest и thirdLargest, то става thirdLargest.

// Write a program that, that finds the three largest numbers in a sequence and prints them in descending order in the following format:
// {largest}, {second_largest} and {third_largest}.
// See the example for clarity
// Input
// On the first line you will receive one number - N - the count of numbers to follow.
// On the next N lines you will receive the sequence of numbers, each on a new line.
// Output
// Output the three largest numbers in the already described format.
// Constraints
// 3 <= N <= 20
// -500 <= each number <= 500
// Input
// 3
// 3
// 1
// 2
// Output
// 3, 2 and 1

