const op = document.querySelector(".draggable-list")

const hey = op.querySelectorAll(".item")

hey.addEventListener("click", () => {
    op.innerHTML = `
    <div>
    <h1>
    I HATE YOU
    </h1>
    </div>
    `
})