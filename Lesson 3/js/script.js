 // if,else | Exersice 3

// if 1.
let a1 = 9;
if (a1 > 0) {
  a1++;
} else {
  a1;
}
console.log("2:  " + a1);

// if 2.
let a2 = -8;
if (a2 > 0) {
  a2++;
} else {
  a2 -= 2;
}
console.log("2:  " + a2);

// if 3.
let a3 = 0;
if (a3 > 0) {
  a3++;
} else if (a3 < 0) {
  a3 -= 2;
} else {
  a3 = 10;
}
console.log("3:  " + a3);

// if 4.
let a4 = -2;
let b4 = 4;
let c4 = 8;
let res4 = 0;

if (a4 > 0) {
  a4 = 1;
  res4 += a4;
} else {
  a4 = a4;
}
if (b4 > 0) {
  b4 = 1;
  res4 += b4;
} else {
  b4 = b4;
}
if (c4 > 0) {
  c4 = 1;
  res4 += c4;
} else {
  c4 = c4;
}
console.log("4:  " + (res4 + "ta musbat"));

// if 5.
let a5 = -5;
let b5 = -1;
let c5 = 5;
let resPlus5 = 0;
let resMinus5 = 0;

if (a5 > 0) {
  a5 = 1;
  resPlus5 += a5;
} else {
  a5 = 1;
  resMinus5 += a5;
}

if (b5 > 0) {
  b5 = 1;
  resPlus5 += b5;
} else {
  b5 = 1;
  resMinus5 += b5;
}

if (c5 > 0) {
  c5 = 1;
  resPlus5 += c5;
} else {
  c5 = 1;
  resMinus5 += c5;
}

console.log(
  "5:  " + (resPlus5 + "ta musbat") + " | " + (resMinus5 + "ta manfiy")
);

// if 6.
let a6 = 8;
let b6 = 12;

if (a6 > b6) {
  console.log("6:  A = " + a6 + "  katta");
} else {
  console.log("6:  B = " + b6 + "  katta");
}

// if 7.
let a7 = 5;
let b7 = 17;

if (b7 > a7) {
  console.log("7:  " + a7 + " kichik");
} else {
  console.log("7:  " + b7 + " kichik");
}

// if 8.
let a8 = 19;
let b8 = 9;

if (a8 > b8) {
  console.log("8:  " + a8 + " katta, " + b8 + " kichik");
} else {
  console.log("8:  " + b8 + " katta, " + a8 + " kichik");
}

// if 9.
let a9 = 3;
let b9 = 4;

if (b9 > a9) {
  console.log("9:  " + a9 + " va " + b9);
} else {
  console.log();
}

// if 10.
let a10 = 3;
let b10 = 4;

if (a10 == b10) {
  a10 = 0;
  b10 = 0;
  let ab10 = a10 + b10;
  console.log("10:  " + ab10);
} else {
  let res10 = a10 + b10;
  console.log("10:  " + res10);
}

// if 11.
let a11 = 3;
let b11 = 4;

if (a11 == b11) {
  a11 = 0;
  b11 = 0;
  let ab11 = a11 + b11;
  console.log("11:  " + ab11);
} else {
  if (a11 > b11) {
    console.log("11:  " + a11);
  } else {
    console.log("11:  " + b11);
  }
}

// if 12.
let a12 = 7;
let b12 = 6;
let c12 = 5;

if (a12 > b12 && b12 > c12) {
  console.log("12:  " + c12);
} else if (b12 > c12 && c12 > a12) {
  console.log("12:  " + a12);
} else if (c12 > a12 && a12 > b12) {
  console.log("12:  " + b12);
} else {
  console.log();
}

// if 13.  (???)
let a13 = 8;
let b13 = 2;
let c13 = 7;

if (a13 > b13 && b13 < c13) {
  console.log("13:  " + b13);
} else {
  console.log();
}
if (b13 > a13 && a13 < c13) {
  console.log("13:  " + a13);
} else {
  console.log();
}
if (a13 > c13 && c13 < b13) {
  console.log("13:  " + c13);
} else {
  console.log();
}

// if 14.
let a14 = 14;
let b14 = 4;
let c14 = 8;

if (a14 > b14 && b14 > c14) {
  console.log("14:  " + c14 + " va " + a14);
} else if (b14 > c14 && c14 > a14) {
  console.log("14:  " + a14 + " va " + b14);
} else if (c14 > a14 && a14 > b14) {
  console.log("14:  " + b14 + " va " + c14);
} else if (a14 > c14 && c14 > b14) {
  console.log("14:  " + b14 + " va " + a14);
} else if (b14 > c14 && c14 > a14) {
  console.log("14:  " + a14 + " va " + b14);
} else if (a14 > b14 && b14 > c14) {
  console.log("14:  " + c14 + " va " + a14);
} else {
  console.log("14:  error");
}

// if 15.  (???)
console.log("15:  ???");

// if 16.
let a16 = 9;
let b16 = 3;
let c16 = -6;

if (a16 < b16 && b16 < c16) {
  a16 = Math.pow(a16, 2);
  b16 = Math.pow(b16, 2);
  c16 = Math.pow(c16, 2);
} else {
  a16 = -a16;
  b16 = -b16;
  c16 = -c16;
}
console.log("16: ", a16, b16, c16);

// if 17.
let a17 = 8;
let b17 = 2;
let c17 = -4;

if ((a17 < b17 && b17 < c17) || (a17 > b17 && b17 > c17)) {
  a17 = Math.pow(a17, 2);
  b17 = Math.pow(b17, 2);
  c17 = Math.pow(c17, 2);
} else {
  a17 = -a17;
  b17 = -b17;
  c17 = -c17;
}
console.log("17:  " + a17, b17, c17);

// if 18.  (???)
console.log("18:  ???");
// if 19.  (???)
console.log("19:  ???");

// if 20.
let a20 = 2;
let b20 = 4;
let c20 = 8;
