const wrapper = document.querySelector(".wrapper")
const caro = document.querySelector(".carousel")
const arrg = document.querySelectorAll(".wrapper i")
const firstCardWidth = caro.querySelector(".cards").offsetWidth
const theKids = [...caro.children]

let isdragging = false, StartX, StartScrollLeft, timeoutId

let CardPerView = Math.round(caro.offsetWidth/ firstCardWidth)

theKids.slice(-CardPerView).reverse().forEach(card => {
    caro.insertAdjacentHTML("afterBegin", card.outerHTML) //inserts the last few cards to the begining of the carousel
})

theKids.slice(0, CardPerView).forEach(card => {
    caro.insertAdjacentHTML("beforeEnd", card.outerHTML)//inserts copies of the first few cards to the end 
})


arrg.forEach(btn =>{
    btn.addEventListener("click", () => {
        caro.scrollLeft += btn.id === "left" ? -firstCardWidth: firstCardWidth //google this if you value your life. its supposed to take care of making the arrow buttons work
    })
})

const brag = (e) => {
    isdragging = true
    caro.classList.add("dragging")
    //to record the inital cursor and scroll position of the carousel
    StartX = e.pageX
    StartScrollLeft = caro.scrollLeft
}

const drag = (e) => {
    if(!isdragging) return //this means if isdragging is false return from here
    caro.scrollLeft = StartScrollLeft - (e.pageX - StartX)  // this updates the scroll position of the carousel based on the cursor position
}

const autoplay =() => {
    if(window.innerWidth < 800) return
    timeoutId = setTimeout(() => caro.scrollLeft += firstCardWidth, 2500)
}

autoplay()

const dragStop = () => {
    isdragging = false
    caro.classList.remove("dragging")
}

const infinititties = () => {
    if(caro.scrollLeft === 0){
        caro.classList.add("no-trans")
        caro.scrollLeft = caro.scrollWidth - (3 * caro.offsetWidth)
        caro.classList.remove("no-trans")

    }
    else if(Math.ceil(caro.scrollLeft) === caro.scrollWidth - caro.offsetWidth){
        caro.classList.add("no-trans")
        caro.scrollLeft = caro.offsetWidth
        caro.classList.remove("no-trans")
    }

    clearTimeout(timeoutId)
    if(!wrapper.matches(":hover")) autoplay()
}

caro.addEventListener("mousedown", brag)
caro.addEventListener("mousemove", drag)
document.addEventListener("mouseup", dragStop)
caro.addEventListener("scroll", infinititties)
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId))
caro.addEventListener("mouseleave", autoplay)