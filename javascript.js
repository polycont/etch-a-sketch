const gridBox = document.querySelector('.grid-container');

// Starting grid size.
let gridSize = 16;

createDiv(gridSize);
drawing();

// TODO: Add an eraser feature
// TODO: Add hover animation to buttons

const resize = document.getElementById('resize');

// Allows user to resize the canvas.
resize.addEventListener('click', () => {
    let gridSize = prompt('Please enter the desired width of your canvas. (16-100)');
    while (gridSize < 16 || gridSize > 100) {
        gridSize = prompt('Please enter a number between 16 and 100.');}
    clearDivs();
    createDiv(gridSize);
    drawing();
    clearCanvas();
});

clear.addEventListener('click', () => {
    clearCanvas();
});

random.addEventListener('click', () => {
    randomDraw();
});

// Adjusts grid size. 
// Creates divs and append to gridBox.
function createDiv(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement('div')
        gridBox.appendChild(div);}
    console.log(gridSize);
    gridBox.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`;
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

// Rainbow drawing function.
function randomDraw() {
    const gridDivs = document.querySelectorAll('div.grid-container > div');
    gridDivs.forEach((div) => {
        div.removeEventListener('click', () => {
            div.style.cssText = 'background-color: black';
        });
        })

    gridDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = `background-color: ${'#' + Math.floor(Math.random()*16777215).toString(16)}`;
        })
    })    
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