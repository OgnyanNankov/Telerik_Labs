
// if statement

// The code in the scope of if (between the curly brackets) will be executed only if the condition is true.

let condition = true;
 
if (condition) {
  // code here in the brackets will be executed
  // only if condition is true
}
// condition may be a boolean variable, result of boolean operator (comparison) or any method or expression which returns true or false.


// Example

let age = 25;
let under30 = false;

if (age < 30) {
  under30 = true;
}

console.log('Age is under 30: ' + under30);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#basic_if...else_syntax