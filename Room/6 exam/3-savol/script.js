let str = document.getElementById('h1')
let string = prompt('Malumot kiriting')

if (string.substring(0,2) == 'ha') {
    str.innerText+=true
}else if(string.substring(1,3) == 'ha'){
    str.innerText+=true
}else{
    str.innerText+=false
}