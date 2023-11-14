let hw1 = document.getElementById('hw1')
let hw2 = document.getElementById('hw2')

function empty() {
    hw1.style.display = 'none'
    hw2.style.display = 'none'
}
function homeWorkOne() {
    empty()
    hw1.style.display = 'block'
}
function homeWorkTwo() {
    empty()
    hw2.style.display = 'block'
}



// HOMEWORK ONE (LIGHT TRAFFIC)
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let num = document.getElementById('num')
let timer;

draw()

function draw() {
    setTimeout(() => {
        setTimeout(() => {
            red.title = 'red'
            setTimeout(() => {
                red.title = 'empty'
            }, 1000)
        }, 1)
        red.style.backgroundColor = '#ff3822'
        red.style.boxShadow = '0 0 10px #ff3822'
        num.style.color = '#ff3822'
        num.style.textShadow = '0 0 10px #ff3822'
        setTimeout(() => {
            red.style.backgroundColor = 'white'
            red.style.boxShadow = '0 0 10px white'
        }, 15000)
    }, 1)
    setTimeout(() => {
        yellow.style.backgroundColor = '#eeff03'
        yellow.style.boxShadow = '0 0 10px #eeff03'
        num.style.color = '#eeff03'
        num.style.textShadow = '0 0 10px #eeff03'
        setTimeout(() => {
            yellow.style.backgroundColor = 'white'
            yellow.style.boxShadow = '0 0 10px white'
        }, 3000)
    }, 12000)
    setTimeout(() => {
        setTimeout(() => {
            green.title = 'green'
            setTimeout(() => {
                green.title = 'empty'
            }, 1000)
        }, 1)
        green.style.backgroundColor = '#06ff59'
        green.style.boxShadow = '0 0 10px #06ff59'
        num.style.color = '#06ff59'
        num.style.textShadow = '0 0 10px #06ff59'
        setTimeout(() => {
            green.style.backgroundColor = 'white'
            green.style.boxShadow = '0 0 10px white'
        }, 10000)
    }, 15000)
}
setInterval(draw, 25000)

setInterval(() => {
    if (red.title == 'red') {
        timer = 15
    } else if (green.title == 'green') {
        timer = 10
    }

    timer--
    num.innerText = timer
}, 1000);




// HOMEWORK TWO (OBJECT COUNTER)
let numCounter = document.getElementById('num_counter')
let counter = {
    count: 0,
}
function plus() {
    counter.count++
    numCounter.innerText = counter.count
}
function minus() {
    counter.count--
    numCounter.innerText = counter.count
}



















// qwerty()
// function qwerty() {
//     setTimeout(() => {
//         red.style.backgroundColor = '#ff3822'
//         setTimeout(() => {
//             red.style.backgroundColor = 'white'
//         }, 15000)
//     }, 1)
    
//     setTimeout(() => {
//         yellow.style.backgroundColor = '#eeff03'
//         setTimeout(() => {
//             yellow.style.backgroundColor = 'white'
//         }, 3000)
//     }, 12000)
    
//     setTimeout(() => {
//         green.style.backgroundColor = '#06ff59'
//         setTimeout(() => {
//             green.style.backgroundColor = 'white'
//         }, 10000)
//     }, 15000)
// }
// setInterval(qwerty,25000)