// if active page = 1 change class of bar to the 25% holder

const bodice = document.querySelector(".bodice");
const jace = document.querySelector("#jace");

let numba = 0;

function next() {
  numba += 1;
  const pop = "page" + numba;
  if (numba > 4) {
    console.log("end of the road broddie!");
    numba = 4;
  } else {
    bodice.className = pop;
    console.log(numba);
    progress();
  }
}

function back() {
  numba -= 1;
  const pop = "page" + numba;
  if (numba < 0) {
    console.log("end of the road broddie!");
    numba = 0;
  } else {
    bodice.className = pop;
    console.log(numba);
    progress();
  }
}

function progress() {
  if (numba === 0) {
    jace.classList = "nil";
  } else if (numba === 1) {
    jace.classList = "one";
  } else if (numba === 2) {
    jace.classList = "two";
  } else if (numba === 3) {
    jace.classList = "three";
  } else if (numba === 4) {
    jace.className = "four";
  } else {
    console.log("poppycock!");
  }
  console.log(jace.className)
}
