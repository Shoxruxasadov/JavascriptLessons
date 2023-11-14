// let userArr = {
//   fn: "Shoxrux",
//   ln: "Asadov",
// };

// localStorage.setItem("users", JSON.stringify(userArr));

let g = localStorage.getItem("users");

let newArr = {
  firstName: JSON.parse(g).fn,
  lastName: JSON.parse(g).ln,
};

console.log(JSON.parse(g));
