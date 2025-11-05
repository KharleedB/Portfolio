let a = 5; 
let b = 5;
console.log(a + b); // the problem here is that a and b are numbers, not strings you can either remove the strings or  

console.log(Number(a) + Number(b)); // convert them to numbers and add them correctly either of this will work correctly and the output will be 10