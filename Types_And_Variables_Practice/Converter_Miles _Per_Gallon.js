// Task 'Converter Miles Per Gallon':

let input = [
    '20',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let milesPerGallon = +gets();

// Process the data
let gallon = 1;
let litre = gallon * 4.54;              //1 gallon = 4.54 litres
let km = milesPerGallon * 1.6;          //1 mile = 1.6 km.
let litrePerKm = litre / km;
let litrePerHour = litrePerKm * 100;

print(`${Math.floor(litrePerHour)} litres per 100 km`);
