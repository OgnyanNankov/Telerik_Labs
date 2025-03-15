// Task `Guess The Season` - solution with Switch-case

let input = [
    'June',
    '24',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// / Read the month and day from the input
let month = gets();
let day = +gets();

// Output the results
switch (month) {
    case 'March':
        if (day >= 20) {
            console.log('Spring');
        } else {
            console.log('Winter');
        }
        break;
    case 'April':
    case 'May':
        console.log('Spring');
        break;
    case 'June':
        if (day <= 20) {
            console.log('Spring');
        } else {
            console.log('Summer');
        }
        break;
    case 'July':
    case 'August':
        console.log('Summer');
        break;
    case 'September':
        if (day <= 21) {
            console.log('Summer');
        } else {
            console.log('Autumn');
        }
        break;
    case 'October':
    case 'November':
        console.log('Autumn');
        break;
    case 'December':
        if (day <= 20) {
            console.log('Autumn');
        } else {
            console.log('Winter');
        }
        break;
    case 'January':
    case 'February':
        console.log('Winter');
        break;
}

