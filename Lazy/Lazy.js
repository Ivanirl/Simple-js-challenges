const pop = document.querySelector('#1')

function scroll(){
    window.addEventListener(scroll, ()=>{
        pop.className = "active"
    })
}
//does nit
scroll()