// When more than one number is on the same line of input:

let input = [
  '1 2 3',
  '2, 4, 6',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let numbers1 = gets().split(' ').map(Number); // [1, 2, 3]
let numbers2 = gets().split(', ').map(Number); // [2, 4, 6]

// Called arrays, more on this later