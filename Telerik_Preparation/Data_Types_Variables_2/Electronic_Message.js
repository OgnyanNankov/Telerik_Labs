// Electronic message

let input = [
    'Tempera#### na @#$ata 23 grad#%&.',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let n = gets();                                                                    // Четем входа
n = n.slice(0, -1);                                                                // Премахваме последната точка (.) от текста, тъй като тя не е счупен символ по условие.

let maxLenght = 0;                                                                 // currentLenght: текуща последователност от счупени символи.
let currentLenght = 0;                                                             // maxLenght: най-дългата такава последователност досега.

for (let i = 0; i < n.length; i++) {                                               // Обхождаме всеки символ от текста и го записваме като char.
    let char = n[i];

    if (
        !(/[a-zA-Z0-9 ]/.test(char))                                               // Проверяваме дали char НЕ е: буква (a-z, A-Z), цифра (0-9), интервал ( ). Коментар 1: 
    ) {
        currentLenght++;                                                           // Увеличаваме currentLenght.
        if (currentLenght > maxLenght) {
            maxLenght = currentLenght;                                             // Ако това е най-дългата серия досега → обновяваме maxLenght.
        }
    } else {
        currentLenght = 0;                                                         //  Ако попаднем на нормален символ → нулираме текущата дължина.
    }
}

console.log(maxLenght);

// Логиката в 3 стъпки (точно както си описал):
// 1. Обхождаме низа символ по символ:
// 2. Проверяваме дали символът е „счупен“ – т.е. не е буква, цифра или интервал:
// -  Ако е счупен → увеличаваме текущата дължина currentLenght.
// -  Ако currentLenght надвиши maxLenght → обновяваме максимума.
// Ако срещнем нормален символ: Нулираме currentLenght, защото поредицата е прекъсната.
// Ето 2 малки уточнения:
// Изрязваме точката накрая с .slice(0, -1), защото тя не участва в задачата (по условие тя не е счупена).
// Регулярният израз /[a-zA-Z0-9 ]/ проверява за позволени символи. С ! обръщаме логиката, за да търсим непозволени (счупени).

// Коментар 1:  Използваме RegExp.test() с !, за да уловим счупените символи.Използваме RegExp.test() с !, за да уловим счупените символи.
// https://www.youtube.com/watch?v=sXQxhojSdZM
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions


// An electronic message board at the beach in Sunny beach shows information about the weather and the temperature of the air and the seawater.
// The messages contain small and capital Latin letters, digits and spaces. At the end of the information there is a full-stop.
// Every day Loni the elephant checks the weather conditions from the message board.
// One day Loni finds out that the board is broken and the message contains other characters, different from the regular.
// Curious as he is, he wants to find out how long is the longest sequence of broken characters on the board.
// Help him write a program, which reads the message and produces the maximum length of sequential broken characters.
// Input
// On the first and only line of the standard input, there will be a text ending with full-stop .
// Output
// Print to the standard output a number - the length of the longest sequence of broken characters (different from letter, digit, space).
// Constraints
// The full-stop will always be at the end of the message and it does not get broken. The message always has exactly one full-stop. The message will always be shorter than 1000 characters.
// Examples
// Input
// Tempera#### na @#$ata 23 grad#%&.
// Output
// 4