
// // Example 1: outputs 3 even when the variable is declared after it is initilized
// hoistedVariable = 3;
// console.log(hoistedVariable);
// var hoistedVariable;


// // Example 2: Outputs "Hello World!!" even when function is declared after calling
// hoistedFunction();
// function hoistedFunction(){
//     console.log("Hello World!!");
// }


// // Example 3: Hoisting takes place in local scope as well
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
// }
// doSomething();


// // Example 4: variable initilization is not hoisted, only variable declartion is hoisted
//     var x;
//     console.log(x);
//     x = 10;


//     // TO avoid hoisting we can use 'use strict' keyword on top of the code;

    

//     var 

var x = 2;
var y = "2";
console.log(x==y);
console.log(x===y);