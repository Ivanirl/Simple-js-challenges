// if active page = 1 change class of bar to the 25% holder

const bodice = document.querySelector(".bodice");
const jace = document.querySelector(".jace");

let numba = 0;

function next() {
  numba += 1;
  const pop = "page" + numba;
  if (numba > 4) {
    console.log("end of the road broddie!");
    numba = 4
  } else {
    bodice.className = pop;
    console.log(numba);
  }
  progress()
}

function back() {
  numba -= 1;
  const pop = "page" + numba;
  if (numba < 0) {
    console.log("end of the road broddie!");
    numba = 0
  } else {
    bodice.className = pop;
    console.log(numba);
  }
}

function progress(){
    if(numba = 0){
        console.log("oneeeeeeeeeeeeeeeee")
    }else if(numba = 1){

    }else if(numba = 2){

    }else if(numba = 3){

    }else if(numba = 4){
        
    }else{
        console.log("poppycock!")
    }
}