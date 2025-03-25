// Requirements

// Write program that:
// Simulate Daily Transactions: Assume a fixed daily income and a fixed daily expense. These should be represented as variables.
// Calculate Total Income: Use a loop to simulate adding this daily income to a total income variable over a set number of days.
// Calculate Total Expenses: Implement a separate loop to simulate adding daily expenses to a total expense variable over the same number of days.
// Determinate Balance: Calculate the balance by subtracting the total expenses from the total income. Log the total income, total expenses, and balance with descriptive messages.

// Think of a way to upgrade the app:
// Create a loop that identifies the largest transaction in the set of daily transactions and logs it separately as the "Transaction of the Day." 
// By doing this you will be introduced to the concept of iterating through data to find maximum or minimum values, a common task in data analysis.

// Примерно решение

// Initialize variables to simulate accumulated totals
let totalDays = 5;                                   // Simulate income and expenses over 5 days
let dailyIncome = 200;                               // Example daily income
let dailyExpense = 50;                               // Example daily expense

// Create variables for the totalIncome and totalExpense
let totalIncome = 0;
let totalExpense = 0;

// Loop to simulate adding income for each day
for (let day = 1; day <= totalDays; day++) {
    totalIncome += dailyIncome;                       // Add daily income to total
}

// Loop to simulate adding expenses for each day
for (let day = 1; day <= totalDays; day++) {
    totalExpense += dailyExpense;                     // Add daily expense to total
}

// Create a balance variable
let balance = totalIncome - totalExpense;

// Using console.log() to notify the user of it income, expenses and balance
console.log(`Total Income over ${totalDays} days: $${totalIncome}`);
console.log(`Total Expenses over ${totalDays} days: $${totalExpense}`);
console.log(`Balance: $${balance}`);