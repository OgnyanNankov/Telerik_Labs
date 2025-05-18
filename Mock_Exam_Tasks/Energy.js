// Task 'Energy' 

let input = [
    '3621'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = gets();
let oddNumbers = 0;                                                               // Инициализираме двв променливи: oddNumbers → ще пази сумата на нечетните цифри
let evenNumbers = 0;                                                              // еvenNumbers → ще пази сумата на четните цифри

for (i = 0; i < number.length; i++) {                                             // Обхождаме всяка цифра по индекс. Коментар 1: 
    if (Number(number[i]) % 2 === 0) {                                            // За всяка цифра проверяваме: ако е четна (% 2 === 0) → я добавяме към evenNumbers, иначе → към oddNumbers
        evenNumbers += Number(number[i]);                                         // Забележка: 0 също е четно число и се брои
    } else {
        oddNumbers += Number(number[i]);
    }
}

if (evenNumbers > oddNumbers) {                                                   // След края на цикъла: Сравняваме двете суми и отпечатваме съобщението според резултата: Коментар 2: 
    console.log(evenNumbers + '' + ' energy drinks')
} else if (evenNumbers < oddNumbers) {
    console.log(oddNumbers + '' + ' cups of coffee')
} else {
    console.log(evenNumbers + '' + ' of both')
}

// Какво се иска: Дадено е едно цяло число (до 18 цифри). Трябва да:
// сумираме четните цифри в него, сумираме нечетните цифри, и да изведем:
// ако четните са повече → X energy drinks
// ако нечетните са повече → X cups of coffee
// ако са равни → X of both
// Пример: 3621
// Четни: 6 и 2 → сума = 8
// Нечетни: 3 и 1 → сума = 4
// Изход: 8 energy drinks

// Коментар 1:  Пример за number = '3621':
// Индекс	Цифра(number[i])  Number(...)	четна ли е?	  Действие
// 0	    '3'	              3	            Не	          odd += 3
// 1	    '6'	              6	            Да	          even += 6
// 2	    '2'	              2	            Да	          even += 2
// 3	    '1'	              1	            Не	          odd += 1
// Коментар 2:  Използваме + '' + '...' за да гарантираме, че числото ще се конкатенира като текст, но това не е задължително – можем директно: console.log(evenNumbers + ' energy drinks');



// Energy drink calculations are simple - in order to decide how many drinks you should have, you are given a number. Find the sum of the even digits and the sum of the odd digits of that number, then compare these sums and:
// If the sum of the even digits is bigger, drink energy drinks.
// If the sum of the odd digits is bigger, drink cups of coffee.
// If the two sums are equal, drink both.
// Input: The input data is read from the standard input (the console). The only input line contains the number N.
// Output: The output data is printed on the standard output (the console).
// The output consists of one line. You must print the kind of beverage you should drink, as well as the sum of digits that lead to that decision.
// Note: The beverage is always in plural, no matter the number before it.
// Constraints
// That number can consist of up to 18 digits.
// The digit zero (0) is considered to be even.
// Sample Tests
// Input
// 10
// Output
// 1 cups of coffee
// Explanation
// Odd digits: 1
// Even digits: 0
// Sum of odd digits = 1
// Sum of even digits = 0
// 1 > 0, so output "1 cups of coffee"