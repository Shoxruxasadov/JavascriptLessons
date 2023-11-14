let inp = document.getElementById('inp')
let counter = document.getElementById('counter')
let count = 0
function draw() {
    count = inp.value
    counter.innerText = inp.value
}

function plus(){
    count++
    counter.innerText = count
}
function minus(){
    count--
    counter.innerText = count
}
function res(){
    count = 0
    counter.innerText = count
}

