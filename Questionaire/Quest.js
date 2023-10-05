const bodice = document.querySelector(".bodice");
const jace = document.querySelector("#jace");
let numba = 0;
const selected = document.querySelectorAll("button");
const capsule = {
 
}

//move to next page
function next() {
  numba += 1;
  const pop = "page" + numba;
  if(numba === 5){
    record();
  }else if(numba === 1){
    bodice.className = pop;
    progress();
    //record();
  }else if (numba > 4) {
    numba = 4;
  } else{
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
  const hehe = "Question" + numba

  selected.forEach(btn =>{
    btn.addEventListener("click", ()=>{
      console.log(btn.className + " for " + hehe)
      capsule[hehe] = btn.className
      console.log(capsule)
    })
  })
  console.log(hehe)
}

//record();
//put next inside record and put record in the button's html