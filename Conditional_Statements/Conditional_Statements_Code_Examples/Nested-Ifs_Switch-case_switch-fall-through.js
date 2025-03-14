
// Nested Ifs 

let first = 13;
let second = 17;

if (first === second) {
  console.log('This two numbers are equal.');
} else {
  if (first > second) {
    console.log('The first number is greater than the second.');
  } else {
    console.log('The second number is greater than the first.');
  }
}

//  Nested Switch-case

let day = 6;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;

  default:
    console.log('Invalid day');
    break;
}


// Nested Switch Fall-Through

let month = 5;

console.log('Remaining months to the end of the year:')
switch (month) {
  case 1:
    console.log('January');
  case 2:
    console.log('February');
  case 3:
    console.log('March');
  case 4:
    console.log('April');
  case 5:
    console.log('May');
  case 6:
    console.log('June');
  case 7:
    console.log('July');
  case 8:
    console.log('August');
  case 9:
    console.log('September');
  case 10:
    console.log('October');
  case 11:
    console.log('November');
  case 12:
    console.log('December');

  default:
    break;
}

// Output is:
// Remaining months to the end of the year:
// May         - starting from the fifth position
// June
// July
// August
// September
// October
// November
// December