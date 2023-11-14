let inp = document.getElementById('inp')

function clears(){
    inp.value = ''
}

function subm(){
    inp.value = inp.value.substring(0,inp.value.length-1)
}

function mathSqrt() {
    inp.value = Math.sqrt(inp.value)
}

function draw(x) {
    inp.value += x
}

function equal() {
    inp.value = eval(inp.value)
}