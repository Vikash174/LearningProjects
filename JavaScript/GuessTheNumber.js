
let randomNumber = parseInt(Math.random()*100);

let nubmerOfRetry = 0;
while(true){
    nubmerOfRetry++;
    let userNumber = parseInt(prompt("enter your number"));

    if(userNumber == randomNumber){
        console.log(`Congratulations you guessed it right, Your score is ${100-nubmerOfRetry}. Actual Number was ${randomNumber}`);
        break;
    }
    else if(userNumber < randomNumber){
        console.log(`Your guessed number is less than actual number`);
    }
    else{
        console.log(`Your guessed number is greater than actual number`);
    }

}
