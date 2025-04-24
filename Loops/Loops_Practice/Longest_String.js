// Task 'Longest String'                                                         // Скриптът избира най-дългата дума от въведените и я отпечатва. Ако има повече от една с равна дължина, печели последната.
let input = [
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
    'END',
];

let print = this.print || console.log;                                           // Дефинираме print като функция за отпечатване. Ако средата (например в Judge) има дефинирана this.print, ще използваме нея. Ако не, по подразбиране ще използваме console.log. Това се прави за да може един и същи код да работи както локално, така и в системата на Judge.
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);          // Дефинираме функция gets, която връща следващия ред от входа при всяко извикване. (arr, index) => () => arr[index++] е closure – функция, която „запомня“ състоянието си. Подаваме input и 0, за да започнем от първия елемент. При всяко извикване gets() се връща следващата стойност от input. Това е нужно за да се симулира поведението на gets() от Judge системата.

// Read the input from the system
let longestFood = '';                                                            // Създаваме променлива, в която ще пазим името на храната с най-дълго име (най-много символи). Започваме с празен стринг, който няма дължина.

// Process the data 
while (true) {                                                                   // Започваме безкраен цикъл while (true), който ще прекъснем ръчно, когато прочетем 'END'
    let food = gets();                                                           // Четем следващия ред от входа и го записваме в променливата food.
    if (food === 'END') {                                                        // Ако сме стигнали до 'END', прекъсваме цикъла с break. Това е начинът да се спре безкрайният while (true) цикъл.
        break;
    }
    if (food.length >= longestFood.length)                                       // Сравняваме дължината на текущата храна food с дължината на най-дългата досега longestFood.
        longestFood = food;                                                      // Ако текущата е по-дълга или равна, заменяме longestFood с нея. Това гарантира, че ако има равни по дължина, ще се избере последната (според условието).

}                                                                                // Край на цикъла. Цикълът ще се върти, докато не стигнем до 'END'.

print(longestFood);

// Обяснение: 
// 1. Защо използваме while (true) цикъл?
// Причина:В условието пише:// "The input consists of at least 2 lines. The last line is always END."
// Това означава, че не знаем предварително колко реда ще бъдат въведени – може да са 3, 5 или 50. Единственият начин да спрем четенето е да проверяваме всеки ред дали е 'END'.
// Затова: Използваме while (true) – безкраен цикъл, който ще върви докато не решим ние да го спрем.
// Спираме го с break, когато прочетем 'END', което е специална дума, указваща край на входа.
// while (true) + break при END е често използван шаблон при задачи, където не знаеш предварително броя на редовете.
// 2. Защо проверяваме food.length >= longestFood.length?
// Причина:В условието пише: "If two or more foods have equal length, print the last one."
// Това означава, че ако има две храни с еднаква дължина (например "banica" и "kiufte"), трябва да изберем последната срещната.
// Затова: Ако food.length > longestFood.length – ясно, новата е по-дълга → заменяме.
// Ако food.length === longestFood.length – пак трябва да заменим, защото искаме последната по условие.
// Това ли е принципът за решаване на такива задачи? Да! Почти всички задачи от този тип (обхождане на вход и намиране на „най-голямото“ нещо) се решават с този общ шаблон:
// Стъпки:
// Инициализираш „най-добрата стойност“, напр. празен стринг, 0, -Infinity, null и т.н.
// Четеш входа с цикъл – while, for, forEach, в зависимост от източника.
// Имаш условие за спиране, напр. 'END', празен ред, брой итерации и т.н.
// Сравняваш текущата стойност с най-добрата.
// Ако е по-добра (или равна – според условието), я запазваш.
// Можеш ли да използваш този шаблон и занапред?
// Абсолютно да. Ето типове задачи, които се решават по този начин:
// Намиране на най-дългата/най-късата дума
// Най-голямото/най-малкото число
// Най-честото срещане на нещо
// Първото или последното нещо, отговарящо на условие
// Пример: най-голямо число до -1
// let input = ['5', '8', '2', '-1'];
// let gets = ((arr, i = 0) => () => arr[i++])(input);
// let max = -Infinity;
// while (true) {
//     let num = Number(gets());
//     if (num === -1) break;
//     if (num > max) max = num;
// }
// console.log(max);




// Условия и упътване 
// Initialize a variable called longestFood to an empty string. This variable will be used to store the food with the longest name.
// Start a while loop that will continue indefinitely. This is because we don't know in advance how many foods the user will enter.
// Inside the loop, read a line of input from the console using the gets() function. Store the resulting string in a constant called food.
// Check if the input is 'END' using the strict equality operator (===). If it is, break out of the loop using the break statement. This is the condition that will eventually stop the loop.
// Check if the length of the current food is greater than or equal to the length of the longest food so far. Use the length property of the string to get the number of characters in the food name.
// If the current food is longer, update the value of longestFood to be the current food.
// After the loop, print the food with the longest name to the console using the console.log() function. This is the result of the problem.

// You are very hungry, but there is a problem - there is just too much options and you can only eat one thing.
// Being a clever programmer, you decide to form objective critera and eat the food with the longest name.
// Also, why count manually in 30 seconds, when you can spend 15 minutes writing a script to do the counting?
// Input
// The input consists of at least 2 lines
// The last line is always END
// Each different food is on a new line
// Output
// Print the food with the longest name. If two or more foods have equal length, print the last one.
// Constraints
// 1 <= lines of input <= 50 The last line will always be END
// Sample Tests
// Input
// pizza
// macaroni
// kiufte
// banica
// END
// Output
// macaroni