let str = document.getElementById('h1')
let a = Number(prompt('A kesma'))
let b = Number(prompt('B kesma'))

if (a>b) {
    let x = Math.floor(a/b)
    str.innerText+=x
}else{
    str.innerText= 'B soni katta bolmasin'
}