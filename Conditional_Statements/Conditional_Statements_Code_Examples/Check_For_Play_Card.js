// Task `Check for Play `

let input = [
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let Sign = gets();

// Output the results 

if (Sign == 2 || Sign == 3 || Sign == 4 || Sign == 5 || Sign == 6 || Sign == 7 || Sign == 8 || Sign == 9 || Sign == 10 || Sign == `J` || Sign == `Q` || Sign == `K` || Sign == `A`) {
    print(`yes`)
} else {
    print(`no`)
}


// Much better solution 2

let Sign2 = gets();

if (
    (Sign2 >= 2 && Sign <= 10) ||
    Sign2 == "J" ||
    Sign2 == "Q" ||
    Sign2 == "K" ||
    Sign2 == "A"
) {
    print("yes");
} else {
    print("no");
}

