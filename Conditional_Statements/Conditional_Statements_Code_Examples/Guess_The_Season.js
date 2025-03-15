// Task `Guess The Season`

let input = [
    'June',
    '24',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let month = gets();
let date = +gets();

// Output the results
if (
    (month === "March" && date >= 20) ||               // We must include march and start from 20th when Spring starts 
    (month === "April" || month === "May") ||          // No need to state the date periods for the full months, as in any case 1st-31st day will be spring. E.G. no need of (date >= 1 && date <= 31) && month == `January`
    (month === "June" && date <= 20)
) {
    print(`Spring`);
} else if (
    (month === "June" && date >= 21) ||
    (month === "July" || month === "August") ||
    (month === "September" && date <= 21)
) {
    print(`Summer`);
} else if (
    (month === "September" && date >= 22) ||                  // Here, we must start checkup from from 22th as Autumn starts on September 22
    (month === "October" || month === "November") ||
    (month === "December" && date <= 20)
) {
    print(`Autumn`);
} else if (
    (month === "December" && date >= 21) ||
    (month === "January" || month === "February") ||
    (month === "March" && date <= 19)
) {
    print(`Winter`);
} else {

}

// Key Changes:

// Spring:
// Starts on March 20 (month === "March" && date >= 20).
// Ends on June 20 (month === "June" && date <= 20).

// Summer:
// Starts on June 21 (month === "June" && date >= 21).
// Ends on September 21 (month === "September" && date <= 21).

// Autumn:
// Starts on September 22 (month === "September" && date >= 22).
// Ends on December 20 (month === "December" && date <= 20).

// Winter:
// Starts on December 21 (month === "December" && date >= 21).
// Ends on March 19 (month === "March" && date <= 19).

// Final Notes:
// The new conditions properly check for the specific start and end dates for each season.
// The if-else structure now covers all the seasons without any overlap.
// The months are checked directly, and the correct date ranges are respected.
// This should now correctly classify the season for any given input month and day!