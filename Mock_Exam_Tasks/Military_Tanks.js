// Task 'Military Tanks'

    let input = [
        'LLRDLRRRDLDRRL'
    ];

    let print = this.print || console.log;
    let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

    let commands = gets().split('');                                          // Четем командния стринг и го превръщаме в масив от символи: 'LLRDLRRRDLDRRL' → ['L', 'L', 'R', 'D', 'L', 'R', 'R', 'R', 'D', 'L', 'D', 'R', 'R', 'L']
    let x = 0;                                                                // Начална позиция: координати (x, y) = (0, 0)
    let y = 0;
 
    for (i = 0; i < commands.length; i++) {                                   // Основен цикъл – обхождане на всяка команда. Долу - Проверки за движение    

        if (commands[i] === 'U') {                                            // 'U' → движение нагоре → y += 1
            y += 1;
        }
        if (commands[i] === 'R') {                                            // 'R' → надясно → x += 1
            x += 1;
        }
        if (commands[i] === 'D') {                                            // 'D' → надолу → y -= 1
            y -= 1;
        }
        if (commands[i] === 'L') {                                            // 'R' → надясно → x += 1
            x -= 1;
        }
    }

    console.log(`(${x}, ${y})`)


// Какво се иска?
// Дадена е поредица от команди за движение на танк върху координатна равнина:
// R – надясно → +1 по x
// L – наляво → -1 по x
// U – нагоре → +1 по y
// D – надолу → -1 по y
// Започваме от (0, 0) и трябва да определим крайната позиция на танка.


// Military scientists are training battle tanks using artificial intelligence.
// The first lesson is to teach them to move across the (x,y) - plane.
// They give them a sequence of moves and observe whether the tanks get to the correct (x, y) position on the field.
// This sequence is represented by string, and the character at position i represents the tank’s i-th move.
// There are several commands – R – moves right, L – moves left, U – moves up and D – moves down.
// To help the scientists, you have to write a program that collects the learning results of the tanks.
// Input: Read from the standard input:
// There is one line of input, a string that contains tank's sequence of moves, represented by capital letters - R, L, D, U, no intervals:
// RLDULLR
// Output: Print to the standard output:
// One line of output - tank's coordinates -> (-1, 0)
// Please note there is a space between the comma and the second coordinate.
// Sample Tests
// Input
// DU
// Output
// (0, 0)
// Explanation
// The robot moves down at position (0, -1), and then up at (0, 0).