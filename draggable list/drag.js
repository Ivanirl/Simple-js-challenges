const op = document.querySelector(".draggable-list .item")

const hey = op.querySelectorAll(".item")

hey.addEventListener("click", () => {
    op.innerHTML += `
    <div>
    <h1>
    I HATE YOU
    </h1>
    </div>
    `
    console.log("big boy pants")
})