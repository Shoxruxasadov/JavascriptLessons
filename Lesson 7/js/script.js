// Homework num press
let inputVal = document.getElementById("hw-inp");

function draw() {
  hideAll();
  let show = document.getElementById("hw" + inputVal.value);
  show.style.display = "block";
}
function hideAll() {
  let hw1 = document.getElementById("hw1");
  let hw2 = document.getElementById("hw2");
  let hw3 = document.getElementById("hw3");

  hw1.style.display = "none";
  hw2.style.display = "none";
  hw3.style.display = "none";
}

// Homework closed
function closed() {
  hideAll();
}

// Homework one box
let hwoBox = document.getElementById("homework-one-box");
let posud = 200;
let posrd = 200;

function up() { 
  firstbox();
  if (hwoBox.style.top=='0px') {
    posud = 0
  }else{
    posud -= 20;
  }
}
function down() {
  firstbox();
  if (hwoBox.style.top=='400px') {
    posud = 400
  }else{
    posud += 20;
  }
}
function left() {
  firstbox();
  if (hwoBox.style.left=='0px') {
    posrd = 0
  }else{
    posrd -= 20;
  }
}
function right() {
  firstbox();
  if (hwoBox.style.left=='400px') {
    posrd = 400;
  }else{
    posrd += 20;
  }
}

function firstbox() {
  hwoBox.style.top = posud + "px";
  hwoBox.style.left = posrd + "px";
  hwoBox.style.transition = '0.05s'
}

// Homework two calculator
let asrVal = document.getElementById("hwTwoRes");
let inpVal1 = document.getElementById("hwtInp1");
let inpVal2 = document.getElementById("hwtInp2");
function plus() {
  asrVal.innerText = "Answer: " + (+inpVal1.value + +inpVal2.value);
}
function minus() {
  asrVal.innerText = "Answer: " + Number(inpVal1.value - inpVal2.value);
}
function increase() {
  asrVal.innerText = "Answer: " + Number(inpVal1.value * inpVal2.value);
}
function tobe() {
  asrVal.innerText = "Answer: " + Number(inpVal1.value / inpVal2.value);
}

// Homework three rotate
let arrow = document.getElementById("hwthArrow");
let boxRed = document.getElementById('boxRed')
let degree;

function rotate() {
  degree = '810deg';
  rotateStyle()
  boxStyle()
}

function rotateStyle() {
  arrow.style.transition = '1.4s';
  arrow.style.rotate = degree;
}

function boxStyle () {
  if (degree=='90deg') {
    boxRedStyle()
  }else if (degree=='450deg') {
    boxRedStyle()
  }else if (degree=='810deg') {
    boxRedStyle()
  }else{}
}

function boxRedStyle(){
  boxRed.style.transition = '3s'
  boxRed.style.background = '#ff0000a0'
  boxRed.style.border = 'none'
}




