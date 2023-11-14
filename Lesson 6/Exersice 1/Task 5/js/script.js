let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')

function draw(){
    text3.innerText += text1.innerText.substring(0,3) 
    + text2.innerText.substring(0,3)
}

