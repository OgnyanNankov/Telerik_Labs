// Task 'Print Deck of Cards'                                             // Прочитаме едно лице на карта (напр. '10', 'Q', 'A') и отпечатваме всички карти от '2' до тази, като за всяка карта показваме четирите ѝ бои (suits): spades, clubs, hearts, diamonds.
let input = [
    '10',                                                                 // Масив с един елемент '10', т.е. искаме да отпечатаме всички карти от '2' до '10'.
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];     // Това е масив с всички лица на стандартните карти, подредени по ред.
const suits = ['spades', 'clubs', 'hearts', 'diamonds'];                                  // Това е втори масив, който съдържа четирите бои на картите. Те ще се използват за да отпечатаме всяка карта в четири варианта.
const inputCard = gets();                                                                 // Вземаме от входа символа на картата, до която трябва да отпечатваме. В нашия случай: '10'

// Process the data
const endIndex = cardFaces.indexOf(inputCard);                                            // Какво прави indexOf(). indexOf() търси позицията (индекса) на дадена стойност в масива. Пример в коментар 2

for (let i = 0; i <= endIndex; i++) {                                                     // Цикъл, който ще обхожда елементите от cardFaces от индекс 0 до endIndex. Например, ако inputCard = '10', тогава: endIndex = 8, и цикълът ще върви от i = 0 до i = 8
    const face = cardFaces[i];                                                            // Във всяка итерация взимаме текущото лице на картата (напр. '2', '3', ..., '10')
    const line = suits.map(suit => `${face} of ${suit}`).join(', ');                      // Това е много красив начин да генерираме 4 версии на всяка карта. Обяснение в коментар 3
    print(line);
}


// 1. Как работят масивите в JS: Масив е списък от стойности, подредени по индекси, започващи от 0. Например:
// cardFaces[0] = '2'
// cardFaces[1] = '3'
// cardFaces[8] = '10'
// cardFaces[12] = 'A'

// 2. indexOf() търси позицията (индекса) на дадена стойност в масива. Пример:
// cardFaces.indexOf('2') → 0
// cardFaces.indexOf('10') → 8
// cardFaces.indexOf('Q') → 10
// Така разбираме докъде трябва да броим в cardFaces, за да отпечатаме всички карти от '2' до '10' (включително).

// 3. suits.map(suit => `${face} of ${suit}`).join(', ');
// suits.map(...) обхожда всички бои и връща масив:
// ['2 of spades', '2 of clubs', '2 of hearts', '2 of diamonds']
// .join(', ') свързва тези стойности в един стринг:
// '2 of spades, 2 of clubs, 2 of hearts, 2 of diamonds'

// Обобщено:
// Как се използва indexOf(), за да намерим позиция в масив
// Как работи map() за създаване на нов масив с промени
// Как се генерира стринг от масив с .join(', ')

// Write a program that reads a card sign(as a string) from the console and generates and prints all possible cards from a standard deck of 52 cards up to the card with the given sign(without the jokers).
// The cards should be printed using classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).
// The card faces should start from 2 to A(10 is 10).
// Print each card face in its four possible suits: clubs, diamonds, hearts, and spades.
// Input
// On the only line, you will receive the sign of the card to which you should print the cards in the deck.
// Output
// The output should follow the format defined in the sample tests below.
// Constraints
// The input character will always be a valid card sign.
// Sample tests
// Input
// 5
// Output
// 2 of spades, 2 of clubs, 2 of hearts, 2 of diamonds
// 3 of spades, 3 of clubs, 3 of hearts, 3 of diamonds
// 4 of spades, 4 of clubs, 4 of hearts, 4 of diamonds
// 5 of spades, 5 of clubs, 5 of hearts, 5 of diamonds