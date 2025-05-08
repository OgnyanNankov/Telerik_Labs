// Task 'Exam Numbers'                                                        
let input = [
    '100',                                                                    
    '200',                                                                    
    '12',                                                                     
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
let x = +gets();                                                             
let y = +gets();                                                             
let t = +gets();                                                           

// Process the data
for (i = x; i <= y; i++) {                                                   
    let digit1 = Math.floor(i / 100);                                        
    let digit2 = Math.floor((i % 100) / 10);                                 
    let digit3 = Math.floor(i % 10);                                         
    let sum = digit1 + digit2 + digit3;                                      

    if (sum === t) {                                                         
        print(i);                                                            
    }
}

