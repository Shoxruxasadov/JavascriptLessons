let genSeaAll = document.getElementById("gen_sea_all");
let selGenImg = document.getElementById("selGenImg");
let selgentext = document.getElementById("selgentext");
let erSG = document.getElementById("ersg");
let aySG = document.getElementById("aysg");
let selectGender = true;
function selGen() {
  if (selectGender) {
    selGenImg.style.transition = "0.4s";
    genSeaAll.style.transition = "0.3s";
    genSeaAll.style.translate = "800px";
    selGenImg.style.rotate = "180deg";
    selectGender = false;
  } else {
    selGenImg.style.transition = "0.4s";
    genSeaAll.style.transition = "0.3s";
    genSeaAll.style.translate = "-800px";
    selGenImg.style.rotate = "0deg";
    selectGender = true;
  }
}

// ======= Progress ======= \\
let tbody = document.getElementById("tbody");

// ======= First Div ======= \\
let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let age = document.getElementById("age");
let genderMale = document.getElementById("genderMale");
let genderWoman = document.getElementById("genderWoman");
let selGenFunc = document.getElementsByName("selectgenderfunc");

// ======= Second Div ======= \\
let radio = document.getElementsByName("radio");
let yesradio = document.getElementById("yesradio");
let student = document.getElementById("noradio");
let langu = document.getElementsByName("langu");
let uzBox = document.getElementById("uzbox");
let enBox = document.getElementById("enbox");
let ruBox = document.getElementById("rubox");

// ======= Third Div ======= \\
let inpColor = document.getElementById("inpcolor");
let taDes = document.getElementById("tades");

// ========= <<.>> ========= \\
let arr = [];
function saves(eve) {
  eve.preventDefault()

  let obj = {
    fn: fName.value,
    ln: lName.value,
    age: age.value,
    gender: genderWoman.checked ? selGenFunc[1].value : selGenFunc[0].value,
    type: student.checked ? radio[1].value : radio[0].value,
    language:
      (uzBox.checked ? "Uzb" : "") +
      " " +
      (enBox.checked ? "Eng" : "") +
      " " +
      (ruBox.checked ? "Rus" : ""),
    color: inpColor.value,
    des: taDes.value,
  };
  arr.push(obj);
  // Clear Panel
  fName.value = "";
  lName.value = "";
  age.value = "";
  genderMale.checked = false;
  genderWoman.checked = false;
  yesradio.checked = false;
  student.checked = false;
  uzBox.checked = false;
  enBox.checked = false;
  ruBox.checked = false;
  inpColor.value = "#000000";
  taDes.value = "";
  // End Clear Panel
  show();
}

function show() {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += `
      <tr>
         <td class="edit_fname${i}">${arr[i].fn}</td>
         <td class="edit_lname${i}">${arr[i].ln}</td>
         <td class="edit_age${i}">${arr[i].age}</td>
         <td>${arr[i].gender}</td>
         <td>${arr[i].type}</td>
         <td>${arr[i].language}</td>
         <td>${arr[i].color}</td>
         <td class="edit_des${i}">${arr[i].des}</td>
         <td>
            <button onclick="clears(${i})">x</button>
            <button onclick="edits(${i})">edit</button>
         </td>
      </tr>
    `;
  }
  tbody.innerHTML = s;
}

function clears(i) {
  arr.splice(i, 1);
  show();
}

function edits(i) {
  fName.value = document.querySelector(`.edit_fname${i}`).innerText;
  lName.value = document.querySelector(`.edit_lname${i}`).innerText;
  age.value = document.querySelector(`.edit_age${i}`).innerText;
  taDes.value = document.querySelector(`.edit_des${i}`).innerText;

  arr.splice(i, 1);
  show();
}
