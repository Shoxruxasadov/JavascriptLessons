let inpName = document.getElementById('inpName')
let inpAge = document.getElementById('inpAge')
let names = document.getElementById('names')
let age = document.getElementById('age')

function draw(){
    names.innerText += ' ' + inpName.value
    age.innerText += ' ' + inpAge.value + 'da'
}

