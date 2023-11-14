let inp = document.getElementById('inp')

function clears(){
    inp.value = ''
}

function back(){
    inp.value = inp.value.substring(0,inp.value.length-1)
}

function percentage() {
    inp.value = inp.value/100
}

function draw(x) {
    inp.value += x
    // if (inp.value.search(7)==0) {
    //     return inp.value = '-'
    // }else{}
}

function equal() {
    inp.value = eval(inp.value)
}

function press() {
    inp.value = 'Not a Number'
}

function bracketr() {
    inp.value += '('
}
function bracketl() {
    inp.value += ')'
}




