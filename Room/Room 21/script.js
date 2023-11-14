const searchInp = document.getElementById("searchInp");
const tbody = document.getElementById("tbody");
const pagin = document.getElementById("pagin");
const domain = "https://jsonplaceholder.typicode.com";
let currentPage = 1;
let posts = [];

axios({
  url: `${domain}/posts?_page=1&_limit=8`,
  method: "GET",
}).then((res) => {
  posts = res.data;
  drawPag(Math.ceil(res.headers["x-total-count"] / 8));
  drawPosts();
});

function drawPosts() {
  let s = "";

  if (posts.length < 1) {
    s = `
    <tr>
      <td colspan="3">POSTLAR TOPILMADI!</td>
    </tr>
  `;
  } else {
    for (const p of posts) {
      s += `
        <tr>
          <td>${p.id}</td>
          <td>${p.title}</td>
          <td>${p.body}</td>
        </tr>
      `;
    }
  }

  tbody.innerHTML = s;
}

function searchKey() {
  currentPage = 1;
  axios({
    url: `${domain}/posts?title_like=${searchInp.value}&_page=${currentPage}&_limit=8`,
    method: "GET",
  }).then((res) => {
    posts = res.data;
    drawPosts();
    drawPag(Math.ceil(res.headers["x-total-count"] / 8));
  });
}

function gotoPage(x) {
  currentPage = x;
  axios({
    url: `${domain}/posts?_page=${x}&_limit=8&title_like=${searchInp.value}`,
    method: "GET",
  }).then((res) => {
    posts = res.data;
    drawPosts();
    drawPag(Math.ceil(res.headers["x-total-count"] / 8));
  });
}

function drawPag(pageNumber) {
  let s = "";
  for (let i = 0; i < pageNumber; i++) {
    s += `
    <button onclick="gotoPage(${i + 1})" class="btn ${
      currentPage === i + 1 ? "btn-warning" : "btn-dark"
    } mx-1">${i + 1}</button>
    `;
  }
  pagin.innerHTML = s;
}
