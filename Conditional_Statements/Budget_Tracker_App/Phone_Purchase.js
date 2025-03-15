// Requirements
// For our project we will need to check if the user savings are enough to buy a new phone based on its price. Also based on a certain user rating we should be able to define the user credit raditng. Write program that:

// Comparisons: Compare a user's savings against the cost of a new phone and log whether they can afford it.
// Conditional Logic: Implement a simple logic to determine and log the message based on the user's savings.
// Switch Statement: Given a user rating (1-5), use a switch statement to log a message ranging from "Excellent" to "Poor", including a default case for invalid ratings.
// Think of a way to upgrade the app:

// Implement a simple security feature that checks if a transaction (either income or expense) exceeds a certain threshold and, if so, requires a 'confirmation' (simulated by entering a specific string or number).
// This could teach conditional logic's use in real-world scenarios like fraud detection or spending alerts.

// Примерно решение

 
// Declaring variables to hold the savings and the cost of the new phone
let savings = 500;
let costOfNewPhone = 600;
 
// Using conditional statements to define if the user can afford the phone
if (savings >= costOfNewPhone) {
    console.log("You can buy the phone!");
} else {
    console.log("You need to save more to buy the phone.");
}
 
// Declaring a variable to hold the user rating
let userRating = 3; // Example rating
 
// Using switch statement to define the user credit rating
switch (userRating) {
    case 5:
        console.log("Excellent");
        break;
    case 4:
        console.log("Good");
        break;
    case 3:
        console.log("Average");
        break;
    case 2:
        console.log("Below Average");
        break;
    case 1:
        console.log("Poor");
        break;
    default:
        console.log("Invalid rating");
}
 