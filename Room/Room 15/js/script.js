// let str = document.getElementById('str')
// let counterStr = document.getElementById('counter_str')
// let count = 0

// function plus(){
//     count++
//     counterStr.innerText = count
//     str.innerHTML += `<p> Salom</p>`
// }



let str = document.getElementById('str')
let counterStr = document.getElementById('counter_str')
let count = 0

function plus(){
    count++
    counterStr.innerText = count
    
    let s = ''
    for(i=0; i<count; i++){
        s += `<p> Salom</p>`
    }
    str.innerHTML = s
}