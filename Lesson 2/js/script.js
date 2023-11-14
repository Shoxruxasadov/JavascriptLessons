// Boolean exersice | Lesson 2

let a = -12
let res = a>0
console.log(res);


// Boolean 2
let a2 = 7;
let b2 = a2 % 2;
let res2 = b2 == 1;
console.log(res2);

// Boolean 3
let a3 = 4;
let b3 = a3 % 2;
let res3 = b3 == 0;
console.log(res3);

// Boolean 4
let a4 = 8;
let b4 = 1;
let res4 = a4 > 2 && b4 <= 3;
console.log(res4);

// Boolean 5
let a5 = 5;
let b5 = -5;
let res5 = a5 >= 0 && b5 < -2;
console.log(res5);

// Boolean 6
let a6 = 2;
let b6 = 4;
let c6 = 6;
let res6 = a6 <= b6 && b6 <= c6;
console.log(res6);

// Boolean 7
let a7 = 3;
let b7 = 6;
let c7 = 9;
let res7 = a7 < b7 && b7 < c7;
console.log(res7);

// Boolean 8
let a8 = 5;
let b8 = 7;
let c8 = a8 % 2 && b8 % 2;
let res8 = c8 == 1;
console.log(res8);

// Boolean 9
let a9 = 4;
let b9 = 9;
let c9 = a9 % 2 || b9 % 2;
let res9 = c9 == 1;
console.log(res9);

// Boolean 10
let a10 = 2;
let b10 = 3;
let a1_10 = a10 % 2;
let b1_10 = b10 % 2;
let res10 = (a1_10 == 0 && b1_10 == 1) || (a1_10 == 1 && b1_10 == 0);
console.log(res10);

// Boolean 11
let a11 = 5;
let b11 = 7;
let a1_11 = a11 % 2;
let b1_11 = b11 % 2;
let res11 = (a1_11 == 1 && b1_11 == 1) || (a1_11 == 0 && b1_11 == 0);
console.log(res11);

// Boolean 12
let a12 = 1;
let b12 = 2;
let c12 = 3;
let res12 = a12 > 0 && b12 > 0 && c12 > 0;
console.log(res12);

// Boolean 13
let a13 = -2;
let b13 = 3;
let c13 = -4;
let res13 = a13 > 0 || b13 > 0 || c13 > 0;
console.log(res13);

// Boolean 14
let a14 = -3;
let b14 = -4;
let c14 = 5;
let res14 =
  (a14 > 0 && b14 < 0 && c14 < 0) ||
  (a14 < 0 && b14 > 0 && c14 < 0) ||
  (a14 < 0 && b14 < 0 && c14 > 0);
console.log(res14);

// Booleanm 15
let a15 = 3;
let b15 = -4;
let c15 = 5;
let res15 =
  (a15 > 0 && b15 > 0 && c15 < 0) ||
  (a15 < 0 && b15 > 0 && c15 > 0) ||
  (a15 > 0 && b15 < 0 && c15 > 0);
console.log(res15);

// Boolean 16
let a16 = 28;
let b16 = Math.floor(a16 / 10) % 2;
let c16 = Math.floor(a16 % 10) % 2;
let res16 = b16 == 0 && c16 == 0;
console.log(res16);

// Boolean 17
let a17 = 357;
let b17 = Math.floor(a17 / 100) % 2;
let c17 = Math.floor((a17 % 100) / 10) % 2;
let d17 = Math.floor((a17 % 100) % 10) % 2;
let res17 = b17 == 1 && c17 == 1 && d17 == 1;
console.log(res17);

// Boolean 18
let a18 = 7;
let b18 = 4;
let c18 = 7;
let res18 = a18 == b18 || b18 == c18 || a18 == c18;
console.log(res18);

// Boolean 19
let a19 = -8;
let b19 = 3;
let c19 = 8;
let res19 =
  -a19 == b19 ||
  -b19 == c19 ||
  -a19 == c19 ||
  a19 == -b19 ||
  b19 == -c19 ||
  a19 == -c19;
console.log(res19);

// Boolean 20
let a20 = 567;
let b20 = Math.floor(a20 / 100);
let c20 = Math.floor((a20 % 100) / 10);
let d20 = Math.floor((a20 % 100) % 10);
let res20 = b20 != c20 && c20 != d20 && b20 != d20;
console.log(res20);

// Boolean 21
let a21 = 234;
let b21 = Math.floor(a21 / 100);
let c21 = Math.floor((a21 % 100) / 10);
let d21 = Math.floor((a21 % 100) % 10);
let res21 = b21 < c21 && c21 < d21;
console.log(res21);

// Boolean 22
let a22 = 765;
let b22 = Math.floor(a22 / 100);
let c22 = Math.floor((a22 % 100) / 10);
let d22 = Math.floor((a22 % 100) % 10);
let res22 = (b22 < c22 && c22 < d22) || (b22 > c22 && c22 > d22);
console.log(res22);

// Boolean 23
let a23 = 474;
let b23 = Math.floor(a23 / 100);
let c23 = Math.floor((a23 % 100) % 10);
let res23 = b23 == c23;
console.log(res23);

// Boolean 24
let a24 = 1;
let b24 = -2;
let c24 = -8;
let d24 = Math.pow(b24, 2) - 4 * a24 * c24;
let x1_24 = -b24 + (Math.sqrt(d24) / 2) * a24 == 5;
let x2_24 = -b24 - (Math.sqrt(d24) / 2) * a24 == -1;
let res24 = x1_24 && x2_24;
console.log(res24);
// Bu faqat mani masalamga ishlaydi!

// Boolean 25
let x25 = -10;
let y25 = 8;
let res25 = x25 < 0 && y25 > 0;
console.log(res25);

// Boolean 26
let x26 = 7;
let y26 = -14;
let res26 = x26 > 0 && y26 < 0;
console.log(res26);

// Boolean 27
let x27 = -15;
let y27 = 1;
let res27 = x27 < 0;
console.log(res27);

// Boolean 28
let x28 = 5;
let y28 = 6;
let res28 = (x28 > 0 && y28 > 0) || (x28 < 0 && y28 < 0);
console.log(res28);

// Boolean 30
let a30 = 5;
let b30 = 5;
let c30 = 5;
let res30 = a30 == b30 && b30 == c30;
console.log(res30);

// Boolean 31
let a31 = 5;
let b31 = 5;
let c31 = 3;
let res31 = a30 == b30;
console.log(res31);

// Boolean 32
let a32 = 3;
let b32 = 4;
let c32 = 5;
let res32 = a32 < b32 && b32 < c32;
console.log(res32);

// Boolean -> 29-savol va (Shaxmat)-> 34, 35, 36, 37, 38, 39, 40.
// Boolean -> 33-savol noto'g'ri.
