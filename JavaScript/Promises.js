
// const cart = ["Mobile","Laptop","Tablet"];

// let orderId = createOrder(cart) 

// proceedToPayment(orderId);

// const GITHUB_API = "https://api.github.com/users/vikash174";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
 
//      console.log(data);
// })


// Promise chaining

 /* const cart = ["shoes","slippers","watch"]; */

 // Using callback functions
 /* createOrder(cart, function(){
    proceedToCheckOut(orderId,function(){
        showOrderSummary(paymentInfo,function(){
             updateWalletBalance();
        })
    })
 }); */


 // Using promises

/* createOrder(cart)
    .then(orderId => proceedToCheckout(orderId))
    .then(function(paymentInfo){
      return showOrderSummary(paymentInfo);
    })
    .then(function(){
      return updateWalletBalance();
    }) */


    /**
     * Q1: What is a Promise?
     * 
     * Ans: Promises are the objects that represents the eventual completion of an asynchronous operations or it's resulting value. 
     * 
     * 
     * Q2: why promises are important ?
     * Ans: We use promises in place of Callback functions.
     * Promises help us in different ways that callback functions couldn't
     * 1. We lose code controll in callback functions it's call inversion of controll, We give controll to function to completer our callback function. But while using promises we don't need to deal with this problem
     * 2. Promises give more readibilty of our code compare to callback funtions.
     */



const cart = ["Mobile","Laptop","Tablet"];

createOrder(cart)
   .then(function(orderId){
    console.log(orderId);
    return orderId;
  })
  .catch(function(err){
    console.log(err.message);
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })

 
// console.log(orderId);


    // Creating a Promise

    function createOrder(cart){

        const promise = new Promise(function(resolve,reject){
            
             // createOrder
             // validateCart
             // orderId
             if(!validateCart(cart)){
                const err = new Error("Cart is not valid");
                reject(err);
             }

             // logic for createOrder
             const orderId = "23432";
             if(orderId){
                setTimeout(() => {
                    resolve(orderId);    
                }, 5000);
                
             }


        });
      return promise;
    }
    function proceedToPayment(orderId){
        return new Promise (function(resolve,reject){

            resolve("Payment Successful");

        });
    }


    function validateCart(cart){
        return false;
    }

    