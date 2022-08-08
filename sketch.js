const drawArea = document.getElementById("draw-area");
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click",resetGrid);

const grid = document.createElement("div");

let numGrid = 16;

function changeColor(e){
    this.style.backgroundColor=randomizeColor();

}
function randomizeColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function resetGrid(){
    location.reload();
}

for(let i = 0; i< numGrid*numGrid; i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("id",i);
    grid.addEventListener("mouseover",changeColor);
    drawArea.appendChild(grid);
}



