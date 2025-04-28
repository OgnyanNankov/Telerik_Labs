// Task 'Word or number'                                                   // Скриптът проверява дали входът е число или дума. Ако е дума, я обръща. Ако е число, увеличава го с 1. Изходът е новата стойност.

let input = [
    'good',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let isInput = gets();                                                        // Четем входа от конзолата. Входът е стринг, който ще проверим дали е число или дума.
let isNumber = true;                                                         // Инициализираме променлива isNumber, която ще следи дали входът е число или не.

// Process the data
for (let char of isInput) {                                                  // Започваме цикъл, който обхожда всеки символ от входа isInput. Ако символът е минус (-) или десетична точка (.), прескачаме проверката за число – те са допустими в числа.
    if (char === '-') continue;                                              // Пропускаме знака минус, ако е на първа позиция. Той не е част от числото.
    if (char === '.') continue;                                              // Пропускаме десетичната запетая, ако е на първа позиция. Тя не е част от числото.
    if (isNaN(char)) {                                                       // Ако някой символ не е число, тогава:
        isNumber = false;                                                    // Това не е валидно число, задаваме isNumber = false и спираме цикъла с break.
        break;
    }
}

if (isNumber) {                                                             // Проверка дали входът е число или дума:
    let number = parseFloat(isInput) + 1;                                   // Ако входът е число, го преобразуваме в число с плаваща запетая и добавяме 1.
    print(number);                                                          // Отпечатваме резултата.

} else {                                                                    // Ако входът не е число, значи е дума.
    let reversed = isInput.split('').reverse().join('');                    // Обръщаме думата наобратно и я отпечатваме.

    print(reversed);
}                                                                           // Отпечатваме обърнатата дума.

// Как работи обръщането на дума? (split, reverse, join) Ето го процеса в детайли:
// Метод	      Какво прави	                                  Пример с "good"
// .split('')	  Превръща стринга в масив от букви	              ['g', 'o', 'o', 'd']
// .reverse()	  Обръща реда на елементите	                      ['d', 'o', 'o', 'g']
// .join('')	  Съединява масива обратно в стринг	              "doog"
// Стъпка по стъпка:
// Step 1: 'good'.split('')
// → ['g', 'o', 'o', 'd']
// Step 2: ['g', 'o', 'o', 'd'].reverse()
// → ['d', 'o', 'o', 'g']
// Step 3: ['d', 'o', 'o', 'g'].join('')
// → 'doog'
// Обобщение на логиката:
// Стъпка	Какво правим
// 1	    Четем входа като текст
// 2	    Проверяваме дали той съдържа само допустими символи за число
// 3	    Ако е число → добавяме 1
// 4	    Ако е дума → обръщаме я
// 5	    Печатаме резултата

// Защо използваме parseFloat, а не просто Number()?
// parseFloat() работи добре както с цели числа (напр. 32), така и с дробни числа (напр. -42.5).
// Допуска - и . в началото на текста, което сме позволили с continue.
// Какво е parseFloat() в JavaScript?
// parseFloat() е вградена функция в JavaScript.
// Тя опитва да прочете число с плаваща запетая (десетично число) от стринг.
// Преобразува стринга в реално число (тип number).
// Ако не може да прочете число, връща NaN ("Not a Number").

// Как работи parseFloat()?
// Чете символ по символ отляво надясно,
// Спира четенето, когато срещне първия невалиден символ (който не е част от число),
// Превръща прочетеното в число.
// Примери:  
// Вход (стринг)	    parseFloat(вход)	              Резултат	
// '123'	            123	                              Чисто цяло число	
// '45.67'	            45.67	                          Десетично число	
// '-89'	            -89	                              Отрицателно цяло	
// '0.123'              0.123	                          Малко десетично	
// '-42.5'	            -42.5	                          Отрицателно десетично	
// '12px'	            12	                              Чете 12, спира на p	
// '3.14 is pi'	        3.14	                          Чете 3.14, спира на интервал	
// 'abc123'	            NaN	                              Не започва с число, веднага дава NaN	
// '' (празен стринг)   NaN	                              Няма нищо за четене	
// Защо parseFloat(), а не само Number()?
// Функция	              Поведение
// Number('12px')	      Дава NaN (цял стринг трябва да е валидно число)
// parseFloat('12px')	  Дава 12 (чете само началната числова част)
// parseFloat е по-гъвкав — успява да прочете числа, дори ако след тях има други символи.

// В контекста на твоята задача:
// Ако въведем "42.5", искаме да го интерпретираме като 42.5, а не да получим грешка.
// Ако въведем "-12", искаме да вземем -12.
// После добавяме 1 към резултата.

// let input = '-42.5';
// let number = parseFloat(input) + 1; 
// console.log(number); // изход: -41.5

// Read the input from the console using the gets() function. Store the resulting string in a constant called input. 
// Initialize a variable called isNumber to true. This variable will be used to track whether the input is a number or not.
// Start a for...of loop that iterates over each character in the input string. The variable char represents the current character.
// Inside the loop, check if the first character is a minus sign. If it is, skip it and continue checking the rest of the characters using the continue statement. 
// Check if the current character is a decimal point. If it is, skip it and continue checking the rest of the characters. 
// Check if the current character is not a digit. If it is not, set isNumber to false and break out of the loop using the break statement. 
// After the loop, check if the input is a number by checking the value of isNumber. 
// If it is a number, parse it to a floating-point number using the parseFloat() function, add 1 to it, and print the result to the console using the console.log() function. 
// If the input is not a number, assume it is a word and reverse it. Initialize an empty string called reversedWord to store the reversed word. 
// Start another for...of loop that iterates over each character in the input string. Inside the loop, add the current character to the beginning of the reversedWord string. 
// After the loop, print the reversed word to the console using the console.log() function. The result should be the input string reversed if it is a word, or the input number plus 1 if it is a number.

// Write a program that reads from the console and checks if the input is a number or a word.
// If the input is a word, it should be reversed.
// If it is a number add 1 to it.
// Input
// The input is text on a single line (without intervals)
// If the input is a word it won't contain any digits!
// Output
// Print on a single line the reversed text or increased by 1 number
// Sample tests
// Input
// good
// Output
// doog