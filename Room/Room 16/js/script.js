// let inpFN = document.getElementById("inp_fn");
// let inpLN = document.getElementById("inp_ln");
// let inpAge = document.getElementById("inp_age");
// let inpCBox = document.getElementById("inp_cbox");
// let tbody = document.getElementById("tbody");
// let arr = [];

// function add() {
//   let obj = {
//     fn: inpFN.value,
//     ln: inpLN.value,
//     age: inpAge.value,
//     isStudent: inpCBox.checked,
//   };

//   arr.push(obj);
//   inpFN.value = "";
//   inpLN.value = "";
//   inpAge.value = "";
//   show();
// }

// function remove(i) {
//     arr.splice(i, 1);
//     show();
//     console.log(i);
//   }
  

// function show() {
//   let s = "";
//   for (let i = 0; i < arr.length; i++) {
//     s += `
//         <tr>
//             <td>${arr[i].fn}</td>
//             <td>${arr[i].ln}</td>
//             <td>${arr[i].age}</td>
//             <td>${arr[i].isStudent ? "Student" : "No Student"}</td>
//             <td><button onclick="remove(${i})">X</button></td>
//         </tr>
//         `;
//   }
//   tbody.innerHTML = s;
// }

let div = document.getElementById('div')
let arr = ['tesla ', 'malibu ', 'matiz ', 'spark ']
let s = ''

function draw () {
    s = ''
    for(i=0; i<arr.length; i++){
        s+=arr[i]
    }
}

draw()
div.innerHTML = s

function push() {
    arr.push('cobalt ')
    draw()
    div.innerHTML = s
}

function pop() {
    arr.pop()
    draw()
    div.innerHTML = s
}

function unshift() {
    arr.unshift('gentra ')
    draw()
    div.innerHTML = s
}

function shift() {
    arr.shift()
    draw()
    div.innerHTML = s
}

