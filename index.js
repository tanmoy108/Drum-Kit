let buttonNumber = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttonNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    keypad(this.innerHTML);
    keypadpress(this.innerHTML);
  });
}

document.addEventListener("keypress", function (e) {
  keypad(e.key);
  keypadpress(e.key);
});

const keypad = (a) => {
  switch (a) {
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(a);
  }
};

const keypadpress = (b) => {
  document.querySelector("." + b).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + b).classList.remove("pressed");
  },200);
};
