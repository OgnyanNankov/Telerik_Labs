// Task 'Repeating Numbers'                                     // Да се прочетат N на брой цели числа (в интервала 1–10), и да се изведе числото, което се среща най-много пъти. Ако има няколко с еднакъв брой срещания, печели по-малкото число.

let input = [                                                                           // Статичен вход. Първият елемент е броят N, останалите са числата.
    '5',
    '1',
    '2',
    '3',
    '1',
    '2',
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = Number(gets());                                                                 // Прочитаме n = 5 – броят на числата, които ще обработим.
let counters = [];                                                                      // Създаваме празен масив, който ще използваме за брояч на срещанията за всяко число. 

for (let i = 0; i < 11; i++) {                                                          //  Инициализираме масив counters с 11 позиции – от 0 до 10 (въпреки че числата ще са между 1 и 10, добавяме и 0 за простота)
    counters[i] = 0;                                                                    //  След това: counters[1], counters[2] и т.н. ще пазят броя на срещанията на съответното число.
}

for (let i = 0; i < n; i++) {                                                           //  Тук обхождаме всяко въведено число, и увеличаваме неговия брояч: Коментар 1
    let currentElement = Number(gets());
    counters[currentElement]++;
}

let maxIndex = 0;                                                                       // Започваме търсене на най-срещаното число. maxValue ще пази най-големия брой срещания досега
let maxValue = counters[0];                                                             // maxIndex ще пази самото число

for (let i = 1; i < counters.length; i++) {                                             // Основен цикъл за намиране на числото с най-много срещания:
    if (counters[i] > maxValue || (counters[i] === maxValue && i < maxIndex)) {         // Ако counters[i] > maxValue → открито по-често число → обновяваме. 
        maxValue = counters[i];                                                         // Ако counters[i] === maxValue && i < maxIndex → еднакво често, но по-малко число → взимаме по-малкото (по условие)
        maxIndex = i;
    }
}

print(maxIndex);                                                                        // Отпечатваме числото с най-много срещания 

// // Коментар 1: Итерации:
// 1 → counters[1]++ → става 1
// 2 → counters[2]++ → 1
// 3 → counters[3]++ → 1
// 1 → counters[1]++ → 2
// 2 → counters[2]++ → 2
// Резултат: counters = [0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0]

// Обобщение на логиката:
// Стъпка	                           Цел
// Инициализиране на броячи	           Да знаем колко пъти се среща всяко число
// Обработка на входните числа	       За всяко число увеличаваме съответния брояч
// Търсене на най-срещано число	       Сравняваме броячи и запазваме най-доброто
// Равенство по брой → по-малкото	   Спазваме условието за приоритет на по-малко число

// Вход (пример)
// 5
// 1
// 2
// 3
// 1
// 2
// Числата са: [1, 2, 3, 1, 2]
// 1 → 2 пъти
// 2 → 2 пъти
// 3 → 1 път
// Победител: 1 (по-малко от 2)


// Write a program that accepts an array of integers and returns the one that occurs the most times. If there are two numbers that occur the same amount of times, return the smaller of the two.
// Input: Read from the standard input;
// The number N is on the first line;
// An integer between 1 and 10 is written on each of the next N lines;
// The input data will always be valid and in the format described. There is no need to check it explicitly;
// Output: Print to the standard output;
// On the only output line you must print the number that occurs the most;
// Constraints
// The number N is a positive integer between 1 and 100 000, inclusive;
// The list of numbers consists of positive integers between 1 and 10, inclusive;
// Sample tests
// Input
// 4
// 1
// 3
// 3
// 7
// Output
// 3