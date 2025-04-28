// Task 'Vowel to Length Ratio'
let input = [
    '4',                                                                         // Броя на редовете, които ще следват. Следват имената на храните.

    'pizza',
    'macaroni',
    'kiufte',
    'banica',
];

let print = this.print || console.log;                                           // Дефинираме print като функция за отпечатване. Ако средата (например в Judge) има дефинирана this.print, ще използваме нея. Ако не, по подразбиране ще използваме console.log. Това се прави за да може един и същи код да работи както локално, така и в системата на Judge.
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);          // Дефинираме функция gets, която връща следващия ред от входа при всяко извикване. (arr, index) => () => arr[index++] е closure – функция, която „запомня“ състоянието си. Подаваме input и 0, за да започнем от първия елемент. При всяко извикване gets() се връща следващата стойност от input. Това е нужно за да се симулира поведението на gets() от Judge системата.

function countVowels(word) {                                                     // Функция countVowels(word): Създаваме функция, която приема дума (стринг) и брои гласните в нея.
    const vowels = 'aeiou';                                                      // Дефинираме гласните букви, които ще търсим в думата. Използваме стринг, за да можем лесно да проверим дали символът е гласна.
    let count = 0;                                                               // Инициализираме броя на гласните на 0.
    for (let char of word.toLowerCase()) {                                       // Преобразуваме думата в малки букви, за да не се налага да проверяваме за главни и малки букви. Обхождаме всеки символ от думата.
        if (vowels.includes(char)) {                                             // Проверяваме дали текущият символ е гласна, като използваме includes() метода на стринга. Той проверява дали символът е в стринга с гласни.
            count++;                                                             // Ако е гласна, увеличаваме брояча с 1.
        }
    }
    return count;                                                                // Връщаме броя на гласните в думата.
}

// Read the input from the system
let n = +gets();                                                                 // Четем броя на редовете, които ще следват. Преобразуваме го в число с +, за да можем да го използваме в цикъла.
let bestFood = '';                                                               // Инициализираме променлива, в която ще пазим името на храната с най-добро съотношение гласни/дължина. Започваме с празен стринг, който няма дължина.
let bestRatio = Infinity;                                                        // Инициализираме променлива, в която ще пазим най-доброто съотношение гласни/дължина. Започваме с безкрайност (Infinity), за да можем да я сравняваме с всяко ново съотношение. Това е нужно, за да можем да намерим най-доброто съотношение по-късно.
let bestCount = 0;                                                               // Инициализираме променлива, в която ще пазим броя на гласните в храната с най-добро съотношение. Започваме с 0, защото все още не сме намерили храна.

// Process the data
for (let i = 0; i < n; i++) {                                                               // Започваме цикъл от 0 до n - 1, за да прочетем всяка храна. i е текущия индекс на храната.
    let food = gets();                                                                         // Четем текущата храна от входа и я записваме в променливата food.
    let count = countVowels(food);                                                             // Извикваме функцията countVowels, за да преброим гласните в текущата храна. Записваме резултата в променливата count.
    let ratio = count / food.length;                                                           // Изчисляваме съотношението гласни/дължина на храната. Записваме резултата в променливата ratio.

    if (                                                                                       // Проверяваме дали текущата храна има по-добро съотношение гласни/дължина от най-доброто досега.
        ratio < bestRatio ||                                                                   // Ако текущото съотношение е по-добро от най-доброто досега, заменяме.
        (ratio === bestRatio && count > bestCount) ||                                          // Ако текущото съотношение е равно на най-доброто досега, но текущата храна има повече гласни, заменяме.
        (ratio === bestRatio && count === bestCount && food.length > bestFood.length)          // Ако текущото съотношение е равно на най-доброто досега, текущата храна има същия брой гласни, но е по-дълга от най-добрата досега, заменяме.
    ) {
        bestRatio = ratio;                                                                     // Заменяме най-доброто съотношение с текущото.
        bestFood = food;                                                                       // Заменяме най-добрата храна с текущата
        bestCount = count;                                                                     // Заменяме броя на гласните с текущия брой.
    }
}
print(`${bestFood} ${bestCount}/${bestFood.length}`);

// Обобщение на логиката:
// Четем броя на храните и самите храни.
// За всяка храна:
// Броим гласните,
// Изчисляваме ratio (гласни/дължина),
// Сравняваме по 3 критерия: най-малко ratio, най-много гласни, най-много букви.
// След всички сравнения печатаме най-добрата храна и нейното съотношение.
// Малки пояснения:
// Концепция	                         Обяснение
// .length	                             Връща броя на символите в стринг или масив
// toLowerCase()	                     Прави всички букви малки за коректна проверка
// includes()	                         Проверява дали даден символ е в стринг
// Infinity	                             Най-голямото възможно число (стартираме с него, за да търсим минимум)
// Template Literal	                     ${variable} – вкарва променливи в стринг

// Вход: "pizza"
// Какво правим: Четем "pizza" като стринг.
// Извикваме countVowels('pizza').
// Вътре в countVowels('pizza'):
// Превръщаме думата в малки букви: "pizza" → "pizza" (няма промяна тук).
// Обхождаме буквите една по една:
// p → не е гласна → брояч остава 0.
// i → гласна → брояч става 1.
// z → не е гласна → брояч остава 1.
// z → не е гласна → брояч остава 1.
// a → гласна → брояч става 2.
// Резултат от countVowels('pizza') → 2 гласни.
// Изчисляваме ratio (съотношение): let ratio = count / food.length;
// count = 2 (брой гласни)
// food.length = 5 (букви в "pizza")
// Тогава:
// ratio = 2 / 5 = 0.4
// Сравняваме с текущото най-добро:
// Първоначално bestRatio = Infinity.
// Тъй като 0.4 < Infinity, обновяваме:
// bestRatio = 0.4
// bestFood = 'pizza'
// bestCount = 2
// Подготвяме финалния изход за pizza:
// Когато отпечатаме: print(`${bestFood} ${bestCount}/${bestFood.length}`);    Резултатът е: pizza 2/5


// Initialize three variables called bestFood, bestRatio, and bestCount to store the best food option, its vowel to length ratio, and the count of vowels in it.
// Set bestFood to an empty string, bestRatio to Infinity, and bestCount to 0.
// Read the number of foods from the console using the gets() function. Convert the input string to an integer using the parseInt() function. Store the resulting number in a constant called n.
// Start a for loop that iterates n times. The variable i is the loop counter and represents the current food number.
// Inside the loop, read the current food from the console using the gets() function. Store the resulting string in a constant called food.
// Calculate the ratio of vowels to letters for the current food.
// Initialize a variable called count to 0 to count the number of vowels. Use a for loop to iterate over each character in the food string.
// If the current character is a vowel, increment count by 1 using the ++ operator. After the loop, calculate the ratio by dividing count by the length of the food string.
// Store the resulting number in a constant called ratio.
// Check if the current food has a better vowel-to-letter ratio than the best food so far.
// If it does, or if it has the same ratio but more vowels, or if it has the same ratio and the same number of vowels but is longer, update bestFood, bestRatio, and bestCount to the current food, its ratio, and its count of vowels.
// After the loop, print the best food and its vowel-to-letter ratio to the console using the console.log() function. Use string concatenation to format the output as a string in the required format.

// You are still hungry! The objective criteria of finding the food with the longest length is not working anymore.
// Continuing the idea of thinking outside the box, you decide to introduce a new rule - the best food is the one with the least vowels-to-letters ratio.
// For instance:
// pizza -> 2/5 (2 vowels, 5 letters)
// macaroni -> 4/8 (4 vowels, 8 letters)
// Pizza is clearly better.
// The vowels are 'aouei'
// If two foods share the same ratio, choose the one with more vowels. If they have the same ratio and same number of vowels, choose the one with more letters.
// Input
// The input consists of several lines
// On the first line - integer N - the number of lines to follow
// On the next N lines - each food
// Output
// Output the best food and its ratio in format `food vowels/letters'
// Constraints
// 1 <= lines <= 20
// Sample Tests
// Input
// 4
// pizza
// macaroni
// kiufte
// banica
// Output
// pizza 2/5