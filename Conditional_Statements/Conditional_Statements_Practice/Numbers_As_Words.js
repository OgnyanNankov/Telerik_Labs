// Task `Numbers as words`

let input = [
    '0',
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let number = +gets();

// Output the results 
if (number === 0) {                                             // Ако числото е точно 0, директно отпечатваме думата "zero" и приключваме
    print("zero");
} else {

    // Инициализираме променливи:
    let ones = "", tens = "", hundreds = "", output = "";      // `ones` ще държи цифрата на единиците (1–9), `tens` на десетиците (2–9), `hundreds` на стотиците (1–9),`output` е крайният резултат като текст  

    hundreds = Math.floor(number / 100);                       // Намираме стотиците чрез цяло деление на 100
    number %= 100;                                             // Премахваме стотиците, за да останат само десетиците и единиците

    tens = Math.floor(number / 10);                            // Намираме десетиците чрез цяло деление на 10
    number %= 10;                                              // Премахваме десетиците, за да остане само цифрата на единиците

    ones = number;                                             // Записваме оставащото число в променливата ones

    if (hundreds > 0) {                                        // Ако има стотици (т.е. цифрата на стотиците е поне 1)

        switch (hundreds) {                                    // Изписваме съответната дума за стотиците
            case 1: output += "one hundred"; break;
            case 2: output += "two hundred"; break;
            case 3: output += "three hundred"; break;
            case 4: output += "four hundred"; break;
            case 5: output += "five hundred"; break;
            case 6: output += "six hundred"; break;
            case 7: output += "seven hundred"; break;
            case 8: output += "eight hundred"; break;
            case 9: output += "nine hundred"; break;
        }

        if (tens > 0 || ones > 0) {                             // Ако след стотиците има десетици или единици, добавяме " and "
            output += " and ";
        }
    }

    if (tens === 1) {                                          // Ако десетиците са 1, значи числото е между 10 и 19 — използваме специални думи
        switch (ones) {
            case 0: output += "ten"; break;
            case 1: output += "eleven"; break;
            case 2: output += "twelve"; break;
            case 3: output += "thirteen"; break;
            case 4: output += "fourteen"; break;
            case 5: output += "fifteen"; break;
            case 6: output += "sixteen"; break;
            case 7: output += "seventeen"; break;
            case 8: output += "eighteen"; break;
            case 9: output += "nineteen"; break;
        }
    } else {

        if (tens > 1) {                                       // Ако десетиците са от 2 до 9 — стандартен случай (20, 30, 40 и т.н.)
            switch (tens) {
                case 2: output += "twenty"; break;
                case 3: output += "thirty"; break;
                case 4: output += "forty"; break;
                case 5: output += "fifty"; break;
                case 6: output += "sixty"; break;
                case 7: output += "seventy"; break;
                case 8: output += "eighty"; break;
                case 9: output += "ninety"; break;
            }
            if (ones > 0) {                                   // Ако има и единици, добавяме интервал между десетиците и единиците      
                output += " ";
            }
        }

        if (ones > 0 || output === "") {                     // Ако има единици или ако output е все още празен (пример: 5)
            switch (ones) {
                case 1: output += "one"; break;
                case 2: output += "two"; break;
                case 3: output += "three"; break;
                case 4: output += "four"; break;
                case 5: output += "five"; break;
                case 6: output += "six"; break;
                case 7: output += "seven"; break;
                case 8: output += "eight"; break;
                case 9: output += "nine"; break;
            }
        }
    }

    // Отпечатваме крайния текстов резултат
    print(output);
}
