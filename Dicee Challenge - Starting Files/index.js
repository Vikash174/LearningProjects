let randomNumber1 = getRandomInt(6);
let randomNumber2 = getRandomInt(6);

addDiceImageOnLoad(randomNumber1, randomNumber2);

showResult(randomNumber1, randomNumber2);

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}



function addDiceImageOnLoad(firstNumber, secondNumber) {
    document.querySelector(".img1").src = "images/dice" + firstNumber + ".png";
    document.querySelector(".img2").src = "images/dice" + secondNumber + ".png";
}


function showResult(num1, num2) {
    if (num1 > num2) {
        document.querySelector("h1").textContent = "🚩Player 1 wins!";
    } else if (num2 > num1) {
        document.querySelector("h1").textContent = "Player 2 wins! 🚩";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}







