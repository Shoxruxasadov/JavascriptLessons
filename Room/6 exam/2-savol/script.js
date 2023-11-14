let strdoc = document.getElementById('str')
let string = prompt('Satr malumot kiriting')

let rightTwo = string.substring(string.length-2)
let left = string.substring(0,string.length-2)
let res = rightTwo + left

strdoc.innerText+=res