// Task Int, Double, String

let input = [
    'text',
    'gosho',
]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let first = gets();
let second = gets();

// Output the results 
    if (first == `integer`) {
        print(Number(second) + 1);                   // Just add 1 and print the integer value
    } else if (first == `real`) {
        print((Number(second) + 1).toFixed(2));      // Add 1 and print with 2 decimal places
    } else if (first == `text`) {
        print(`${second}*`)                         // For text, append '*' to the string
    }

// We must not use .toFixed(2) for both integer and real (or double) types:
// For integers: The output should not have any decimal places after adding 1. 
// So using .toFixed(2) makes the integer output display like a floating-point number with two decimal places, which is not what you want for integers.
// For real/double numbers: You do want to ensure that the number has exactly two decimal places.

// Solution:
// For integer types: Add 1 and print it directly (no need for .toFixed(2)).
// For real types: Add 1 and print it using .toFixed(2) to ensure it has two decimal places.

// Key Changes:
// Integer Handling: For integer, the number is increased by 1 and printed without formatting to two decimal places.
// Real Handling: For real, .toFixed(2) is applied to ensure two decimal places.
// Text Handling: For text, the string gets an asterisk * appended to it.

        //    ******************** All Types Explanation ********************** 
// 1. Integer
// Definition: An integer is a whole number, meaning it does not have any fractional or decimal part.
// Characteristics:Can be positive, negative, or zero.No decimal points.
// Common in counting or cases where fractional parts don't make sense (like counting people, objects, etc.).
// Examples: -5, 0, 12, 1000

// 2. Real/Double (Floating-Point Numbers)
// Definition: A real number (or double in some programming languages) is a number that can have a fractional part (decimal points).
// Characteristics: Can be positive, negative, or zero.Has decimal points (e.g., 1.23, -3.14).
// More suitable for calculations where precision is needed with fractional values (e.g., measurements, financial calculations).
// Difference Between Real and Double:
// Both are used to represent floating-point numbers, but a double typically refers to a double-precision floating-point number (using more memory to store more precise values). 
// The term "real" is more of a general term for any floating-point number (sometimes single precision, depending on the system).
// In some programming languages, double is used when you need greater precision.
// Examples: 3.14, -0.99, 100.5, -1000.01

// 3. Text (String)
// Definition: Text (or string) represents a sequence of characters, such as words, sentences, or any alphanumeric combination.
// Characteristics:Can contain letters (e.g., "apple"), numbers as characters (e.g., "123"), or any special characters (e.g., "@#%$").
// It does not perform mathematical operations directly (like addition or subtraction) unless you convert it to another type (like integer or real).
// Text is used for storing words, names, descriptions, or any data that is not numerical.

// In Summary:
// Integer: Whole numbers, no decimal points. Can be positive, negative, or zero. No decimal part. Ex: -5, 0, 42 
// Real/Double: Numbers with decimal points, used for more precise values. Can be positive, negative, or zero. Includes decimals. Ex. 3.14, -2.5, 100.25
// Text: A sequence of characters, not numerical but used to store words and symbols. Stores words, numbers as text, or special characters. Ex. "Hello", "123", "abc123", "Hello World!"