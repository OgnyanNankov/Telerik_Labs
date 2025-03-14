// Task `Phone Bill`

let input = [
    '31',
    '115',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let textMessagesTotal = +gets();
let minutesTotal = +gets();
let monthlyBill = 12;

// Calculate the additional messages and minutes
let additionalMessages = Math.max(textMessagesTotal - 20, 0);          // Why we have to use Math.max - explanatiuon below
let additionalMinutes = Math.max(minutesTotal - 60, 0);                // Why we have to use Math.max - explanatiuon below

// Calculate the additional amounts without taxes
let amountAdditionalMessages = additionalMessages * 0.06;
let amountAdditionalMinutes = additionalMinutes * 0.10;

// Calculate the tax for both
let taxMessages = amountAdditionalMessages * 0.2;
let taxMinutes = amountAdditionalMinutes * 0.2;
let taxTotal = taxMessages + taxMinutes;

// Calculate the total amount
let amountTotal = amountAdditionalMessages + amountAdditionalMinutes + taxTotal;
let totalBill = amountTotal + monthlyBill;

// Output the results with correct formatting
if (additionalMessages > 0 || additionalMinutes > 0) {                                                 // We use || because it should work if at least one of the two is true
    print(`${additionalMessages} additional messages for ${amountAdditionalMessages.toFixed(2)} levas`);
    print(`${additionalMinutes} additional minutes for ${amountAdditionalMinutes.toFixed(2)} levas`);
    print(`${taxTotal.toFixed(2)} additional taxes`);
    print(`${totalBill.toFixed(2)} total bill`);
} else {
    print(`0 additional messages for 0.00 levas`);
    print(`0 additional minutes for 0.00 levas`);
    print(`0.00 additional taxes`);
    print(`12.00 total bill`);
}

// Hey there! Great job getting started on the problem. I noticed that when calculating additional messages and additional minutes, your code subtracts the free limits directly.
// However, this can sometimes result in negative numbers if the user doesn’t exceed the free limits.
// To fix this, think about ensuring that the additional charges don’t go below zero.
// You can use a conditional statement or a function like Math.max to set any negative additional messages or minutes to zero.
// This way, your tax calculation and total bill will be accurate. Keep up the awesome work—you’re on the right track!

// Why we have to use Math.max: Let me show you an example of how the values for additional messages and minutes can go below zero before using Math.max().
// Without Math.max() (Allowing negative values):
// Let's say the free limit for text messages is 20 and for minutes is 60. If the user has fewer than the free limits, subtracting the free limit would result in negative values.
// Example 1: Fewer Messages Than the Free Limit
// Total Messages: 15 (less than the free limit of 20)
// Free Limit: 20 messages
// Calculation: 15 - 20 = -5
// Without Math.max(), the result of the subtraction would be -5, which doesn't make sense in a billing context (you can't have negative additional charges).
// Example 2: Fewer Minutes Than the Free Limit
// Total Minutes: 50 (less than the free limit of 60)
// Free Limit: 60 minutes
// Calculation: 50 - 60 = -10
// Again, without Math.max(), the result would be -10, which also doesn't make sense in the context of additional charges.