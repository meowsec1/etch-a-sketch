const COLORS = ["#FF2500", "#00FA6A", "#0043FF"];
const container = document.querySelector(".container");

const createGrid = (size) => {
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 960/size + "px";
        square.style.height = 960/size + "px";
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        });
        square.addEventListener("mouseleave", () => {
            setTimeout(() => {
                square.style.backgroundColor = "";
            }, 500);
        });
        container.appendChild(square);
    }
}

const removeGrid = () => {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const gridSize = Number(prompt("Enter a new grid size!"));
    removeGrid();
    createGrid(gridSize);
})
