let ptr = document.getElementById('h1')
let str = document.getElementById('h2')
let stringa = Number(prompt('Tortburchak peremetri va yuzasi: a tomonni kiriting')) 
let stringb = Number(prompt('Tortburchak peremetri va yuzasi: b tomonni kiriting')) 
let p = 2 * (stringa + stringb)
let s = stringa * stringb
ptr.innerText+=p
str.innerText+=s