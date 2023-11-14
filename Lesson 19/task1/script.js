let titleInp = document.getElementById("title");
let descInp = document.getElementById("desc");
let body = document.getElementById("body");

let localUser = JSON.parse(localStorage.getItem("user"));
let arr = localUser === null ? [] : localUser;

draw();

function saves() {
  let obj = {
    title: titleInp.value,
    desc: descInp.value,
  };

  arr.push(obj);
  titleInp.value = "";
  descInp.value = "";

  draw();
}

function draw() {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    let x = JSON.stringify(arr);
    localStorage.setItem(`user`, x);
    s += `
        <div>
            <h1>${arr[i].title}</h1>  
            <p>${arr[i].desc}</p>
            <button class="btn btn-danger" onclick="clears(${i})">X</button>
        </div>
    `;
  }

  body.innerHTML = s;
}

function clears(i) {
  arr.splice(i, 1);

  draw();
}
