const drawArea = document.getElementById("draw-area");
const resetButton = document.getElementById("reset");
const sizeButton = document.getElementById("size");
const colorButton = document.getElementById("color");
const colorLabel =  document.getElementById("colorLabel");
const sizeLabel =  document.getElementById("sizeLabel");
resetButton.addEventListener("click",resetGrid);
sizeButton.addEventListener("click",setGridSize);
colorButton.addEventListener("click",setColorMode);

let isBlack = true; //toggle variable

let numGrid = 16; //default grid size

//creates the drawing area using the size set by numGrid
function drawGrid(){
    sizeLabel.innerText = `Grid Size: ${numGrid} x ${numGrid}`;
    drawArea.innerHTML = "";
    for(let i = 0; i< numGrid*numGrid; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.setAttribute("id",i);
        grid.addEventListener("mouseover",changeColor);
        drawArea.appendChild(grid);    
    }  
}

//gets grid size from user input
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

//changes the div color 
function changeColor(e){
    let newColor = randomizeColor();
    this.style.backgroundColor = newColor;
}

//toggles between black and random color
function setColorMode(){
    if(isBlack){
        colorButton.innerHTML = "Black Mode";
        colorLabel.innerText = "Color: Random";
    }else{
        colorButton.innerHTML = "Color Mode";
        colorLabel.innerText = "Color: Black";
    }
    isBlack = !isBlack;

}

//randomizes color every div
function randomizeColor() {
    let bgColor;
    if(isBlack){
        bgColor = "black";
    }else{
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        bgColor = `rgb(${x}, ${y}, ${z})`
    }
    return bgColor;
}

//erases all colors from the grid
function resetGrid(){
    drawGrid();
}

//creates the default grid on load
window.onload = function() {
    drawGrid();
  };
