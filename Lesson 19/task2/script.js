let titleInp = document.querySelector("#title");
let descInp = document.querySelector("#desc");
let options = document.getElementsByName("add_select");
let contentJun = document.getElementById("content-jun");
let contentMid = document.getElementById("content-mid");

let localUser = JSON.parse(localStorage.getItem("user"));
let arr = localUser === null ? [] : localUser;
draw();

function saves() {
  if (
    options[0].checked == true ||
    titleInp.value == "" ||
    descInp.value == "" ||
    (options[1].checked == false && options[2].checked == false)
  ) {
    return;
  }

  let obj = {
    title: titleInp.value,
    desc: descInp.value,
    status:
      options[1].checked == true
        ? "junior"
        : "" || options[2].checked == true
        ? "middle"
        : "",
  };

  let x = JSON.stringify(arr);
  localStorage.setItem(`user`, x);

  arr.push(obj);

  titleInp.value = "";
  descInp.value = "";

  draw();
}

function draw() {
  let s = "";
  let a = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status == "junior") {
      s = `
      <div>
        <h3>${arr[i].title}</h3>
        <p>${arr[i].desc}</p>
      </div>
      `;
    }

    if (arr[i].status == "middle") {
      a = `
      <div>
        <h3>${arr[i].title}</h3>
        <p>${arr[i].desc}</p>
      </div>
      `;
    }
  }
  contentJun.innerHTML += s;
  contentMid.innerHTML += a;

  options[0].checked = true;
  options[1].checked = false;
  options[2].checked = false;
}
