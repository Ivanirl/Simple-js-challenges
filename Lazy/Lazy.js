const pop = document.querySelector('#1')

function scroll(){
    window.addEventListener(scroll(50), ()=>{
        pop.className = "active"
    })
}

scroll()