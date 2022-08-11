// I need to create a grid that can expand and shrink
// based on the user's input. When the user mouses over the grid,
// a color should be applied to any divs they mouse over.

// TODO Re-add the ${} formatting to change the grid-template with CSS.

const gridBox = document.querySelector('.grid-container');

// Starting grid size.
let gridSize = 16;

/*

What is this formula? For grid-template-rows and grid-template-columns relationship.

1 is what percent of number on the left. 

1 = 100%
2 = 50%
3 = 33%
4 = 25%
5 = 20%
6 = 
10 = 10%
100 = 1%

*/



// Div storage array.
let divs = [];

createDiv();
docFragPush();
drawing();

// TODO: Clear 'divs' array every time button is hit
// TODO: Clear gridBox every time button is hit
// When the user changes the grid size...
const resize = document.getElementById('resize');

clear.addEventListener('click', () => {
    clearCanvas();
});

resize.addEventListener('click', () => {
    clearDivs();
    gridSize = prompt('Please enter the desired width of your canvas.');
    while (gridSize < 16 || gridSize > 100) {
        gridSize = prompt('Please enter a number between 16 and 100.');
    }
    gridRepeat();
    createDiv();
    docFragPush();
    drawing();
    clearCanvas();
});

console.log(gridSize); // Find out why this returns undefined in addition to number.

// Creates a number of divs equal to user's input.
// Send those divs to 'divs' array.
function createDiv() {
    for (var i = 0; i < (gridSize * gridSize - 1); ++i) {
        let div = document.createElement('div');
        divs.push(div);
    }
}

// Pull div elements from 'divs' array and append them to the docFrag.
// Append the docFrag to the gridBox.
function docFragPush(){
    let docFrag = document.createDocumentFragment();
    for (let i = 0; i < divs.length; ++i) {
        docFrag.appendChild(divs[i]);
    }
    gridBox.appendChild(docFrag);
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

// Function to create background grid size.
function gridRepeat() {
    gridBox.style.gridTemplateColumns = `repeat(${gridSize}, ${100 / gridSize};`;
    gridBox.style.gridTemplateRows = `repeat(${gridSize}, ${100 / gridSize};`;
}

// Clear divs.
function clearDivs() {
    divs.length = 0;
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