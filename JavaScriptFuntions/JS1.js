
// Function Declaration

 function printHelloWorld(){
    console.log("Hello World");
 }

//  printHelloWorld();


// Function Expressions
const x = function(a,b){return a*b};

// console.log(x(2,5));


// Function Constructor in JavaScript
const myFuntion = new Function("a","b","c","return a*b*c");
 console.log(myFuntion(3,4,0));
