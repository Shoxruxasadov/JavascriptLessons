let str = document.getElementById('h1')
let watch = Number(prompt('Soatni kiriting'))
let day = String(prompt('Hafta kunini kiriting'))
day = day.toUpperCase()
day = day.trim()

if(watch<9 || watch>18 || day=='YAKSHANBA'){
    str.innerText+= ' yopiq'
}else{
    str.innerText+= ' ochiq'
}

