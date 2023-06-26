const grid = document.querySelector('.grid');
let unit;
let row;
let selectedColor = 'rgb(0, 0, 0)';
let mousedown = false;

document.body.onmousedown = () => { mousedown = true; }
document.body.onmouseup = () => { mousedown = false; }

function updateColor(e) {
    if (e.type === "mouseover" && !mousedown) {
        return;
    }
    e.target.style.backgroundColor = selectedColor;
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
