const sorta = document.querySelector(".draggable-list")

const booton = document.querySelector(".draggable-list button")
const item = document.querySelectorAll(".item")
const bod = document.querySelector("body")

item.forEach(item=>{
    item.addEventListener("dragstart", ()=>{
        setTimeout(()=> item.classList.add("dragging"),0)
    })
    item.addEventListener("dragend", ()=> {item.classList.remove("dragging")})
})


//to learn


const initSortableList =  (e) => {
    e.preventDefault()

    const DraggingItem = sorta.querySelector(".dragging")

    const siblings = [...document.querySelectorAll(".item:not(.dragging)")]

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    })

    sorta.insertBefore(DraggingItem, nextSibling)
}

sorta.addEventListener("dragover", initSortableList)
sorta.addEventListener("dragenter", e => e.preventDefault())

console.log("big boy pants")
