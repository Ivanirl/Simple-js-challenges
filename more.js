const caro = document.querySelector(".carousel")

let isdragging = false

function brag(){
    isdragging = true
}

function drag(e){
    if(!isdragging) return //this means if isdragging is false return from here
    caro.scrollLeft = e.pageX
}


caro.addEventListener("mousedown", brag)
caro.addEventListener("mousemove", drag)