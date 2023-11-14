let whithBox = document.getElementById("whith");
let heightBox = document.getElementById("height");
let colorBox = document.getElementById("color");
let strBox = document.getElementById("str");
let box = document.getElementById("box");
let strings = document.getElementById("strings");
let scaleWidth = 300;
let scaleHeight = 300;

function draw() {
  scaleWidth = +whithBox.value
  scaleHeight = +whithBox.value
  box.style.width = scaleWidth + "px";
  box.style.height = scaleHeight + "px";
  box.style.backgroundColor = colorBox.value;
}
function press() {
  strings.innerText = strBox.value;
}

function minus() {
    if (scaleWidth<=100 || scaleHeight<=100) {
        return
    }else{
        scaleWidth -= 10;
        scaleHeight -= 10;
    }
  empty();
}

function plus() {
    if (scaleWidth>=500 || scaleHeight>=500) {
        return
    }else{
        scaleWidth += 10;
        scaleHeight += 10;
    }
  empty();
}

function empty() {
  box.style.width = scaleWidth + "px";
  box.style.height = scaleHeight + "px";
}
