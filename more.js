const caro = document.querySelector(".carousel")

let isdragging = false

const brag = () => {
    isdragging = true
    caro.classList.add("dragging")
}

const drag = (e) => {
    if(!isdragging) return //this means if isdragging is false return from here
    caro.scrollLeft = e.pageX
}


caro.addEventListener("mousedown", brag)
caro.addEventListener("mousemove", drag)