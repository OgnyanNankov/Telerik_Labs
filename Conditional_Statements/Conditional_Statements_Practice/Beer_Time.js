// Task `Beer Time`

let input = [
    '1:00 PM',
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let time = gets().trim();                                                                      // Trim removes any leading/trailing spaces - ensures no extra spaces (leading or trailing)

// Process the data                                                                            // Extract hours, minutes, and AM/PM
let hours = Number(time.substring(0, time.indexOf(":")));                                      // ime.indexOf(":") finds the position of : in the string. In "1:00 PM", the colon : is at index 1. time.substring(0, time.indexOf(":")) extracts everything from index 0 (start) to just before : (index 1).
let minutes = Number(time.substring(time.indexOf(":") + 1, time.length - 3));                  // time.indexOf(":") + 1 gives the starting position for minutes, time.length - 3 sets the endpoint. Time.length = 7 ( full length of "1:00 PM"). 7 - 3 = 4, meaning extraction stops at index 4 (before P in "PM").
let amPm = time.substring(time.length - 2);                                                    // time.length - 2 starts the extraction 2 characters before the end of the string, which is e.x. "PM"

// Output the results
// Validate the input time format
if (isNaN(hours) || isNaN(minutes) || hours < 1 || hours > 12 || minutes < 0 || minutes > 59 || (amPm !== "AM" && amPm !== "PM")) {  // If hours or minutes are not numbers → invalid. If hours is not between 1-12 → invalid. If minutes is not between 0-59 → invalid.If "AM" or "PM" is missing → invalid.

    print("invalid time");
} else {
    // Determine Beer Time or Non-Beer Time
    if ((amPm === "PM" && hours >= 1 && hours <= 11) ||                                        // 1:00 PM - 11:59 PM - afternoon and night
        (amPm === "AM" && (hours === 12 || hours <= 2))) {                                     // 12:00 AM - 2:59 AM - midnight to early morning
        print("beer time");
    } else {
        print("non-beer time");                                                                // 3:00 AM - 11:59 AM (morning) and 12:00 PM - 12:59 PM (noon)
    }
}

// Why using trim()?
// Trim removes any leading/trailing spaces - ensures no extra spaces (leading or trailing) interfere with processing -Ensures
//  Using .trim() is a good practice to ensure robustness, especially if the input is read from a user or an external system where spaces may accidentally be included.
// If you are sure the input is always perfectly formatted, it would work without .trim(), but it's safer to keep it.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    
// indexOf()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://www.youtube.com/watch?v=VoY6AkDZjZ4
// https://www.youtube.com/watch?v=oIKMsCZKC7g

// Key Fixes:
// Ensured valid number parsing: isNaN(hours) || isNaN(minutes) prevents parsing errors.
// Simplified conditions:
// Beer time:
// 1:00 PM - 11:59 PM (PM)
// 12:00 AM - 2:59 AM (AM)
// Non-beer time:
// 3:00 AM - 11:59 AM (AM)
// 12:00 PM - 12:59 PM (PM)
// Handles edge cases:
// trim() on input to avoid whitespace issues.
// Checked whether hours and minutes are valid before processing.
// Test Cases:
// Input	Expected Output
// 1:00 PM	beer time
// 12:00 PM	non-beer time
// 3:00 AM	non-beer time
// 2:59 AM	beer time
// 11:59 PM	beer time
// 12:01 AM	beer time
// 13:00 PM	invalid time
// 9:61 AM	invalid time