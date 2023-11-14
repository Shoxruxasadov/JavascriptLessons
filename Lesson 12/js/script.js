let hwInp = document.getElementById("hwInp");
let exInp = document.getElementById("exInp");
let nInp = document.getElementById("nInp");
let mInp = document.getElementById("mInp");

let x = 0;
let k = 1;

function draw() {
  if (hwInp.value == 1) {
    hwInp.value = "";
    for (i = 1; i <= 100; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 2) {
    hwInp.value = "";
    for (i = 1; i < 100; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 3) {
    hwInp.value = "";
    for (i = 10; i <= 20; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 4) {
    hwInp.value = "";
    for (i = 10; i < 20; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 5) {
    hwInp.value = "";
    for (i = 26; i < 30; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 6) {
    hwInp.value = "";
    for (i = 100; i > 0; i--) {
      console.log(i);
    }
  } else if (hwInp.value == 7) {
    hwInp.value = "";
    for (i = 99; i > 0; i--) {
      console.log(i);
    }
  } else if (hwInp.value == 8) {
    hwInp.value = "";
    for (i = 20; i >= 10; i--) {
      console.log(i);
    }
  } else if (hwInp.value == 9) {
    hwInp.value = "";
    for (i = -10; i <= 10; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 10) {
    hwInp.value = "";
    for (i = 1; i <= 100; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 11) {
    hwInp.value = "";
    for (i = 1; i <= 101; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 12) {
    hwInp.value = "";
    for (i = 1; i <= 105; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 13) {
    hwInp.value = "";
    for (i = 100; i <= 120; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 14) {
    hwInp.value = "";
    for (i = 120; i >= 100; i--) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 15) {
    hwInp.value = "";
    for (i = +nInp.value; i <= +mInp.value; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 16) {
    hwInp.value = "";
    for (i = +nInp.value; i <= +mInp.value; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 17) {
    hwInp.value = "";
    for (i = +nInp.value; i >= +mInp.value; i--) {
      console.log(i);
    }
  } else if (hwInp.value == 18) {
    hwInp.value = "";
    for (i = +nInp.value; i >= +mInp.value; i--) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 19) {
    hwInp.value = "";
    for (i = +nInp.value; i <= 2 * +nInp.value; i++) {
      console.log(i);
    }
  } else if (hwInp.value == 20) {
    hwInp.value = "";
    for (i = +nInp.value; i <= 10 * +nInp.value; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else if (hwInp.value == 21) {
    hwInp.value = "";
    for (i = 1; i <= 10; i++) {
      x += i;
      console.log(x);
    }
  } else if (hwInp.value == 22) {
    hwInp.value = "";
    for (i = 20; i <= 30; i++) {
      x += i;
      console.log(x);
    }
  } else if (hwInp.value == 23) {
    hwInp.value = "";
    for (i = -100; i < 100; i++) {
      x += i;
      console.log(x);
    }
  } else if (hwInp.value == 24) {
    hwInp.value = "";
    for (i = +nInp.value; i <= +mInp.value; i++) {
      x += i;
      console.log(x);
    }
  } else if (hwInp.value == 25) {
    hwInp.value = "";
    for (i = 1; i <= 10; i++) {
      k = k * i;
      console.log(k);
    }
  } else if (hwInp.value == 26) {
    hwInp.value = "";
    for (i = 10; i <= 20; i++) {
      k *= i;
      console.log(k);
    }
  } else if (hwInp.value == 27) {
    hwInp.value = "";
    for (i = +nInp.value; i <= +mInp.value; i++) {
      k *= i;
      console.log(k);
    }
  } else if (hwInp.value == 28) {
    hwInp.value = "";
    for (i = +nInp.value; i <= +mInp.value; i++) {
      if (i % 2 == 0) {
        x += i;
        console.log(x);
      }
    }
  } else if (hwInp.value == 29) {
    hwInp.value = "";
    for (i = +nInp.value; i <= +mInp.value; i++) {
      if (i % 2 == 1) {
        k *= i;
        console.log(k);
      }
    }
  } else {
    hwInp.value = "";
  }
}
