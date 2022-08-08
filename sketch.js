const drawArea = document.getElementById("draw-area");
const resetButton = document.getElementById("reset");
const sizeButton = document.getElementById("size");
resetButton.addEventListener("click",resetGrid);
sizeButton.addEventListener("click",setGridSize)

const grid = document.createElement("div");

let numGrid = 16;

function drawGrid(){
    drawArea.innerHTML="";
    for(let i = 0; i< numGrid*numGrid; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.setAttribute("id",i);
        grid.addEventListener("mouseover",changeColor);
        drawArea.appendChild(grid);    
    }  
}


function setGridSize(){
    numGrid = prompt("Enter Grid Size(2 to 100)");
    
    if(numGrid >= 2 && numGrid <= 100){
        console.log(numGrid);
        drawArea.setAttribute("style", `grid-template-columns: repeat(${numGrid}, auto)`); 
        drawGrid();
    }else{
        alert("Invalid Size. Try Again!")
        setGridSize();
    }

    
}

function changeColor(e){
    let newColor = randomizeColor();
    this.style.backgroundColor = newColor;
    //this.parentElement.parentElement.parentElement.style.backgroundColor = newColor;

}
function randomizeColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function resetGrid(){
    drawGrid();
}

window.onload = function() {
    drawGrid();
  };
