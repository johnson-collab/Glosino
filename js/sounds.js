const sounds = {
  click: new Audio("../assets/sounds/click.mp3"),
  win: new Audio("../assets/sounds/win.mp3"),
  lose: new Audio("../assets/sounds/lose.mp3")
};

function playSound(name) {
  if (!localStorage.getItem("muted")) {
    sounds[name].play();
  }
}
