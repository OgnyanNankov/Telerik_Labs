// Task `Exchange If Greater`

let input = [
    '5',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let a = +gets();
let b = +gets();

// Output the results 

if (a > b) {
  print(`${b} ${a}`);

} else {

  print(`${a} ${b}`);
}

