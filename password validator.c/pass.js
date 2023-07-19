const inpu = document.querySelector(".passfield input")
const anya = document.querySelector("passfield i")
const reqList = document.querySelectorAll(".req-list li")
const button = document.querySelector(".btnhold button")

const requirements = [
    {regex: /.{8,}/, index: 0}, //at least 8 characters
    {regex: /.[0-9]/, index: 1}, //at least one number
    {regex: /.[a-z]/, index: 2}, //at least one lowercase letter  
    {regex: /.[^A-Za-z0-9]/, index: 3}, //at least one special character
    {regex: /.[A-Z]/, index: 4}, //at least one uppercase letter
]



inpu.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value)
        const reqItem = reqList[item.index]

        if(isValid){
           button.className = "darko"
           reqItem.firstElementChild.className = "fa-solid fa-check"
           reqItem.classList.add("vlad")
        }else{
            button.className = ""
            reqItem.firstElementChild.className = "fa-solid fa-circle"
            reqItem.classList.remove("vlad")
        }
    })
})

//if(inpu.value === requirements){
//    beyt.className = "darko"
//}else{
//    beyt.className = ""
//}

anya.addEventListener("click", () => {
    inpu.type = inpu.type === "password" ? "text" : "password"

    anya.className = `fa-solid fa-eye${inpu.type === "password" ? "" : "-slash"}`
})