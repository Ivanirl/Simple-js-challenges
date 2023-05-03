const caro = document.querySelector(".carousel")

function drag(e){
    caro.scrollLeft = e.pageX
}

caro.addEventListener("mousemove", drag)