let ytr = document.getElementById('h1')
let ktr = document.getElementById('h2')
let atr = document.getElementById('h3')
let btr = document.getElementById('h4')

let a = Number(prompt('Ikki son yigindisi, kopaytmasi, kvadrati: a son'))
let b = Number(prompt('Ikki son yigindisi, kopaytmasi, kvadrati: b son'))

let y = a+b
let k = a*b
let a2 = Math.pow(a,2)
let b2 = Math.pow(b,2)

ytr.innerText+=y
ktr.innerText+=k
atr.innerText+=a2
btr.innerText+=b2