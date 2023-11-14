const searchInp = document.getElementById("searchInp");
const tbody = document.getElementById("tbody");
const pagin = document.getElementById("pagin");
const domain = "https://jsonplaceholder.typicode.com";
let currentPage = 1;
let posts = [];

axios({
  url: `${domain}/posts?_page=1&_limit=9`,
  method: "GET",
}).then((res) => {
  posts = res.data;
  drawPag(Math.ceil(res.headers["x-total-count"] / 9));
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
        <div class="tbody-content">
          <span>${p.id})</span>
          <span>${p.title}</span>
          <div class="hr"></div>
          <p>${p.body}</p>
        </div>
      `;
    }
  }

  tbody.innerHTML = s;
}

function searchKey() {
  currentPage = 1;
  axios({
    url: `${domain}/posts?title_like=${searchInp.value}&_page=${currentPage}&_limit=9`,
    method: "GET",
  }).then((res) => {
    posts = res.data;
    drawPosts();
    drawPag(Math.ceil(res.headers["x-total-count"] / 9));
  });
}

function gotoPage(x) {
  currentPage = x;
  axios({
    url: `${domain}/posts?_page=${x}&title_like=${searchInp.value}&_limit=9`,
    method: "GET",
  }).then((res) => {
    posts = res.data;
    drawPosts();
    drawPag(Math.ceil(res.headers["x-total-count"] / 9));
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
