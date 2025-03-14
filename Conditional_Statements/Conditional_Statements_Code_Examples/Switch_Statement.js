
// Switch Statement

// The switch statement is used to perform different actions based on different conditions.

// switch statement flow

// The switch statement begins with the evaluation of a specific expression.
// If a case label matches the evaluated expression, the corresponding statement is executed.
// If no case labels match the expression:
// The default case is executed if it's provided.
// If there's no default case, control is transferred to the end of the switch statement.
// Example

let dayOfWeek = 'Monday'; // or 'Tuesday', 'Wednesday', ...
 
switch (dayOfWeek.toLowerCase()) {
  case 'monday':
    console.log('Oh, well...'); break;
  case 'tuesday':
    console.log('At least it is not Monday'); break;
  case 'wednesday':
    console.log('Getting better'); break;
  case 'thursday':
    console.log('Even better'); break;
  case 'friday':
    console.log('Two more to go'); break;
  case 'saturday':
    console.log('Saturdays rule'); break;
  case 'sunday':
    console.log('Monday tomorrow?'); break;
  default:
    console.log('Looking for bugs?')
}