// ===== Animation Navbar ===== \\
let list = document.querySelectorAll(".list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

// ========== JS DOM ========== \\
let users = document.getElementById("usersSection");
let posts = document.getElementById("postsSection");
let coment = document.getElementById("comentSection");
let todos = document.getElementById("todosSection");
let albums = document.getElementById("albumsSection");

function stepUsers() {
  empty();
  users.style.display = "block";
}
function stepPosts() {
  empty();
  posts.style.display = "block";
}
function stepComments() {
  empty();
  coment.style.display = "block";
}
function stepTodos() {
  empty();
  todos.style.display = "block";
}
function stepAlbums() {
  empty();
  albums.style.display = "block";
}

function empty() {
  users.style.display = "none";
  posts.style.display = "none";
  coment.style.display = "none";
  todos.style.display = "none";
  albums.style.display = "none";
}

// ========== AXIOS USERS ========== \\
let tbody = document.getElementById("tbody");

drawUsers();
function drawUsers() {
  let s = "";

  axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  }).then(function (res) {
    for (let i = 0; i < res.data.length; i++) {
      s += `
         <tr>
            <td>${res.data[i].id}</td>
            <td>${res.data[i].name}</td>
            <td>@${res.data[i].username}</td>
            <td>${res.data[i].email}</td>
            <td>${res.data[i].phone}</td>
            <td>${res.data[i].website}</td>
         </tr>
        `;
    }
    tbody.innerHTML = s;
  });
}

// ========== AXIOS POSTS ========== \\
let postBody = document.getElementById("postBody");

drawPosts();
function drawPosts() {
  let s = "";

  axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  }).then(function (res) {
    for (let i = 0; i < res.data.length; i++) {
      s += `
        <div class="post-content">
          <div class="id-posts"><span>${res.data[i].id}</span></div>
          <div class="h1-post">
            <h1>${res.data[i].title}</h1>
          </div>
          <div class="p-post">
            <p>${res.data[i].body}</p>
          </div>
        </div>
        `;
    }
    postBody.innerHTML = s;
  });
}

// ========= AXIOS COMMENTS ========= \\
let comentBody = document.getElementById("comentBody");

drawComent();
function drawComent() {
  let s = "";

  axios({
    url: "https://jsonplaceholder.typicode.com/comments",
    method: "GET",
  }).then(function (res) {
    for (let i = 0; i < res.data.length; i++) {
      s += `
         <div>
            <div class="id-posts"><span>${res.data[i].id}</span></div> 
            <h1>${res.data[i].name}</h1>
            <hr/>
            <h3>${res.data[i].email}</h3>
            <hr/>
            <p>${res.data[i].body}</p>
         </div>
        `;
    }
    comentBody.innerHTML = s;
  });
}

// ========= AXIOS TODOS ========= \\
let todosBody = document.getElementById("todosBody");

drawTodos();
function drawTodos() {
  let s = "";

  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
  }).then(function (res) {
    for (let i = 0; i < res.data.length; i++) {
      s += `
         <div class="todos-content">
            <div class="numberNameTodos">
              <div class="numberTodos"><span>${res.data[i].id}</span></div>
              <div class="nameTodos"><h1>${res.data[i].title}</h1></div>
            </div>
            <div class="inpTodos"><input type="checkbox" ${
              res.data[i].completed === true ? "checked" : ""
            } /></div>
          </div>
        `;
    }
    todosBody.innerHTML = s;
  });
}

// ========= AXIOS ALBUMS ========= \\
let albumsBody = document.getElementById("albumsBody");

drawAlbums();
function drawAlbums() {
  let s = "";

  axios({
    url: "https://jsonplaceholder.typicode.com/albums",
    method: "GET",
  }).then(function (res) {
    for (let i = 0; i < res.data.length; i++) {
      s += `
         <div class="albums-content">
            <div class="numberAlbums"><span>${res.data[i].id}</span></div>
            <div class="nameAlbums"><h1>${res.data[i].title}</h1></div>
         </div>
        `;
    }
    albumsBody.innerHTML = s;
  });
}
