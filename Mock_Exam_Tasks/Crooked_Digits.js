// Task 'Crooked Digits'                                                  // Да намерим така нареченото „криво число“ (crooked digit). Сумираме всички цифри (без знаци и десетични точки). 
let input = [                                                             // Ако сумата е по-голяма от 9, повтаряме сумирането на нейните цифри. Повтаряме докато получим едноцифрено число.
    '-7231'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();

while (n.length > 1) {                                                    // Цикъл, който ще се изпълнява, докато n има повече от 1 символ, т.е. не е едноцифрено число.
    let sum = 0;                                                          // Сумирането започва от 0 при всяка нова итерация.

    for (i = 0; i < n.length; i++) {                                      // Обхождаме всеки символ (буква/цифра) от текущото n.
        if (n[i] >= '0' && n[i] <= '9') {                                 // Проверка дали символът е цифра (например '7', '2'). Пропускаме '-', '.' и други – взимаме само цифрите. 
            sum += Number(n[i]);                                          // Преобразуваме всяка цифра в число и я прибавяме към сумата
        }

    }
    n = sum.toString();                                                   // След като сумираме всички цифри → правим n отново на стринг, за да можем да го обработим пак в следващата итерация
}

console.log(n);

// Итерации със стойност -7231
// Стъпка 1: Вход: '-7231'
// Цифри: 7, 2, 3, 1
// Сума: 7 + 2 + 3 + 1 = 13
// n = '13' → повече от 1 цифра → продължаваме
// Стъпка 2: Вход: '13'
// Цифри: 1, 3
// Сума: 1 + 3 = 4
// n = '4' → само една цифра → спираме
// Финален изход: 4

// Защо използваме while (n.length > 1): Причина: Не знаем предварително колко пъти ще трябва да сумираме цифрите, за да стигнем до едноцифрено число.
// Може да се случи още от първия път (напр. при вход 3), или да се наложат няколко стъпки (напр. -7231 → 13 → 4)
// Затова ни трябва цикъл, който се повтаря, докато не получим едноцифрено число.
// Какво значи едноцифрено число: Това е число между 0 и 9 включително – число, което може да се изрази с точно една цифра.
// Защо проверката е n.length > 1: Внимание: n е стринг, не число. Така че: '7' → n.length = 1 → стоп, '13' → n.length = 2 → продължаваме
// Ами ако n = '9': '9'.length = 1 → не влиза в while - Цикълът не се изпълнява, защото вече имаме едноцифрено число и програмата веднага отпечатва 9
// Защо не използваме while (n > 9): Можем – но само ако работим с числа, а тук работим със стринг, защото:
// Трябва да обхождаме всеки символ (n[i]) и  да проверяваме дали е цифра ('0' до '9')
// -, . не са валидни → ще ги прескочим: Нека обясним как точно програмата разбира кои символи да игнорира (напр. - и .) и кои са валидни цифри, въпреки че входът е стринг.
// Ключов момент: входът е стринг: let n = '-7231';  - n съдържа поредица от символи (не числа). Тоест:
// n[0] = '-'       // не е цифра
// n[1] = '7'       // цифра
// n[2] = '2'       // цифра
// n[3] = '3'       // цифра
// n[4] = '1'       // цифра
// Как програмата разбира какво да сумира?
// Това е ключовият блок:
// if (n[i] >= '0' && n[i] <= '9') {
//     sum += Number(n[i]);
// }
// Какво се случва тук:
// n[i] е символ (стринг от 1 знак). Проверяваме дали той е между '0' и '9' по лексикографска (ASCII) стойност
// Как работи сравнението '0' <= n[i] <= '9': Това сравнение използва ASCII кодове зад кулисите:
// Символ	ASCII код
// '0'	    48
// '1'	    49
// '2'	    50
// ...	    ...
// '9'	    57
// '-'	    45
// '.'	    46
// Така че, когато питаме: if (n[i] >= '0' && n[i] <= '9')
// → това е валидно само за реални цифри
// → символи като -, . са извън този диапазон и няма да влязат в блока
// Какво прави програмата, ако срещне - или .?
// n[i] = '-' → '0' <= '-' → ❌ грешно → пропуска се
// n[i] = '.' → '0' <= '.' → ❌ грешно → пропуска се
// Затова не се налага допълнителна проверка – просто if-ът ги изключва автоматично.
// Пример с вход -42.7 - n = "-42.7"
// Символ n[i]	Проверка '0' <= n[i] <= '9'	Резултат
// '-'	❌	прескача се
// '4'	✅	сумира се (4)
// '2'	✅	сумира се (2)
// '.'	❌	прескача се
// '7'	✅	сумира се (7)
// Сума: 4 + 2 + 7 = 13
// Обобщение:
// Въпрос	                                           Отговор
// ❓ Как се прави разлика между цифри и други?	      Чрез if (n[i] >= '0' && n[i] <= '9') – сравнение по ASCII стойности
// ❓ Какво става с - или .?	                          Не влизат в if проверката → автоматично се игнорират
// ❓ Защо не ползваме isNaN()?	                      По-бавно и по-сложно за този случай – проверката по символ е по-точна

// The crooked digit of a given number N is calculated using the number's digits in a very weird and bendy algorithm. The algorithm takes the following steps:
// Sums the digits of the number N and stores the result back in N.
// If the obtained result is bigger than 9, step 1. is repeated, otherwise the algorithm finishes.
// The last obtained value of N is the result, calculated by the algorithm.
// Input: The input data should be read from the console.
// The only line in the input contains a number N, which can be an integer or real number (decimal fraction), positive or negative.
// The input data will always be valid and in the format described. There is no need to check it explicitly.
// Output: The output data should be printed on the console.
// You must print the calculated crooked digit of the number N on the first and only line of the output.
// Constraints:
// The number N will have no more than 300 digits before and after the decimal point.
// The decimal separator will always be the "." symbol.
// Sample tests
// Input: 3
// Output: 3

