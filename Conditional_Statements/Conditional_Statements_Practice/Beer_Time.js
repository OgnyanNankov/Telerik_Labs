// Task `Beer Time`

let input = [
    '1:00 PM',
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let time = +gets();

// Process the data
let hours = Number(time.substring(0, time.indexOf(":")));
let minutes = Number(time.substring(time.indexOf(":") + 1, time.length - 3));
let amPm = time.substring(time.length - 2);

if (hours > 12 || minutes > 59 || (amPm !== "AM" && amPm !== "PM")) {
    print("invalid time");
} else if (
    (hours >= 3 &&
        hours < 12 &&
        minutes >= 0 &&
        minutes <= 59 &&
        amPm === "AM") ||
    (hours === 12 && minutes >= 0 && minutes <= 59 && amPm === "PM")
) {
    print("non-beer time");
} else if (
    (hours >= 1 &&
        hours < 12 &&
        minutes >= 0 &&
        minutes <= 59 &&
        amPm === "PM") ||
    ((hours === 12 || hours === 1 || hours === 2) &&
        minutes >= 0 &&
        minutes <= 59 &&
        amPm === "AM")
) {
    print("beer time"); 
}



It looks like the core issue lies in how the conditional statements are structured to determine "beer time" versus "non-beer time." 
Specifically, there might be some overlap or gaps in the logical operators (&& and ||) that prevent certain times from being classified correctly.
A helpful tip would be to carefully review how you're combining these operators to match the exact time ranges defined in the problem. 
Make sure that each condition precisely captures the start and end points of "beer time" and "non-beer time." 
Maybe try simplifying the conditions or breaking them down to ensure all scenarios are covered. 

A beer time is after 1:00 PM (incl.) and before 3:00 AM (excl.)    1:000 -2:59
Write a program that accepts a time and then prints beer time or non-beer time according to the definition above or invalid time if the time cannot be parsed

Hint: Research sub-string functions for string data type.

Input
On a single line you will receive time in the format “hh:mm tt” (an hour in range [01...12], a minute in range [00…59], and AM / PM designator)
Output
Print "beer time", "non-beer time" or "invalid time"
Sample tests
Input
1:00 PM
Output
beer time