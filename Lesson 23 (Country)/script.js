// const countrySelect = document.getElementById("countrySelect");
// let countryAll = [];
// axios({
//   url: "./country.json",
//   method: "GET",
// }).then((res) => {
//   countryAll = res.data;
//   drawCountry();
// });
// function drawCountry() {
//   let s = `<input type="text" placeholder="Search Country">`;
//   for (const country of countryAll) {
//     s += `<option value="${country.country}">${country.country}</option>`;
//   }
//   countrySelect.innerHTML = s
// }

const options = document.getElementById("options");
const select = document.getElementById("select");
const content = document.getElementById("content");
const arrow = document.getElementById("arrow");
const searchCountryInp = document.getElementById("searchCountryInp");
const selectedLi = document.getElementById("selectedLi");

let countryAll2 = [];
axios({
  url: "./country.json",
  method: "GET",
}).then((res) => {
  countryAll2 = res.data;
  drawCountry2();
});
function drawCountry2() {
  let s = "";
  for (const country of countryAll2) {
    s += `<li onclick="updateName(this)" id="selectedLi">${country.country}</li>`;
  }
  options.innerHTML = s;
}

let count = true;
function drawSearchCountry() {
  if (count) {
    content.style.display = "block";
    arrow.style.transition = "0.3s";
    arrow.style.rotate = "180deg";
    count = false;
  } else {
    content.style.display = "none";
    arrow.style.transition = "0.3s";
    arrow.style.rotate = "0deg";
    count = true;
  }
}

function updateName(selected) {
  searchCountryInp.value = "";
  drawCountry2();
  select.firstElementChild.innerText = selected.innerText;
  content.style.display = "none";
  arrow.style.transition = "0.3s";
  arrow.style.rotate = "0deg";
  count = true;
}

// ========== Search Country ========== \\

function searchCountry() {
  axios({
    url: `./country.json`,
    method: "GET",
  }).then((res) => {
    let countryAll = res.data;
    let searchVal = searchCountryInp.value;
    let s = "";
    for (let i = 0; i < countryAll.length; i++) {
      if (
        countryAll[i].country.toLowerCase().startsWith(searchVal.toLowerCase())
      ) {
        s += `<li onclick="updateName(this)" id="selectedLi">${countryAll[i].country}</li>`;
      }
    }
    options.innerHTML = s;
    if (options.innerHTML === "") {
      s = `<li>Oops! Country not found</li>`;
      options.innerHTML = s;
    }
  });
}
