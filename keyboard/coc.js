const hmhm = document.querySelector(".toggler");
const cont = document.querySelector(".container");
const punch = document.querySelectorAll(".punch");
const pun = document.getElementById("1");
const cony = document.querySelector(".boxy");
const space = document.querySelector("#space");

punch.forEach((item) => {
  item.addEventListener("click", () => {
    if (cony.innerText != '' && item.id ===  "equal") {
      cony.innerText = eval(cony.innerHTML);
      console.log('clicked')

    } else if (item.id === "delete") {
      let string = cony.value.toString();
      cony.value = string.substr(0, string.length - 1);
      console.log('clicked')

    }else if(item.id === "space"){
        cony.value += space.value
    } else{
      cony.value+= item.value;
      console.log('clicked')
    }
  });
});

hmhm.addEventListener("click", ()=>{
    console.log("clicked")
    cont.className = cont.className === "container" ? "darkcontainer" : "container"
})

function Case(){
  punch.forEach((item)=>{
    punch.className = punch.className ===  "ionic" ? "noShow" : "ionic"
  })
}