const hmhm = document.querySelector(".toggler");
const cont = document.querySelector(".container");
const punch = document.querySelectorAll(".punch");
const punchy = document.querySelectorAll(".punchy");
const pun = document.getElementById("1");
const cony = document.querySelector(".boxy");
const space = document.querySelector("#space");
const one = document.querySelectorAll(".ionic");
const letter = document.querySelectorAll(".L")

punch.forEach((item) => {
  item.addEventListener("click", () => {
    if (cony.innerText != "" && item.id === "equal") {
      cony.innerText = eval(cony.innerHTML);
      console.log("clicked");
    } else if (item.id === "delete") {
      let string = cony.value.toString();
      cony.value = string.substr(0, string.length - 1);
      console.log("clicked");
    } else if (item.id === "space") {
      cony.value += space.value;
    } else {
      cony.value += item.value;
      console.log("clicked");
    }
  });
});

let poop = true;

function Case() {
  if (poop === true) {
    punchy.forEach((item) => {
      item.classList.remove("noShow");
    });
    one.forEach((item) => {
      item.classList.add("noShow");
    });
    poop = false;
  } else {
    punchy.forEach((item) => {
      item.classList.add("noShow");
    });
    one.forEach((item) => {
      item.classList.remove("noShow");
    });
    poop = true;
  }
}

let oppa = true

function Upper() {
  if (oppa === true) {
    letter.forEach((item) => {
      item.value = item.value.toUpperCase();
      item.textContent = item.innerHTML.toUpperCase();
    });
    oppa = false
  }else{
    letter.forEach((item) => {
      item.value = item.value.toLowerCase();
      item.textContent = item.innerHTML.toLowerCase();
    });
    oppa = true
  }
}
