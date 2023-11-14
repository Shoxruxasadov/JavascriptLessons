// let arr = ['banan','olma', 'nok', 'apelsin', 'kivi', 'ananas']

// for(let i = 0; i<arr.length; i++){
//     if(i%2==1){
//         console.log(arr[i]);
//     }
// }

// let wrapper = document.getElementById("wrapper");
// let arr = [1, 2, 3];

// function draw() {
//   let s = "";
//   for (let i = 0; i < arr.length; i++) {
//     s += `
//         <div class="box ${arr[i] ? "active" : ""}">
//             <input type="checkbox" ${arr[i] ? "checked" : ""} onchange="changeBox(${i})" >
//         </div>
//         `;
//   }
//   wrapper.innerHTML = s;
// }
// draw();

// function changeBox(i) {
//   arr[i] = !arr[i]
//   draw()
// }


let bodye = document.getElementById('bodye')
let isCes = true
function moon(){
    if(isCes){
        bodye.style.backgroundColor = '#222'
        isCes = false
    }else{
        bodye.style.backgroundColor = "#fff"
        isCes = true
    }
}