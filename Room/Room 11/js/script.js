let box = document.getElementById('box')
let degree = 0
function startBtn() {
    setInterval(function() {
        box.style.transition = '1s'
        if(box.style.rotate == `${degree}deg`){
            box.style.rotate = '45deg'
            degree += 45
        }else if(box.style.rotate == '45deg'){
            box.style.transition = '2s'
            box.style.rotate = '-45deg'
        }else if(box.style.rotate == '-45deg'){
            box.style.transition = '2s'
            box.style.rotate = '45deg'
        }
        console.log(box.style.rotate);
    },1000)
}




// 2-objekt
// let myObj = {
//     name: 'Shoxrux',
//     age: 19,
//     isMarried: false
// }

// if (myObj.isMarried == false) {
//     console.log(`Salom mening ismim ${myObj.name}, men ${myObj.age}yoshdaman va men bo'ydoqman`);   
// }else{
//     console.log(`Salom mening ismim ${myObj.name}, men ${myObj.age}yoshdaman va men uylanganman`);   
// }