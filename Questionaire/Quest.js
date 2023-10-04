const bodice = document.querySelector(".bodice");
const jace = document.querySelector("#jace");
let numba = 0;
const selected = document.querySelectorAll("button");


//move to next page
function next() {
  numba += 1;
  const pop = "page" + numba;
  if (numba > 4) {
    numba = 4;
  } else {
    bodice.className = pop;
    progress();
    record();
  }
}

//go back to previous page
function back() {
  numba -= 1;
  const pop = "page" + numba;
  if (numba < 0) {
    numba = 0;
  } else {
    bodice.className = pop;
    progress();
    record();
  }
}

//change the status of the progress bar
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
}

//a function that records what option was clicked.
//store the recorded information in a json file.

function record() {
  selected.forEach(btn =>{
    btn.addEventListener("click", ()=>{
      console.log(btn.className + " for " + numba)
    })
  })
}

console.log("Hello World!")