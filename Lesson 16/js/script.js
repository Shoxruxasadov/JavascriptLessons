let hwOne = document.getElementById("hw_one");
let hwTwo = document.getElementById("hw_two");
let hwThree = document.getElementById("hw_three");
let hwFour = document.getElementById("hw_four");

function hw1() {
  empty();
  hwOne.style.display = "block";
}
function hw2() {
  empty();
  hwTwo.style.display = "block";
}
function hw3() {
  empty();
  hwThree.style.display = "block";
}
function hw4() {
  empty();
  hwFour.style.display = "block";
}
function empty() {
  hwOne.style.display = "none";
  hwTwo.style.display = "none";
  hwThree.style.display = "none";
  hwFour.style.display = "none";
}

let inpName = document.getElementById("inp_name");
let inpPos = document.getElementById("inp_pos");
let inpSal = document.getElementById("inp_sal");
let tbody = document.getElementById("tbody");
let arr = [];

function add() {
  let obj = {
    name: inpName.value,
    pos: inpPos.value,
    sal: inpSal.value,
  };
  arr.push(obj);
  inpName.value = "";
  inpPos.value = "";
  inpSal.value = "";
  show();
}

function show() {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += `
            <tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    ${arr[i].name}
                </td>
                <td>
                    ${arr[i].pos}
                </td>
                <td>
                    ${arr[i].sal}
                </td>
                <td>
                    <button onclick="remove(${i})"><b>&#x2715;</b></button>
                </td>   
            </tr>  
        `;
  }
  tbody.innerHTML = s;
}

function remove(i) {
  arr.splice(i, 1);
  show();
}

// Homework Two
let apple = document.getElementById("apple");
let microsoft = document.getElementById("microsoft");
let google = document.getElementById("google");
let facebook = document.getElementById("facebook");

function app(res) {
  res.checked
    ? (apple.style.background = "#9ec3ff")
    : (apple.style.background = "#fafafa");
}
function micro(res) {
  res.checked
    ? (microsoft.style.background = "#9ec3ff")
    : (microsoft.style.background = "#fafafa");
}
function goo(res) {
  res.checked
    ? (google.style.background = "#9ec3ff")
    : (google.style.background = "#fafafa");
}
function face(res) {
  res.checked
    ? (facebook.style.background = "#9ec3ff")
    : (facebook.style.background = "#fafafa");
}

// Homework 3
let inpTodo = document.getElementById("inp_todo");
let adden = document.getElementById("adden");
let haveTask = document.getElementById("have-task");
let arrays = [];
function addTodo() {
  let todo = inpTodo.value;
  arrays.push(todo);
  inpTodo.value = "";
  showTodo();
  console.log(arrays);
}

function showTodo() {
  let empbox = "";
  for (let a = 0; a < arrays.length; a++) {
    empbox += `
        <div>
            <p>${arrays[a]}</p>
            <button onclick="deletes(${a})"><img src="./img/recycle.svg"></button>
        </div>
    `;
    haveTask.innerText = `Your have ${a + 1} pending tasks`;
  }
  adden.innerHTML = empbox;
}

function deletes(a) {
  arrays.splice(a, 1);
  showTodo();
}

function clearAll() {
  arrays = [];
  adden.innerHTML = "";
  haveTask.innerText = `Your have 0 pending tasks`;
}

// Homework 4
let subjectForm = document.getElementById("subject_form");
let messageForm = document.getElementById("message_form");
let messages = document.getElementById("messages");
let arrForm = [];
function saves() {
  let objForm = {
    subject: subjectForm.value,
    message: messageForm.value,
  };
  arrForm.push(objForm);
  showForm();
}

function showForm() {
  let boxForm = "";
  for (let f = 0; f < arrForm.length; f++) {
    boxForm += `
        <div class="childmess">
            <h1>${f + 1}. ${arrForm[f].subject}</h1>
            <p>${arrForm[f].message}</p>
        </div>
          `;
  }
  messages.innerHTML = boxForm;
}
