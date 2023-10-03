// if active page = 1 change class of bar to the 25% holder

const bodice = document.querySelector(".bodice")

const numba = 0

//bodice.classList = "noshow"

function next(){
    const gugu = numba + 1
    const pop = "page"+gugu
    bodice.className = pop
}