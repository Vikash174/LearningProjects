// alert("WOrking");



let buttons = document.querySelectorAll(".drum");
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click",handleClick);
}

document.addEventListener("keypress",function(e){
        // console.log(e);sd
     playSoundBasedOnChar(e.key);
     buttonAnimation(e.key);
   
});


function handleClick(){
   let buttonInnerHTML = this.innerHTML;
   playSoundBasedOnChar(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
  
 }

function playSoundBasedOnChar(char){
    switch (char) {
        case "w":
           new Audio("./sounds/tom-1.mp3").play();
           break;
        case "a":
             new Audio("./sounds/tom-2.mp3").play();
             break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
             break;
        case "d":
           new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
           new Audio("./sounds/snare.mp3").play();
           break;
        case "k":
           new Audio("./sounds/crash.mp3").play();
           break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
            break;
   }
}
function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     let delayInMilliseconds = 100; //1 second

     setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, delayInMilliseconds);
}

