let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let number = +gets();

// Output the results
switch (number) {
    case 0:
        print('zero');
        break;
    case 1:
        print('one');
        break;
    case 2:
        print('two');
        break;
    case 3:
        print('three');
        break;
    case 4:
        print('four');
        break;
    case 5:
        print('five');
        break;
    case 6:
        print('six');
        break;
    case 7:
        print('seven');
        break;
    case 8:
        print('eight');
        break;
    case 9:
        print('nine');
        break;
    default:
        print('not a digit')
}

// Important: The main thing preventing your program from working correctly is a type mismatch between the value you're switching on and the case labels. 
// You're converting the input to a number with +gets(), but your case statements are using strings like '0', '1', etc. This means the cases won't match the numeric input.
// Programming Concept: In JavaScript, it's important that the data types of the value you're checking and the case labels match. 
// A number (0) is not the same as a string ('0'), so the switch cases won't trigger as expected.
// Hint to Fix: Try keeping the input as a string by removing the + before gets(). 
// This way, the value you're switching on and your case labels will both be strings, and the cases should match correctly. 
// Also, don’t forget to add a default case to handle inputs that aren’t valid digits!

