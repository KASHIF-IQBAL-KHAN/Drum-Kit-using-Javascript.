// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick()
// {
//   alert("I got clicked");
// }

//You can also write using Anonymous function

// Click on All Buttons
//
// for(var i=0;i<7;i++)
// document.querySelectorAll("button")[i].addEventListener("click",function (){alert("I got clicked");});
//

// Audio

var drumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    switch (buttonInnerHtml) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var sn = new Audio("sounds/snare.mp3");
        sn.play();
        break;
      case "k":
        var kick = new Audio("sounds/tom-3.mp3");
        kick.play();
        break;
      case "l":
        var cra = new Audio("sounds/crash.mp3");
        cra.play();
        break;
      default:
        console.log(buttonInnerHtml);
    }
  })
}

document.addEventListener("keypress",function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var sn = new Audio("sounds/snare.mp3");
      sn.play();
      break;
    case "k":
      var kick = new Audio("sounds/tom-3.mp3");
      kick.play();
      break;
    case "l":
      var cra = new Audio("sounds/crash.mp3");
      cra.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentkey)
{
  var activeButton=document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  }, 100);

}
