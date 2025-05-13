
// Move Elements                           
let array1 = [1, 2, 3, 4, 5, 6, 7];                                // Създаваме масив array1, съдържащ числата от 1 до 7. Това е изходният масив, от който ще местим елементи.
let array2 = [];                                                   // Създаваме празен масив array2, в който ще преместваме елементи от array1

let moveCount = 3;                                                 // Декларираме колко елемента ще преместим от array1 към array2. В случая: 3 елемента.

console.log(`Before element movement.`);                           // Отпечатваме състоянието на масивите преди да започне преместването.
console.log(array1);
console.log(array2);

for (let i = 0; i < moveCount; i++) {                              // Стартираме for цикъл, който ще се изпълни 3 пъти (според moveCount).
    let movedElement = array1.pop();                               // array1.pop() премахва последния елемент от array1 и го връща. Пример: първо връща 7, после 6, после 5. Променливата movedElement пази текущия премахнат елемент.
    array2.push(movedElement);                                     // Добавяме премахнатия елемент (movedElement) в края на array2. Така местим елемент от края на array1 в края на array2.
}                                                                  // Край на for цикъла. След 3 итерации сме преместили 3 елемента.

console.log(`After element movement.`);
console.log(array1);
console.log(array2);

// array.pop(): Какво прави? Премахва последния елемент от масива. Връща стойността на този елемент.
// Синтаксис: let last = array.pop();
// Пример:
// let fruits = ['apple', 'banana', 'cherry'];
// let removed = fruits.pop();
// console.log(removed); // 'cherry'
// console.log(fruits);  // ['apple', 'banana']
// pop() променя оригиналния масив (премахва последния елемент).
// Полезно когато:
// Искаш да обхождаш масив отзад напред.
// Искаш да преместиш/вземеш стойности от края на списък (стек – LIFO структура).

// array.push(value): Какво прави? Добавя елемент(и) в края на масива.Връща новата дължина на масива.
// Синтаксис: array.push(value1, value2, ...);
// Пример:
// let fruits = ['apple', 'banana'];
// fruits.push('cherry');
// console.log(fruits); // ['apple', 'banana', 'cherry']
// Може да добавиш повече от един елемент наведнъж: fruits.push('kiwi', 'mango');
// Визуално сравнение:
// Преди:
// let array1 = [1, 2, 3, 4];
// let array2 = [];
// Операция:
// let moved = array1.pop();      // взима 4
// array2.push(moved);            // слага 4 в array2
// След:
// array1 = [1, 2, 3];
// array2 = [4];
// В комбинация:
// Точно както в твоя пример – pop() и push() често се използват за прехвърляне на елементи между два масива:
// let moved = array1.pop();  // вземи последния
// array2.push(moved);        // добави го в новия
// Термини:
// pop() – изваждане (от края)
// push() – прибавяне (в края)