let input = [
    '-2', 
    '-5',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let inputOne = +gets();
let inputTwo = +gets();
 
// Process the data
let output = inputOne + inputTwo;
 
// Produce an output the system can then check
print(output);


// // ************************************************

// // Output NaN - because there is a space between the two digits

// let input = [
//     '2 2', 
// ];
 
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// let inputOne = +gets(); 

// print(inputOne);


// //  ***********************************************

// // let input = [
// //     '10', 
// //     '10',
// // ];
 
// // let print = this.print || console.log;
// // let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// // // Read the input from the system
// // let lenght = +gets();
// // let width = +gets();
 
// // // Process the data
// // let area = lenght * width;
 
// // // Produce an output the system can then check
// // print(area);
