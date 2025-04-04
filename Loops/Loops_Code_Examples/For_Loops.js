// The for loop

// The for loop repeats a code block a fixed number of times
// i.e., the numbers from 0 to 10, the characters from 'A' to 'Z', etc...
// Те отново изпълняват някакво парче код, докато условието им е удовлетворено.

for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}
// The loop has three main parts: the initializer, the condition, and the iterator.
// начална_стойност – задава начална стойност на броячната променлива.
// условие – проверява дали цикълът трябва да продължи.
// стъпка – определя как да се променя броячът след всяка итерация.

// for цикълът в JavaScript се използва, когато знаем колко пъти трябва да се изпълни даден код.

// Синтаксис: for (начална_стойност; условие; стъпка) {
    // Кодът, който ще се изпълнява на всяка итерация
    // }

    // Пример 1: Броене от 1 до 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Изход:
// 1
// 2
// 3
// 4
// 5

// i = 1 → започваме от 1
// i <= 5 → цикълът върви, докато i е ≤ 5
// i++ → увеличаваме i с 1 на всяка итерация

// Кога да използваме for, while и do...while?
// Вид цикъл	 Кога се използва?
// for	         Когато знаем колко точно итерации ще има (например броене от 1 до 10).
// while	     Когато не знаем предварително колко пъти ще се изпълни цикълът (например, чакаме потребителски вход).
// do...while	 Когато искаме кодът да се изпълни поне веднъж, дори ако условието е false.
// Заключение
// for е най-добрият избор, ако знаем колко итерации са нужни.
// for...of е удобен за масиви.
// for...in е подходящ за обекти.
// break спира цикъла, а continue пропуска итерация.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// JavaScript Loops Made Easy: https://www.youtube.com/watch?v=Kn06785pkJg