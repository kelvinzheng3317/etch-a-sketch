const grid = document.querySelector('.grid');
let unit;
let row;

let colorType = 'single';
let selectedColor = 'rgb(0, 0, 0)';

// keeps track of whether mouse is down to know when to draw
let mousedown = false;
document.body.onmousedown = () => { mousedown = true; }
document.body.onmouseup = () => { mousedown = false; }

// allows user to change what dimensions of the grid
let size = 16;
const sizeInput = document.querySelector('.grid-size');
sizeInput.addEventListener('blur', updateGridSize);
sizeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updateGridSize(e);
    }
});

/* adds event listener for color select buttons */
document.querySelector('.selectBlack').addEventListener('click', 
    () => { colorType = 'single'; selectedColor = 'rgb(0,0,0)'; })
document.querySelector('.selectRandom').addEventListener('click', 
    () => { colorType = 'random'; })
document.querySelector('.selectEraser').addEventListener('click', 
    () => { colorType = 'single'; selectedColor = 'rgb(255,255,255)'; })
document.querySelector('.clear').addEventListener('click',
    () => clearAll())


function updateColor(e) {
    if (e.type === "mouseover" && !mousedown) {
        return;
    }
    if (colorType === 'single') {
        e.target.style.backgroundColor = selectedColor;
    } else if (colorType === 'random') {
        let randRed = Math.random() * 255;
        let randGreen = Math.random() * 255;
        let randBlue = Math.random() * 255;
        e.target.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
    }
}

// clears all colors from the grid, i.e. a reset function
function clearAll() {
    document.querySelectorAll('.unit').forEach(
        unit => { unit.style.backgroundColor = 'white'; });
}

// updates size variable for the sake of updating grid dimensions
function updateGridSize(e) {
    let num = +e.target.value;
    if (typeof num != "number" || num < 1) {
        console.log("not a valid number");
        return;
    } else if (num > 100) {
        size = 100;
    } else {
        size = Math.floor(num);
    }
    updateGrid();
}

// generates new grid based on size variable
function updateGrid() {
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = '1fr '.repeat(size);
    grid.style.gridTemplateRows = '1fr '.repeat(size);
    for (let i=0; i<size; ++i) {
        for (let j=0; j<size; ++j) {
            unit = document.createElement('div');
            unit.classList.add('unit');
            unit.addEventListener('mousedown', updateColor)
            unit.addEventListener('mouseover', updateColor)
            grid.appendChild(unit);
        }
    }
}

updateGrid();
