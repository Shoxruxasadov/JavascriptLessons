// ========== TOGGLE MODAL ========= \\
const modal = document.querySelector(".modal");
function toggleModal() {
  modal.classList.toggle("active");
  addNameInp.value = "";
  addPriceInp.value = "";
  addQuantityInp.value = "";
}

// ======= DRAW TABLE CONTENT ====== \\
const addNameInp = document.getElementById("addNameInp");
const addPriceInp = document.getElementById("addPriceInp");
const addQuantityInp = document.getElementById("addQuantityInp");
const tbody = document.getElementById("tbody");

let localUser = JSON.parse(localStorage.getItem("item"));
let item = localUser === null ? [] : localUser;
drawItem();

let buttonCase = null;

function pushItem() {
  if (
    addNameInp.value === "" ||
    addPriceInp.value === "" ||
    addQuantityInp.value === ""
  ) {
    return;
  }
  let obj = {
    name: addNameInp.value,
    price: Number(addPriceInp.value),
    quantity: Number(addQuantityInp.value),
  };

  if (buttonCase == null) {
    item.push(obj);
  } else {
    item[buttonCase] = obj;
    buttonCase = null;
  }
  addNameInp.value = "";
  addPriceInp.value = "";
  addQuantityInp.value = "";
  drawItem();
  toggleModal();
}

function drawItem() {
  let s = "";
  for (let i = 0; i < item.length; i++) {
    s += `<tr>
           <td>${i + 1}</td>
           <td>${item[i].name}</td>
           <td>${item[i].price * item[i].quantity}$</td>
           <td>${item[i].quantity}</td>
           <td>
              <button onclick="plusBtn(${i})">+1</button>
              <button onclick="minusBtn(${i})">-1</button>
              <button onclick="editBtn(${i})">edit</button>
              <button onclick="deleteBtn(${i})">delete</button>
           </td>
           <td>
              <div id="bgColor"></div>
              <input onchange="bgColorInp()" id="bgColorInp" type="color"/>
           </td>
        </tr>`;
  }
  tbody.innerHTML = s;
  localStorage.setItem(`item`, JSON.stringify(item));
}

function editBtn(i) {
  buttonCase = i;
  toggleModal();
  addNameInp.value = item[i].name;
  addPriceInp.value = item[i].price;
  addQuantityInp.value = item[i].quantity;
  drawItem();
}

function deleteBtn(i) {
  item.splice(i, 1);
  drawItem();
}

function bgColorInp() {
  const bgColorInp = document.getElementById("bgColorInp");
  const bgColor = document.getElementById("bgColor");
  bgColor.style.backgroundColor = bgColorInp.value;
}

function plusBtn(i) {
  item[i].quantity++;
  drawItem();
}

function minusBtn(i) {
  if (item[i].quantity <= 0) {
    return;
  } else {
    item[i].quantity--;
    drawItem();
  }
}

function quantityFn(i) {
  if (item[i].quantity < 0) {
    return;
  } else {
    Number(item[i].quantity);
  }
}
