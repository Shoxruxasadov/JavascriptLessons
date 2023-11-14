// HOMEWORK INPUT
let hwOne = document.getElementById("homework_one");
let hwTwo = document.getElementById("homework_two");
let hwThree = document.getElementById("homework_three");
let hwFour = document.getElementById("homework_four");
let hwFive = document.getElementById("homework_five");

function one() {
  empty();
  hwOne.style.display = "block";
}
function two() {
  empty();
  hwTwo.style.display = "block";
}
function three() {
  empty();
  hwThree.style.display = "block";
}
function four() {
  empty();
  hwFour.style.display = "block";
}
function five() {
  empty();
  hwFive.style.display = "block";
}
function empty() {
  hwOne.style.display = "none";
  hwTwo.style.display = "none";
  hwThree.style.display = "none";
  hwFour.style.display = "none";
  hwFive.style.display = "none";
} // HOMEWORK INPUT END

// HOMEWORK ONE
let inpFirstName = document.getElementById("first_name");
let inpLastName = document.getElementById("last_name");
let inpAge = document.getElementById("age");
let inpCity = document.getElementById("city");

let object = {
  firstName: "",
  lastName: "",
  age: "",
  city: "",
};

function save() {
  object.firstName = inpFirstName.value;
  object.lastName = inpLastName.value;
  object.age = inpAge.value;
  object.city = inpCity.value;

  console.log(object);
} //HOMEWORK ONE END

// HOMEWORK TWO
let descriptionBox = document.getElementById("description_box");
let dcTextBox = document.getElementById("dc_text_box");
let dcText = document.getElementById("dc_text");
let dcInp = document.getElementById("dc_inp");

function add() {
  descriptionBox.style.display = "block";
}

function dcSave() {
  descriptionBox.style.display = "none";
  dcTextBox.style.display = "block";
  dcText.innerText += " " + dcInp.value;
  dcInp.value = ''
} // HOMEWORK TWO END

// HOMEWORK THREE (ON-OFF)
let onOffBtn = document.getElementById("onoff_btn");
let onoffText = document.getElementById("onoff_text");
let isClicked = true;

function onoff() {
  if (isClicked) {
    onOffBtn.style.background = "red";
    onoffText.innerText = "OFF";
    isClicked = false;
  } else {
    onOffBtn.style.background = "green";
    onoffText.innerText = "ON";
    isClicked = true;
  }
} // HOMEWORK THREE END

// HOMEWORK FOUR (CLOCK)
let clock = document.getElementById("clock");
let audio = new Audio("audio/audio.mp3");
let degree = 0;
let x;

function start() {
  x = setInterval(function () {
    degree += 6;
    clock.style.transition = "0.5s";
    clock.style.rotate = +degree + "deg";
  }, 1000);
  audio.play();
}

function stope() {
  clearInterval(x);
  audio.pause();
} // HOMEWORK FOUR END

// HOMEWORK FIVE (TV)
let tvWrapper = document.getElementById("tvWrapper");
let images;
let value = 1;

function prev() {
  value -= 1;
  if (value == 0) {
    value = 4;
  }
  images = document.getElementById("images").src = "./img/" + value + ".jpg";
}

function next() {
  value += 1;
  if (value == 5) {
    value = 1;
  }
  images = document.getElementById("images").src = "./img/" + value + ".jpg";
}

setInterval(next, 3000);
