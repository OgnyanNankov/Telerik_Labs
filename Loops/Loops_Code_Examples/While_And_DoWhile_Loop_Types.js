// Syntax and differences

// While
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement. 
// В JavaScript while цикълът се използва за изпълнение на даден блок код докато дадено условие е вярно. Това означава, че кодът вътре в цикъла ще се повтаря, докато условието остане истина (true).

let n = 0;

while (n < 3) {
    n++;
}

console.log(n);
// Expected output: 3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// *****************

// do...while
// The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
let result = "";
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

// Разлика между while и do...while
// while проверява условието преди да изпълни кода.
// do...while изпълнява кода поне веднъж, преди да провери условието.

// Разлика между while и do...while
// Функция	                    while	                                   do...while
// Проверка на условието	    Преди изпълнението на кода	               След първото изпълнение на кода
// Минимален брой изпълнения	0 пъти (ако условието е false отначало)	   Поне 1 път (изпълнява се веднъж, дори ако условието е false)

// Пример 1: while – кодът може изобщо да не се изпълни
let x = 10;

while (x < 5) {                              // Условието е грешно от началото
    console.log("Това НЯМА да се изпълни.");
}
// Изход: (няма изход, защото условието е false още в началото) 

// Пример 2: do...while – кодът се изпълнява поне веднъж
let y = 10;

do {
    console.log("Това се изпълнява поне веднъж.");
} while (y < 5);                           // Условието е `false`, но кодът се е изпълнил веднъж
// Изход:Това се изпълнява поне веднъж.

// ***************

// Кога да използваме while и do...while?
// Използвай	      Кога?
// while	          Когато не си сигурен, че кодът трябва да се изпълни поне веднъж (пример: чакаш потребител да въведе правилна стойност).
// do...while	      Когато трябва задължително да се изпълни поне веднъж (пример: потребителят трябва да въведе поне едно число, преди да проверим дали е валидно).

// Заключение
// Използвай while, когато не знаеш дали трябва да се изпълни кодът.
// Използвай do...while, когато трябва поне едно изпълнение.