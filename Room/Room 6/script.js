// 1
// sayHello()
// function sayHello(){
//     console.log('Hello');
// }


// 2
// let a = Number(prompt('A son'))
// let b = Number(prompt('B son'))
// function inc(){
//     alert(a+b)
// }
// function dec(){
//     alert(a-b)
// }
// function math(){
//     alert(a*b)
// }
// inc()
// dec()
// math()


// 3
// let str = document.getElementById('h1')
// function draw(){
//     str.innerText+= ' Hello'
// }
// function drow(){
//     str.innerText+= ' World'
// }


// 4
let str = document.getElementById('h1')
let count = 0

function plus(){
    count++
    str.innerText = count
}
function minus(){
    count--
    str.innerText = count
}
function res(){
    count = 0
    str.innerText = count
}


// 5
// let inp = document.getElementById('inp') 
// let inp2 = document.getElementById('inp2') 
// let h = document.getElementById('h1')
// function draw(){
//     h.innerText = +inp.value + +inp2.value
// }
