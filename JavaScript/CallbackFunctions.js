// What is a callback function in JavaScript


// setTimeout(function(){
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("x");
//     y();

// }
// x(function y(){
//    console.log("y");
// });


//JavaScript is a synchronous and single-threaded language
//Blocking the main thread
//Power of Callbacks?
//Deep dive about Event Listeners
//Closures demo with Event Listeners
//Scope Demo with Event Listeners
//Garbage collection & removeEventListerners



function attachEventListeners(){
 let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
          console.log("Button Clicked",++count);
    });
}

attachEventListeners();