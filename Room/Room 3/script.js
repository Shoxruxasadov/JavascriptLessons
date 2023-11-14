// if, else | Lesoon 3
// if -> agar
// else -> aks holda

// Masala 1
let num = 15;

if (num > 10) {
  console.log(num + ": 10dan katta");
} else {
  console.log(num + ": 10dan kichik");
}

// Masala 2
let age = 80;

if (age > 0) {
  if (age <= 10) {
    console.log("Bolakay");
  } else if (age <= 20) {
    console.log("Usmir");
  } else if (age <= 50) {
    console.log("Yigit");
  } else {
    console.log("Boboy");
  }
} else {
  console.log("Planda");
}

// Masala 3
let week = "Sunday";
let clock = 15;

if (
  clock >= 9 &&
  clock <= 18 &&
  (week == "Monday" ||
    week == "Tuesday" ||
    week == "Wednesday" ||
    week == "Thursday" ||
    week == "Friday" ||
    week == "Saturday")
) {
  console.log("OPEN");
} else if (
  week == "Sunday" ||
  (clock < 24 && clock > 18) ||
  (clock < 9 && clock >= 0)
) {
  console.log("CLOSED");
} else {
  console.log("ERROR");
}
