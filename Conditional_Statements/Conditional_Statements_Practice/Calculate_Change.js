// Task `Calculate Change`

let input = [
    '0.76',
    '1',
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let priceInLeva = +gets();
let paidByCustomer = +gets();

//Define coin denominations
let oneLev = 100;
let fiftySt = 50;
let twentySt = 20;
let tenSt = 10;
let fiveSt = 5;
let twoSt = 2;
let oneSt = 1;

// Process the data
let priceLevaConverted = Math.floor(priceInLeva * 100);                            //0.76*100=76               
let paidByCustomerConverted = Math.floor(paidByCustomer * 100);                    // 1*100=100
let change = Math.floor(paidByCustomerConverted - priceLevaConverted);             // 100 - 76 = 24 - now we have the change amount

// Check each denomination and print how many coins are needed
if (change >= oneLev) {                                                            // Check for 1 lev coins (100 stotinki) - Since 24 < 100, this condition is not met → Skip this step.
    let count = Math.floor(change / oneLev);
    print(`${count} x 1 lev`);
    change = change % oneLev;
}
if (change >= fiftySt) {                                                           // Check 50 stotinki - Since 24 < 50, this condition is not met → Skip this step.
    let count = Math.floor(change / fiftySt);
    print(`${count} x 50 stotinki`);
    change = change % fiftySt;
}
if (change >= twentySt) {                                                           // Check for 20 stotinki coins - Since 24 > 20 - we proceed to calculate
    let count = Math.floor(change / twentySt);                                      // count = Math.floor(24 / 20) → 1  (We can give 1 × 20 stotinki)
    print(`${count} x 20 stotinki`);                                                // print("1 x 20 stotinki")
    change = change % twentySt;                                                     // Update change: change = 24 - (1 × 20) → 4                       // 20 stotinki: 1 x 20 stotinki (remaining = 4)
}
if (change >= tenSt) {                                                              // Check for 10 stotinki coins - Since 4 < 10, this condition is not met → Skip this step.
    let count = Math.floor(change / tenSt);
    print(`${count} x 10 stotinki`);
    change = change % tenSt;
}
if (change >= fiveSt) {                                                              // Check for 5 stotinki coins - Since 4 < 5, this condition is not met → Skip this step.
    let count = Math.floor(change / fiveSt);
    print(`${count} x 5 stotinki`);
    change = change % fiveSt;
}
if (change >= twoSt) {                                                               // Check for 2 stotinki coins - Since 4 > 2 - we proceed to calculate
    let count = Math.floor(change / twoSt);                                          // count = Math.floor(4 / 2) → 2  (We can give 2 × 2 stotinki)
    print(`${count} x 2 stotinki`);                                                  // print("2 x 2 stotinki")
    change = change % twoSt;                                                         // change = 4 - (2 × 2) → 0                                   // 2 stotinki: 2 x 2 stotinki (remaining = 0)
}
if (change >= oneSt) {                                                               // Check for 1 stotinka coins - Since change is now 0, this condition is not met → Skip this step.
    let count = Math.floor(change / oneSt);
    print(`${count} x 1 stotinka`);
    change = change % oneSt;
}

// Why we need the `change = change % ....;` line: Each time we subtract count * coinValue, we reduce the change amount so the program doesn't count the same money again.
// Without change -= count * coinValue, the program would keep checking the same amount instead of reducing it. That means it might miscalculate the number of coins needed.

// Another solution: 
// Read the price and amount paid from console, and convert them to Number data type
// let price = Number(gets());
// let amountPaid = Number(gets());

// // Calculate the change to be returned in stotinki (100 stotinki per 1 lev)
// let change = Math.round((amountPaid - price) * 100); // Round the value of change to avoid precision errors

// Calculate the number of each denomination required for giving the change
// let oneLev = 0;
// let fiftyStotinki = 0;
// let twentyStotinki = 0;
// let tenStotinki = 0;
// let fiveStotinki = 0;
// let twoStotinki = 0;
// let oneStotinka = 0;

// if (change >= 100) {                                          // If there is at least 1 lev worth of change
//     oneLev = Math.floor(change / 100);                        // Divide the change by 100 to get the number of leva
//     change %= 100;                                            // Take the modulus of change with 100 to get the remaining change in stotinki. Can be represented: change = change % 100;
// }
// if (change >= 50) {                                           // If there is at least 50 stotinki worth of change
//     fiftyStotinki = Math.floor(change / 50);                  // Divide the change by 50 to get the number of 50 stotinki coins
//     change %= 50;                                             // Take the modulus of change with 50 to get the remaining change in stotinki
// }
// if (change >= 20) {                                           // If there is at least 20 stotinki worth of change
//     twentyStotinki = Math.floor(change / 20);                 // Divide the change by 20 to get the number of 20 stotinki coins
//     change %= 20;                                             // Take the modulus of change with 20 to get the remaining change in stotinki
// }
// if (change >= 10) {                                           // If there is at least 10 stotinki worth of change
//     tenStotinki = Math.floor(change / 10);                    // Divide the change by 10 to get the number of 10 stotinki coins
//     change %= 10;                                             // Take the modulus of change with 10 to get the remaining change in stotinki
// }
// if (change >= 5) {                                            // If there is at least 5 stotinki worth of change
//     fiveStotinki = Math.floor(change / 5);                    // Divide the change by 5 to get the number of 5 stotinki coins
//     change %= 5;                                              // Take the modulus of change with 5 to get the remaining change in stotinki
// }
// if (change >= 2) {                                            // If there is at least 2 stotinki worth of change
//     twoStotinki = Math.floor(change / 2);                     // Divide the change by 2 to get the number of 2 stotinki coins
//     change %= 2;                                              // Take the modulus of change with 2 to get the remaining change in stotinki
// }
// if (change === 1) {                                           // If there is exactly 1 stotinka worth of change
//     oneStotinka = 1;
// }

// // Output the required denominations on a new line, ordered from highest to lowest
// if (oneLev > 0) {
//     console.log(oneLev + " x 1 lev");
// }
// if (fiftyStotinki > 0) {
//     console.log(fiftyStotinki + " x 50 stotinki");
// }
// if (twentyStotinki > 0) {
//     console.log(twentyStotinki + " x 20 stotinki");
// }
// if (tenStotinki > 0) {
//     console.log(tenStotinki + " x 10 stotinki");
// }
// if (fiveStotinki > 0) {
//     console.log(fiveStotinki + " x 5 stotinki");
// }
// if (twoStotinki > 0) {
//     console.log(twoStotinki + " x 2 stotinki");
// }
// if (oneStotinka > 0) {
//     console.log(oneStotinka + " x 1 stotinka");
// }