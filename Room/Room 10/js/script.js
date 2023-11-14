let box = document.getElementById('box')
let bgColor

setInterval(function(){
    if (bgColor == 'black') {
        bgColor = 'red'
    }else{
        bgColor = 'black'
    }
    box.style.background = bgColor
},500)

