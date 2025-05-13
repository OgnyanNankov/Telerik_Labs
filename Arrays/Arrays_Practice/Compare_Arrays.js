// Task 'Compare Arrays'                                                             // Провери дали два масива от цели числа са напълно еднакви и отпечатай "equal" или "not equal".
let input = [
    '3',                                                                             // Първият ред '3' → означава, че ще четем по 3 елемента за всеки масив
    '1',                                                                             // Следват 3 реда за първия масив → '1', '2', '3'
    '2',
    '3',
    '2',                                                                             // След това 3 реда за втория масив → '2', '2', '4'
    '2',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());                                                             // Четем броя на елементите във всеки от масивите → n = 3
let firstList = [];                                                                 // firstList – масив за първите N числа
let secondList = [];                                                                // secondList – масив за вторите N числа
let isEqual = true;                                                                 // isEqual = true – логическа променлива, която ще пази дали масивите са еднакви

for (let i = 0; i < n; i++) {                                                       // Четем следващите N реда(числа) и ги добавяме в firstList. Пример: ['1', '2', '3'] → става[1, 2, 3]
    firstList.push(Number(gets()));
}

for (let i = 0; i < n; i++) {                                                       //  Същото за втория масив: ['2', '2', '4'] → [2, 2, 4] 
    secondList.push(Number(gets()));
}

for (let i = 0; i < n; i++) {                                                        
    if (firstList[i] !== secondList[i]) {                                           // Сравняваме по елемент двата масива:
        isEqual = false;                                                            // Ако открием разлика → isEqual = false и спираме цикъла
        break;                                                                      // Използваме break, защото няма смисъл да продължаваме, ако вече са различни.
    }
}

if (isEqual) {                                                                      // В зависимост от стойността на isEqual, отпечатваме "equal" или "not equal" 
    console.log(`equal`);
} else {
    console.log(`not equal`);
}


// Обобщение на използваните методи/операции:
// Конструкция	   Какво прави	                             Защо го използваме
// Number(gets())  Преобразува входа в число	             За да можем да сравняваме стойности
// .push(...)	   Добавя число в масив	                     За изграждане на двата списъка
// !==	           Проверява дали стойностите не са равни	 За сравнение на елементите по индекс
// break	       Спира цикъла при първа разлика	         За по-добра производителност

// Write a program that reads and compares two int arrays.
// Input
// On the first line, you will receive the number N
// On the next N lines, the numbers of the first array will be given
// On the next N lines, the numbers of the second array will be given
// Output
// Print "equal" if the two arrays are the same and "not equal" if they are not
// Constraints
// Both arrays will consist of valid integer numbers and will have the same size
// Sample tests
// Input
// 3
// 1
// 2
// 3
// 1
// 2
// 3
// Output
// equal