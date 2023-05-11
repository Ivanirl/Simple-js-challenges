const op = document.querySelector(".draggable-list")

const item = document.querySelectorAll(".item")

item.forEach(item=>{
    item.addEventListener("click", ()=>{
        op.innerHTML += `<button>Howdy</button>`
    })
})


    console.log("big boy pants")
