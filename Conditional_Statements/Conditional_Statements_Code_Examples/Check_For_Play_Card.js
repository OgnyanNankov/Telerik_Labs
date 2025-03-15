// Task `Check for Play Card`

let input = [
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let cardSign = gets();

// Output the results 

if (cardSign == 2 || cardSign == 3 || cardSign == 4 || cardSign == 5 || cardSign == 6 || cardSign == 7 || cardSign == 8 || cardSign == 9 || cardSign == 10 || cardSign == `J` || cardSign == `Q` || cardSign == `K` || cardSign == `A`) {
    print(`yes`)
} else {
    print(`no`)
}


// Much better solution 2

let cardSign2 = gets();

if (
    (cardSign2 >= 2 && cardSign <= 10) ||
    cardSign2 == "J" ||
    cardSign2 == "Q" ||
    cardSign2 == "K" ||
    cardSign2 == "A"
) {
    print("yes");
} else {
    print("no");
}

