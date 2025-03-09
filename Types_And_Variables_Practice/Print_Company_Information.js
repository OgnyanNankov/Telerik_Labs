// Task 'Print Company Information':

let input = [
    'Telerik Academy',
    '31 Al. Malinov, Sofia',
    '+359 888 55 55 555',
    '',
    'http://telerikacademy.com/',
    'Martin',
    'Veshev',
    '25',
    '+359 2 981 981',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// // Read the input from the system
let companyName = gets();
let address = gets();
let companyPhoneNumber = gets();
let faxNumber = gets();
let webSite = gets();
let firstName = gets();
let lastName = gets();
let managerAge = gets();
let managerPhoneNumber = gets();

print(companyName);
print('Address: ' + address);
print('Tel. ' + companyPhoneNumber);
print('Fax:' + faxNumber);
print('Web site: ' + webSite);
print('Manager: ' + firstName + ' ' + lastName + '(age: ' + managerAge + ', ' + 'tel. ' + managerPhoneNumber + ')');

// We can also use concatenation ${}
// print(`Manager: ${firstName} ${lastName}(age: ${managerAge}, tel. ${managerPhoneNumber})`);