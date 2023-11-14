let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')

function draw(){
    text2.innerText += text1.innerText.substring(0,1)
}

function drow(){
    text3.innerText = text2.innerText.substring(text2.innerText.length-1) + text3.innerText
}
