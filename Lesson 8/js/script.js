// // Homework num press
let inputVal = document.getElementById("hw-inp");

function draw() {
  hideAll();
  let show = document.getElementById("hw" + inputVal.value);
  show.style.display = "block";
}
function hideAll() {
  let hw1 = document.getElementById("hw1");
  let hw2 = document.getElementById("hw2");
  hw1.style.display = "none";
  hw2.style.display = "none";
}

// Homework closed
function closed() {
  hideAll();
}

// Homework one | part one
let hwopShowing = document.getElementById("hwopShowing");
let hwopInp = document.getElementById("hwopInp");
let hwopt = document.getElementById("hwopt");
let hwoptFont = document.getElementById("hwoptFont"); // part two niki

function hwopShow() {
  hwopShowing.style.display = "block";
}
function hwopShowTwo() {
  hwopt.style.display = "block";
  hwoptFont.innerText = hwopInp.value;
}

// Homework one | part two
let changeSize = 32;
let changeRotate = 0;

function sizePlus() {
  changeSize += 2;
  valiableFunctionOne();
}
function sizeMinus() {
  changeSize -= 2;
  valiableFunctionOne();
}
function rotateLeft() {
  changeRotate += 10;
  valiableFunctionOne();
}
function rotateRight() {
  changeRotate -= 10;
  valiableFunctionOne();
}
function reset() {
  changeSize = 32;
  changeRotate = 0;
  valiableFunctionOne();
}
function valiableFunctionOne() {
  hwoptFont.style.fontSize = changeSize + "px";
  hwoptFont.style.rotate = changeRotate + "deg";
}

// Homework two Tv
let tvWrapper = document.getElementById("tvWrapper");

function showTv() {
  tvWrapper.style.display = "block";
}
function hideTv() {
  tvWrapper.style.display = "none";
}

// next back
let value = 0;

function nextBack(count) {
  value += count;
  photosAll(value);
}
photosAll(value);

function photosAll(num) {
  let photos = document.getElementsByClassName('photos')

  if(num == photos.length){
    value = 0
    num = 0
  }else if(num<0){
    value = photos.length-1
    num = photos.length-1
  }

  for(let i of photos){
    i.style.display = 'none'
  }

  photos[num].style.display = "block";
}
