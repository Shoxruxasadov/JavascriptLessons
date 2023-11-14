// function ab (a, b) {
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(ab(5,10));



// function draw(name, lastName, job){return `Salom mening ismim ${name} familiyam ${lastName} va kasbim ${job}`}
// console.log(draw("Shoxrux", "Asadov", "Dasturchi"));



let box1 = document.getElementById('box_1')
let box2 = document.getElementById('box_2')
let box3 = document.getElementById('box_3')
let count = 0



setInterval(function(){
    count++
    if (count%3==1) {
        empty()
        box1.style.background = 'red'
    }else if(count%3==2){
        empty()
        box2.style.background = 'black'
    }else{
        empty()
        box3.style.background = 'blue'
    }
},300)

function empty() {
    box1.style.background = 'white'
    box2.style.background = 'white'
    box3.style.background = 'white'
}

