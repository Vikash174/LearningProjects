

// function x(){
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);

//     console.log("Namste JavaScript")
// }

// x();


// function printAfterEachSecond(){

//        for (var index = 1; index <6; index++) {

//         function close(index){
//             setTimeout(() => {
//                 console.log(index);
//              }, index*1000);
//         }

//         close(index);
//      }

//      console.log("Namste JavaScript");

// }

// printAfterEachSecond();

function outer(b){
   
    function inner(){
        console.log(b);
    }
    let a = 10;
    return inner;
}


outer("hello world")();













