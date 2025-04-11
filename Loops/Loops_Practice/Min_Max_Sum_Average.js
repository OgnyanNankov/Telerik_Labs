// Task 'Min Max Sum Average'                                              // Да се прочетат n на брой числа от входа и да се изчислят: минимум (min), максимум (max), сума (sum), средно аритметично (avg)

let input = [                                                              // Инпутът е тестов вход – масив от низове. Първият елемент '3' е броят на числата, а останалите са самите числа. Това симулира поведение, подобно на четене от конзола.
    '3',
    '2',
    '5',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                              // Четем първия ред от входа ('3') и го превръщаме в число → n = 3. Това е броят на числата, които ще обработваме.

// Process the data
let sum = 0;                                                                  // Инициализираме променлива sum, в която ще събираме всичките въведени числа.
let max = -Infinity;                                                          // max = -Infinity – така всяко реално число ще е по-голямо и ще замести max при първата проверка.
let min = +Infinity;                                                          // min = +Infinity – всяко реално число ще е по-малко, така че ще замести min. Това гарантира, че първото число, което прочетеш, автоматично ще зададе начални реални стойности на min и max.

for (let i = 0; i < n; i++) {                                                 // Цикъл, който ще се изпълни n пъти (в случая 3 пъти – за числата 2, 5, 1). Във всяка итерация: Чете число от входа и го добавя го към sum.  
    let num = +gets();                                                        // Четем следващото число от входа
    sum += num;                                                               // Добавяме текущото число към общата сума sum

    let currentNum = num;                                                     // Просто даваме по-описателно име на текущото число – това не е задължително, но прави кода по-четим (може директно да използваме num по-нататък).

    if (currentNum > max) {                                                   // Проверява дали текущото число е по-голямо от текущото max: → ако да, обновява max
        max = currentNum;                                                     // Иначе казано: Ако текущото число е по-голямо от сегашния максимум, обновяваме max
    }

    if (currentNum < min) {                                                   // Проверява дали текущото число е по-малко от текущото min: → ако да, обновява min
        min = currentNum;                                                     // Иначе казано: Ако текущото число е по-малко от сегашния минимум, обновяваме min
    }
}

let average = sum / n;                                                        // Изчислява средноаритметичното (avg) от всички числа, апример: (2 + 5 + 1) / 3 = 2.66

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${average.toFixed(2)}`);


// Обобщение – Защо +Infinity и -Infinity?
// Променлива	Начална стойност	Защо така?
// min	        +Infinity	        Защото всяко реално число ще е по-малко → първото число ще го замести
// max	        -Infinity	        Защото всяко реално число ще е по-голямо → първото число ще го замести
// Така си гарантираш, че независимо какви са входните числа (дори всички да са отрицателни или положителни), логиката за намиране на min/max ще сработи правилно.

// Description: Write a program that reads from the console a sequence of N real numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).
// The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
// The output is like in the examples below.
// Input
// On the first line, you will receive the number N.
// On each of the next N lines, you will receive a single real number.
// Output
// You output must always consist of exactly 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:
// min=3.00
// max=6.00
// sum=9.00
// avg=4.50
// Constraints
// 1 <= N <= 1000
// All numbers will be valid numbers that will be in the range [-10000, 10000]