// Task 'Calculate Discount'                                                   // Прочети N на брой цени от входа и отпечатай всяка от тях с 65% отстъпка, т.е. изчисли 35% от цената, форматирана до 2 цифри след десетичната точка.
let input = [
    '2',                                                                       // '2' → брой артикули (ще има 2 реда с цени)
    '50',                                                                      // '50' → цена на първия артикул
    '40',                                                                      // '40' → цена на втория артикул
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = +gets();                                                                // Прочитаме първия ред → '2' - ще обработим два артикула

// Process the data
for (let i = 0; i < n; i++) {                                                   // Цикъл, който се изпълнява 2 пъти (за i = 0 и i = 1), защото имаме 2 артикула
    let price = +gets();                                                        // Прочитаме следващата стойност от входа и я превръщаме в число: При първата итерация: '50' → price = 50, при втората: '40' → price = 40
    let discounted = price * 0.35;                                              // Изчисляваме 35% от price, защото: Получаваш 65% отстъпка → плащаш 35% от цената

    print(discounted.toFixed(2));

}

// Защо print(discounted.toFixed(2)) е вътре във for цикъла? - Mного важно да го разберем добре, защото това е често срещана ситуация в реални задачи.
// Накратко: Защото искаме да отпечатаме всяка намалена цена веднага след като я изчислим – по една на ред, в същия ред, в който са били въведени артикулите.
// Как работи:
// for (let i = 0; i < n; i++) {
//     let price = +gets();                  // четем текущата цена
//     let discounted = price * 0.35;        // изчисляваме намалената цена
//     print(discounted.toFixed(2));         // отпечатваме я веднага
// }
// Това означава, че за всеки артикул:
// Четем цената
// Изчисляваме намалението
// Отпечатваме веднага резултата на нов ред

// Пример:
// Вход:
// 2
// 50
// 40
// Как се изпълнява цикълът:
// i = 0:
// price = 50
// discounted = 17.50
// печатаме 17.50
// i = 1:
// price = 40
// discounted = 14.00
// печатаме 14.00
// Изход:
// 17.50
// 14.00
// Ами ако беше извън цикъла? Тогава:
// Ще се изчисли и отпечата само последната намалена цена
// Или ще хвърли грешка, ако discounted не съществува
// Пример:
// for (...) {
//     let discounted = ...
// }
// print(discounted.toFixed(2)); // ГРЕШКА – променливата не съществува извън цикъла

// You need to calculate the discounted price for each item in your shopping cart. The discount is 65%, a real deal for you.
// Input
// On the first line, you will receive N - the number of the items in your shopping cart
// On the next N lines you will each item's price
// Output
// On each line in the output print the discounted price of the item with two digits after the decimal point (Math rules for rounding apply)
// Input
// 2
// 50
// 40
// Output
// 17.50
// 14.00