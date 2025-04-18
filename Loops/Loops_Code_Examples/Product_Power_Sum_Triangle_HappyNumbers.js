// Product                                                                 // Изчислява произведението на всички цели числа в интервала от n до m включително.
// Инициализация на променливите:
let n = 3;                                                                 // n = 3: Начална стойност на интервала.
let m = 6;                                                                 // m = 6: Крайна стойност на интервала.

if (n < m) {                                                               // Проверяваме дали n е по-малко от m. Ако не е, кодът преминава към else блока и извежда съобщение за грешка.
    let num = n;                                                           // let num = n;: Започваме от началната стойност n.
    let product = 1;                                                       // let product = 1;: Инициализираме променливата за произведението със стойност 1.
    while (num <= m) {                                                     // Цикъл while: while (num <= m): Докато num е по-малко или равно на m, изпълняваме следните стъпки:
        product = product * num;                                           // Умножаваме текущото product със стойността на num.
        num++;                                                             // Увеличаваме num с 1, за да преминем към следващото число в интервала.
    }

    console.log(`Product[${n}..${m}] = ${product}`);
} else {
    console.log(`Error: n (${n}) should be smaller than m (${m})!`);
}

// Детайлно разглеждане на всяка итерация:
// Итерация	 Стойност на num	 Стойност на product	Действие
// 1	     3	                 1 * 3 = 3	            num става 4
// 2	     4	                 3 * 4 = 12	            num става 5
// 3	     5	                 12 * 5 = 60	        num става 6
// 4	     6	                 60 * 6 = 360	        num става 7 (край)
// Резултат: Product[3..6] = 360 - Това означава, че произведението на числата от 3 до 6 включително е 360.

// *******************
// Power                                                                   // Изчислява степенуването на дадено число без използването на вградени математически функции като Math.pow().
// Инициализация на променливите:
let number = 2;                                                            // number = 2: Основата, която ще бъде повдигната на степен.   
let power = 5;                                                             // power = 5: Степента, на която ще бъде повдигната основата.

let result = 1;                                                            // Инициализация на резултата: result = 1: Започваме с резултат 1, тъй като умножението с 1 не променя стойността.

for (let i = 0; i < power; i++) {                                          // Цикъл for: for (let i = 0; i < power; i++) { ... }: Цикълът се изпълнява power пъти (в този случай 5 пъти).
    result = result * number;                                              // Във всяка итерация: result = result * number;: Умножаваме текущата стойност на result със стойността на number.
}

console.log(`${number} to the power of ${power} = ${result}`);             // 2 to the power of 5 = 32

// Детайлно разглеждане на всяка итерация:
// Итерация  Стойност на i	Стойност на result	Действие
// 1         0	            1 * 2 = 2	        i става 1
// 2	     1	            2 * 2 = 4	        i става 2
// 3	     2	            4 * 2 = 8	        i става 3
// 4	     3	            8 * 2 = 16	        i става 4
// 5	     4	            16 * 2 = 32	        i става 5 (край)
// Финален резултат: След изпълнението на кода, в конзолата ще се изведе: 2 to the power of 5 = 32.Това означава, че 2 на 5-та степен = 32

// *******************
// Summ Odd                                                                 // Изчислява сумата на нечетните числа в интервала от 1 до n2 включително.
// Инициализация на променливите:                                                           
let n2 = 11;                                                                // n2 = 11: Определя горната граница на интервала (включително).
let sum = 0;                                                                // sum = 0: Инициализира променливата, която ще съхранява сумата на нечетните числа.

for (let i = 1; i <= n2; i++) {                                             // Цикъл for: // for (let i = 1; i <= n2; i++): Цикълът започва от 1 и се увеличава с 1 до достигане на n2 (включително).
    if (i % 2 === 0) {                                                      // Проверка за четност: if (i % 2 === 0): Проверява дали текущото число i е четно.
        continue;                                                           // Ако i е четно (i % 2 === 0), командата continue пропуска останалата част от текущата итерация и преминава към следващата.
    }                                                                       // Ако i е нечетно, се изпълнява следващата команда.

    sum = sum + i;                                                          // Добавяне към сумата: sum = sum + i;: Ако i е нечетно, то се добавя към променливата sum.
}

console.log(`Sum of odd numbers from 1 to ${n} = ${sum}`);                  // Sum of odd numbers from 1 to 11 = 36 - След приключване на цикъла, извежда сумата на нечетните числа в конзолата

// Детайлно разглеждане на всяка итерация:
// Итерация	 Стойност на i	Проверка i % 2 === 0  Действие	                 Стойност на sum
// 1	     1	            false	              sum = 0 + 1	             1
// 2	     2	            true	              пропускане (continue)	     1
// 3	     3	            false	              sum = 1 + 3	             4
// 4	     4	            true	              пропускане (continue)	     4
// 5	     5	            false	              sum = 4 + 5	             9
// 6	     6	            true	              пропускане (continue)      9
// 7	     7	            false	              sum = 9 + 7	             16
// 8	     8	            true	              пропускане (continue)	     16
// 9	     9	            false	              sum = 16 + 9	             25
// 10	     10	            true	              пропускане (continue)	     25
// 11	     11	            false	              sum = 25 + 11	             36
// Финален резултат:
// След изпълнението на кода, в конзолата ще се изведе: Sum of odd numbers from 1 to 11 = 36. Това означава, че сумата на нечетните числа от 1 до 11 включително е 36.
// Забележка:Използване на continue: В този код операторът continue се използва за пропускане на четните числа. Това е ефективен начин да се фокусираме само върху нечетните числа в даден интервал.

// *******************
// Triangle                                                                  // Генерира ляво подравнен триъгълник от звездички с височина n3 = 9.
// Инициализация на променливите:  
let n3 = 9;                                                                  // Дефинираме променливата n3 със стойност 9, която определя броя на редовете (или височината) на триъгълника.

for (let row = 1; row <= n3; row++) {                                        // Външен цикъл (for):  Този цикъл управлява броя на редовете. Започва от 1 и продължава до n3 (включително). Всяка итерация представлява един ред от триъгълника.
    let line = '';                                                           // Инициализация на променливата line: В началото на всяка итерация на външния цикъл, инициализираме празен низ line, който ще съдържа звездичките за текущия ред.
    for (let column = 1; column <= row; column++) {                          // Вътрешен цикъл (for): Този цикъл добавя звездички към низа line. Броят на звездичките в даден ред е равен на номера на реда (row). Например, на първия ред ще има една звездичка, на втория – две, и т.н.

        line = line + '*';                                                   // Добавяне на звездички: Във всяка итерация на вътрешния цикъл добавяме една звездичка към низа line.
    }
    console.log(line);
}

// Детайлно разглеждане на всяка итерация:
// Итерация на row	 Стойност на line	Действие
// 1	             *	                Добавя се 1 звездичка и се извежда *
// 2	             **	                Добавят се 2 звездички и се извежда **
// 3	             ***	            Добавят се 3 звездички и се извежда ***
// 4	             ****	            Добавят се 4 звездички и се извежда ****
// 5	             *****	            Добавят се 5 звездички и се извежда *****
// 6	             ******	            Добавят се 6 звездички и се извежда ******
// 7	             *******	        Добавят се 7 звездички и се извежда *******
// 8	             ********	        Добавят се 8 звездички и се извежда ********
// 9	             *********	        Добавят се 9 звездички и се извежда *********
// Резултат: След изпълнението на кода, в конзолата ще се изведе следният ляво подравнен триъгълник:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// Забележка: Ляво подравнен триъгълник: Този тип триъгълник е подравнен вляво, тъй като всяка нова линия започва от началото на реда и добавя допълнителна звездичка спрямо предходния ред.

// *******************
// Primes Range                                                             // Намира и извежда всички прости числа в интервала от n4 до m4 включително. 
// Инициализация на променливите:  
let n4 = 7;                                                                 // Начало на интервала за търсене на прости числа.
let m4 = 17;                                                                // Край на интервала.

for (let i = n4; i <= m4; i++) {                                            // Външен цикъл (for): for (let i = n4; i <= m4; i++) { ... }: Обхожда всички числа от n4 до m4 включително
    let isPrime = true;                                                     // Проверка за просто число: let isPrime = true;: Предполага се, че текущото число i е просто.
    let maxDivisor = Math.round(Math.sqrt(i));                              // Определя се максималният възможен делител на i. Това оптимизира проверката, тъй като ако i има делител по-голям от своя квадратен корен, то той вече би бил открит като по-малък делител.

    for (let j = 2; j <= maxDivisor; j++) {                                 // Вътрешен цикъл (for): for (let j = 2; j <= maxDivisor; j++) { ... }: Проверява делимостта на i с числа от 2 до maxDivisor.
        if (i % j === 0) {                                                  // if (i % j === 0) { isPrime = false; break; }: Ако i се дели без остатък на j, то не е просто число. Задаваме isPrime = false и прекъсваме вътрешния цикъл с break.
            isPrime = false;
            break;
        }
    }

    if (isPrime) {                                                           // Извеждане на резултата: f (isPrime) { console.log(${i} is a prime number); }: Ако след проверките isPrime остане true, то i е просто число и се извежда в конзолата.
        console.log(`${i} is a prime number`);
    }
}

// Детайлно разглеждане на итерациите:
// Число i	  maxDivisor	  Проверени делители	  Резултат
// 7	      3	              2, 3	                  Просто число
// 8	      3	              2	                      Не е просто (дели се на 2)
// 9	      3	              2, 3	                  Не е просто (дели се на 3)
// 10	      3	              2	                      Не е просто (дели се на 2)
// 11	      3	              2, 3	                  Просто число
// 12	      3	              2	                      Не е просто (дели се на 2)
// 13	      3	              2, 3	                  Просто число
// 14	      3	              2	                      Не е просто (дели се на 2)
// 15	      3	              2, 3	                  Не е просто (дели се на 3)
// 16	      4	              2, 3, 4	              Не е просто (дели се на 2)
// 17	      4	              2, 3, 4	              Просто число
// Резултат: След изпълнението на кода, в конзолата ще се изведе:
// 7 is a prime number
// 11 is a prime number
// 13 is a prime number
// 17 is a prime number
// Това означава, че простите числа в интервала от 7 до 17 са: 7, 11, 13 и 17.
// Забележки:
// Оптимизация чрез квадратен корен: Вместо да проверяваме делимостта на i с всички числа до i-1, проверяваме само до Math.sqrt(i). Това значително подобрява ефективността на алгоритъма.
// Изключване на числото 1: В този код не се проверява числото 1, тъй като то не е просто число по дефиниция.
// Гранични случаи: Ако n4 и m4 са равни или n4 е по-голямо от m4, кодът няма да изведе нищо. Може да се добави проверка за тези случаи, ако е необходимо.

// Какво е просто число: Просто число е натурално число (т.е. положително цяло число), което има само два делителя: 1 и самото себе си. 
// Това означава, че такова число не може да бъде разделено на друго число, освен на 1 и на себе си, без да се получи остатък.
// Важно: Числото 1 не се счита за просто число, тъй като има само един делител – самото себе си. Простите числа започват от 2 нагоре.Как да проверим дали едно число е просто?
// Започваме от числото 2 (първото просто число).
// Проверяваме дали нашето число се дели без остатък на 2.
// Ако да – числото не е просто.
// Ако не – продължаваме с следващото число (3, 4 и т.н.), докато стигнем до квадратния корен на нашето число.
// Ако числото не се дели без остатък на никое от тези числа, то е просто.
// Пример: Да проверим дали числото 17 е просто.
// Делим 17 на 2: не се дели без остатък.
// Делим 17 на 3: не се дели без остатък.
// Делим 17 на 4: не се дели без остатък.
// Тъй като 17 не се дели без остатък на никое число от 2 до √17 ≈ 4.1, то 17 е просто число. 
// https://www.chitatel.net/simple-numbers/

// *************** 
// Happy Numbers                                                                       // Генерира и извежда всички четирицифрени числа, наречени "щастливи числа", при които сумата на първите две цифри е равна на сумата на последните две цифри.
// Инициализация на променливите:                                                      // Кодът използва четири вложени for цикъла, всеки от които обхожда цифрите от 1 до 9. Тези цикли представляват четирите цифри на числото:
for (let a = 1; a <= 9; a++) {                                                         // a: Първа цифра (хилядни)
    for (let b = 1; b <= 9; b++) {                                                     // b: Втора цифра (стотици)
        for (let c = 1; c <= 9; c++) {                                                 // c: Трета цифра (десетици)
            for (let d = 1; d <= 9; d++) {                                             // d: Четвърта цифра (единици)
                if (a + b === c + d) {                                                 // Проверка на условието за "щастливо число": // Вътре в най-вътрешния цикъл се проверява дали сумата на първите две цифри (a + b) е равна на сумата на последните две цифри (c + d).
                    console.log(`${a}${b}${c}${d} is a happy number`);                 // Ако условието е изпълнено, числото се счита за "щастливо" и се извежда в конзолата.
                }
            }
        }
    }
}

// Пример за изпълнение: Нека разгледаме пример с конкретни стойности:
// a = 1, b = 2, c = 0, d = 3:
// Сума на първите две цифри: 1 + 2 = 3
// Сума на последните две цифри: 0 + 3 = 3
// Тъй като 3 == 3, числото 1203 се счита за "щастливо" и ще бъде изведено като: 1203 is a happy number
// Забележки:
// 1. Ограничение на цифрите от 1 до 9: В предоставения код, всички цифри варират от 1 до 9. Това означава, че числа като 1001 или 2002, които съдържат нули, няма да бъдат разгледани.
// Ако искаме да включим и нулите като възможни цифри, трябва да променим диапазона на b, c и d от 0 до 9, но a трябва да остане от 1 до 9, за да се избегнат числа с водещи нули.
// 2. Алтернативен термин: Терминът "щастливи числа" в този контекст се отнася до числа, при които сумата на първите две цифри е равна на сумата на последните две.
// Това е различно от математическото понятие за "щастливи числа" (happy numbers), които се дефинират чрез итеративен процес на сумиране на квадратите на цифрите на числото.
// Важно е да се прави разлика между тези две дефиниции.