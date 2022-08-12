// I need to create a grid that can expand and shrink
// based on the user's input. When the user mouses over the grid,
// a color should be applied to any divs they mouse over.

// TODO Re-add the ${} formatting to change the grid-template with CSS.

const gridBox = document.querySelector('.grid-container');

// Starting grid size.
let gridSize = 16;

createDiv();
drawing();

// TODO: Clear 'divs' array every time button is hit
// TODO: Clear gridBox every time button is hit
// When the user changes the grid size...
const resize = document.getElementById('resize');

resize.addEventListener('click', () => {
    let gridSize = prompt('Please enter the desired width of your canvas.');
    while (gridSize < 16 || gridSize > 100) {
        gridSize = prompt('Please enter a number between 16 and 100.');}
    clearDivs();
    createDiv();
    drawing();
    clearCanvas();
    return gridSize;
});

clear.addEventListener('click', () => {
    clearCanvas();
});

// AdjustS grid size. 
// Creates divs and append to gridBox.
function createDiv() {
    for(let i = 0; i < gridSize * gridSize; i++){
        let div = document.createElement('div')
        gridBox.appendChild(div)}
    gridBox.style.gridTemplateColumns = `repeat(100, 1fr);`;
    gridBox.style.gridTemplateRows = `repeat(100, 1fr);`;
    }

// Function to add drawing functionality to the grid.
function drawing() {
    const gridDivs = document.querySelectorAll('div.grid-container > div');
    gridDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = 'background-color: black';
        })
    });
    }

// Clear divs.
function clearDivs() {
    while (gridBox.hasChildNodes()) {
        gridBox.removeChild(gridBox.firstChild);
    }
}

// Clears canvas.
function clearCanvas() {
    const gridDivs = document.querySelectorAll('div.grid-container > div');
    gridDivs.forEach((div) => {
       div.style.cssText = 'background-color: white';
    });
    }