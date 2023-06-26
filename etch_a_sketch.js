const grid = document.querySelector('.grid');
let unit;
let row;

let colorType = 'single';
let selectedColor = 'rgb(0, 0, 0)';
let mousedown = false;

document.body.onmousedown = () => { mousedown = true; }
document.body.onmouseup = () => { mousedown = false; }

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

function clearAll() {
    document.querySelectorAll('.unit').forEach(
        unit => { unit.style.backgroundColor = 'white'; });
}

for (let i=0; i<16; ++i) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let j=0; j<16; ++j) {
        unit = document.createElement('div');
        unit.classList.add('unit');
        unit.setAttribute('id',`unit${16*i + j}`);
        unit.addEventListener('mousedown', updateColor)
        unit.addEventListener('mouseover', updateColor)
        row.appendChild(unit);
    }
    grid.appendChild(row);
}
