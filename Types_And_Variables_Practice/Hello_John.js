// Task Hello, John!

// 1. First solution with concatenation, using + +: 

let input = [
    'John', 
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstName = gets();

print('Hello, ' + firstName + '!');


// Second solution with concatenation, using ${} (dollar sign and curly braces):


// let input = ['John'];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let firstName = gets();

// print(`Hello, ${firstName}!`);










