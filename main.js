const grid_container = document.querySelector("#grid-container");
const btn = document.querySelector("#btn");
const btnReset = document.querySelector("#btn-reset");
let gridSize = 16; // default

function createGrid() {
    grid_container.innerHTML = "";
    // Calculating cellSize by dividing gridSize by width value and minus 1px of border and gap
    let cellSize = 500 / gridSize - 1;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            // Calculating cell width and height
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            // Event lisener
            cell.addEventListener("mouseover", () => {
                cell.classList.add("hovered-state");
            });
            grid_container.appendChild(cell);
        }
    }
}

function resetBtn() {
    btnReset.addEventListener("click", () => {
        createGrid();
    })
}

function newCanvas() {
    btn.addEventListener("click", () => {
        const newSize = parseInt(prompt("Enter a new size between 1 to 100"));
        if (!isNaN(newSize) && newSize > 0) {
            gridSize = newSize;
            createGrid();
        } else {
            alert("Please enter a valid size");
        }
    });
}

createGrid();
resetBtn();
newCanvas();


