// Continue:

// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration
// Continue е доста подобен на брейк в това, че той също се използва вътре в циклите, само че различно от брейк той не спира работата на цикъла.
// Неговата работа е по-скоро да прескача конкретното изпълнение до следващата му итерация. Например, това, което виждаме на слайда е един фор цикъл, който ще върти до десет и потенциално ще принтира променливата ай.
// Когато обаче кажем, че ай е кратно на три, което е при три, шест и девет, имаме кънтиню стейтмънт, което реално ще прескочи конкретната итерация на цикъла към следващата.

for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
// Expected output: 
// 1
// 2
// 4
// 5
// 7
// 8

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue

// *****************

// Break: 

// Брейк е начин по който ние да прекратим работата на цикъла моментално щом ние напишем Break стейтмънта, което ще ни позволи да излезем, дори той да бъде безкраен.
// Breaking out the loop: Every loop could be stopped at any given time
// When we meet a certain condition, we could break the loop
// Using the break keyword
let i = 1;
while (i <= 12) {
    console.log(i);
    i++;
    if (i === 4) {
        break; // Stop the loop at a certain point
    }
}
// В нормалната ситуация, това би извършило всичките дванадесет завъртания, но този път, отдолу имаме един иф стейтмънт, който ще провери дали ай е равен на четири и тогава ще има брейк.
// Това, което брейк ще направи за нас е, че когато ай стане равен на четири цикълът ще преключи работа.
// Това означава, че единствените цикления, които ще се случат, ще бъдат между едно и четири, а останалите между пет и дванадесет няма да се случат никога.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break