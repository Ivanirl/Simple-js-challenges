const hmhm = document.querySelector(".toggler");
const cont = document.querySelector(".container");
const punch = document.querySelectorAll(".punch");
const pun = document.getElementById("1");
const cony = document.querySelector(".boxy");

punch.forEach((item) => {
  item.addEventListener("click", () => {
    if (cony.innerText != '' && item.id ===  "equal") {
      cony.innerText = eval(cony.innerHTML);
      console.log('clicked')

    } else if (item.id === "delete") {
      let string = cony.innerText.toString();
      cony.innerText = string.substr(0, string.length - 1);
      console.log('clicked')

    } else if (item.id === "clear") {
      cony.innerText = " ";
      console.log('clicked')

    } else if (item.id === "equal") {
      cony.innerText = "";
      console.log("empty")
    }else if(item.id === "reset"){
        cony.innerText = ""
        console.clear()
        
    }else if(item.id === "space"){
        cony.innerText += "/"
    } else{
      cony.innerText += item.value;
      console.log('clicked')
    }
  });
});

hmhm.addEventListener("click", ()=>{
    console.log("clicked")
    cont.className = cont.className === "container" ? "darkcontainer" : "container"
})