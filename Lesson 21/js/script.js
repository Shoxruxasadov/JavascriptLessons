const cardWrapper = document.getElementById("card-wrapper");
const drawContent = document.getElementById("draw-content");
const drawAlbum = document.getElementById("drawAlbum");
const domain = "https://jsonplaceholder.typicode.com";

drawCard();
function drawCard() {
  let s = "";
  axios({
    url: `${domain}/users`,
    method: "GET",
  }).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      s += `
        <div class="card">
          <div class="front">
            <div class="iden"><span>${res.data[i].id}</span></div>
            <div class="logo-img"><img src="./image/users/user${
              res.data[i].id
            }.jpg" /></div>
            <div class="front-content">
              <span><i class="fa-solid fa-user"></i> ${
                res.data[i].username
              }</span>
              <h1>${res.data[i].name}</h1>
              <h2><i class="fa-solid fa-envelope"></i> ${res.data[i].email}</h2>
              <h3><i class="fa-solid fa-phone"></i> ${res.data[i].phone}</h3>
              <h4><i class="fa-solid fa-globe"></i> ${res.data[i].website}</h4>
            </div>
          </div>
          <div class="back">
            <div class="back-content">
              <div>
                  <h1>Company</h1>
                  <p>Name: ${res.data[i].company.name}</p>
                  <p>CatchPhrase: ${res.data[i].company.catchPhrase}</p>
                  <p>BS: ${res.data[i].company.bs}</p>
              </div>
              <div>
                  <h1>Address</h1>
                  <p>Street: ${res.data[i].address.street} / City: ${
        res.data[i].address.city
      }</p>
                  <p>Suite: ${res.data[i].address.suite} / Zipcode: ${
        res.data[i].address.zipcode
      }</p>
              </div>
            </div>
            <div class="btn-wrapper">
              <button onclick="drawTodos(${i + 1})">Todos</button>
              <button onclick="drawAlbums(${i + 1})">Albums</button>
              <button onclick="drawPosts(${i + 1})">Posts</button>
            </div>
          </div>
        </div>
      `;
    }
    cardWrapper.innerHTML = s;
  });
}

function drawTodos(i) {
  let s = "";
  axios({
    url: `${domain}/users/${i}/todos`,
    method: "GET",
  }).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      s += `
            <div class="todos-content">
              <div>
                <input type="checkbox" ${
                  res.data[i].completed === true ? "checked" : ""
                } />
                <p>${res.data[i].title}</p>
              </div>
              <span>${res.data[i].id}</span>
            </div>
          `;
    }
    drawContent.innerHTML = s;
  });
}

function drawAlbums(i) {
  drawContent.innerHTML = `<div id="drawAlbum" class="albums-wrapper">`;
  const drawAlbum = document.getElementById("drawAlbum");
  let s = "";
  axios({
    url: `${domain}/users/${i}/albums`,
    method: "GET",
  }).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      s += `    
          <div class="albums-content">
            <div>
              <span>${res.data[i].id}</span>
              <p>${res.data[i].title}</p>
            </div>
            <button onclick="showAlbums(${res.data[i].id})">Show Album</button>
          </div>
          `;
    }
    drawAlbum.innerHTML = s;
  });
}

function drawPosts(i) {
  drawContent.innerHTML = `<div id="draw-posts" class="posts-wrapper"></div>`;
  const drawPost = document.getElementById("draw-posts");
  let s = "";
  axios({
    url: `${domain}/users/${i}/posts`,
    method: "GET",
  }).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      s += `
          <div class="posts-content">
            <div class="front">
              <div class="iden"><span>${res.data[i].id}</span></div>
              <div class="title-posts">${res.data[i].title}</div>
            </div>
            <div class="back">
              <div class="body-posts">${res.data[i].body}</div>
            </div>
          </div>
          `;
    }
    drawPost.innerHTML = s;
  });
}

function showAlbums(i) {
  drawContent.innerHTML = `<div id="show-album" class="show-albums-wrapper"></div>`;
  const showAlbum = document.getElementById("show-album");
  let s = "";
  axios({
    url: `${domain}/albums/${i}/photos`,
    method: "GET",
  }).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      s += `
          <div class="showAlbums-content">
              <div class="iden"><span>${res.data[i].id}</span></div>
              <img src="${res.data[i].url}">
              <div class="title-album">${res.data[i].title}</div>
          </div>
          `;
    }
    showAlbum.innerHTML = s;
  });
}

const backToUpBtn = document.getElementById("backToUpBtn");
backToUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("Hello World");
});
