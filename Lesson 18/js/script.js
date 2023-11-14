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
let buttonCase = null;

function saves(event) {
  event.preventDefault();
  if (
    fName.value == "" &&
    lName.value == "" &&
    age.value == "" &&
    genderMale.checked == false &&
    genderWoman.checked == false &&
    radio[0].checked == false &&
    radio[1].checked == false &&
    taDes.value == "" &&
    uzBox.checked == false &&
    ruBox.checked == false &&
    enBox.checked == false
  ) {
    return;
  }

  // OBJ
  let obj = {
    fn: fName.value,
    ln: lName.value,
    age: age.value,
    gender: genderWoman.checked ? selGenFunc[1].value : selGenFunc[0].value,
    type: student.checked ? radio[1].value : radio[0].value,
    lang:
      (uzBox.checked ? "Uzb" : "") +
      " " +
      (enBox.checked ? "Eng" : "") +
      " " +
      (ruBox.checked ? "Rus" : ""),
    color: inpColor.value,
    des: taDes.value,
  };

  // Edit
  if (buttonCase == null) {
    arr.push(obj);
  } else {
    arr[buttonCase] = obj;
    buttonCase = null;
  }

  // Clear Panel
  fName.value = "";
  lName.value = "";
  age.value = "";
  genderMale.checked = false;
  genderWoman.checked = false;
  radio[0].checked = false;
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
         <td>${arr[i].fn}</td>
         <td>${arr[i].ln}</td>
         <td>${arr[i].age}</td>
         <td>${arr[i].gender}</td>
         <td>${arr[i].type}</td>
         <td>${arr[i].lang}</td>
         <td style="background:${arr[i].color}"></td>
         <td>${arr[i].des}</td>
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
  buttonCase = i;

  let newObj = {
    fn: arr[i].fn,
    ln: arr[i].ln,
    age: arr[i].age,
    gender: arr[i].gender,
    des: arr[i].des,
  };

  fName.value = newObj.fn;
  lName.value = newObj.ln;
  age.value = newObj.age;
  taDes.value = newObj.des;

  // Gender
  if (arr[i].gender == "Male") {
    genderMale.checked = true;
  } else {
    genderWoman.checked = true;
  }

  // LANGUAGE
  if (arr[i].lang == "Uzb Eng Rus") {
    uzBox.checked = true;
    enBox.checked = true;
    ruBox.checked = true;
  }

  if (arr[i].lang == " Eng Rus") {
    enBox.checked = true;
    ruBox.checked = true;
  }

  if (arr[i].lang == "Uzb  Rus") {
    uzBox.checked = true;
    ruBox.checked = true;
  }
  if (arr[i].lang == "Uzb Eng ") {
    uzBox.checked = true;
    enBox.checked = true;
  }

  if (arr[i].lang == "Uzb  ") {
    uzBox.checked = true;
  }
  if (arr[i].lang == " Eng ") {
    enBox.checked = true;
  }
  if (arr[i].lang == "  Rus") {
    ruBox.checked = true;
  }
}
