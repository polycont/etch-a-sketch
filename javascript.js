// I need to create a grid that can expand and shrink
// based on the user's input. When the user mouses over the grid,
// a color should be applied to any divs they mouse over.

const gridBox = document.querySelector('.grid-container');

// Starting grid size.
let gridSize = 16;

// Div storage array.
let divs = [];

createDiv();
docFragPush();
drawing();


// Clear 'divs' array every time button is hit?
// When the user changes the grid size...
const resize = document.getElementById('resize');

resize.addEventListener('click', () => {
    gridSize = prompt('Please enter the desired width of your canvas.');
    while (gridSize < 16 || gridSize > 100) {
        gridSize = prompt('Please enter a number between 16 and 100.');
    }
    createDiv();
    docFragPush();
    drawing();
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