// Task 'Circle Perimeter and Area':

let input = [
    '2',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let radius = +gets();

// Process the data
let perimeter = 2 * Math.PI * radius;     // Circle Perimeter Formula is 'P = 2πr':
let area = Math.PI * radius ** 2;        // Circle Area Formula is 'A = π r²', so we ave to use radius**=2 - how exponentiation works /степенуване на числа

// Produce an output the system can then check
print(perimeter.toFixed(2));
print(area.toFixed(2));

