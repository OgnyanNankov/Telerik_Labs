let input = [
    '21 42 50 126 300'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(' ').map(Number);
let sum = 0;

// Намираме сумата само на числата, делящи се на 3 и 7
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 7 === 0) {
        sum += numbers[i];
    }
}

// Превръщаме сумата в масив от цифри
let newSum = sum.toString().split('').map(Number);

// Сумираме всички цифри с for цикъл
let sumTotal = 0;
for (let i = 0; i < newSum.length; i++) {
    sumTotal += newSum[i];
}

console.log(sumTotal);