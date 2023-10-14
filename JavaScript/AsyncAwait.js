/**
 * -> What is async ?
 * What is await ?
 * How async await works begind the scenes ?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promis.then/.catch
 */

/* 
// Always returns promise
async function getData(){
   return p;
}

const dataPromise = getData();

 dataPromise.then(res => {
      console.log(res);
 }) */

/* const p = new Promise(function(resolve,reject){

   setTimeout(() => {
      resolve("Prmise resolved Value P1 !!")
   }, 5000);

});
const p2 = new Promise(function(resolve,reject){

   setTimeout(() => {
      resolve("Prmise resolved Value P2 !!")
   }, 10000);

}); */

async function handlePromise(){
  // await keyword can only be used inside an async function
   
 /*   console.log("Hello WOrld!!");

   const res = await p;
   console.log("Namaste JavaScript");
   console.log(res);

   const res2 = await p2;
   console.log("Namaste JavaScript");
   console.log(res2); */


   
  
}

handlePromise();

console.log("handle Promise has been suspended");


/* function getData(){
   p.then(res => console.log(res));
}

getData();
 */