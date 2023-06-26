let grid = document.querySelector('.grid');
let unit;
let row;
let selectedColor = 'rgb(0, 0, 0)';
for (let i=0; i<16; ++i) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let j=0; j<16; ++j) {
        unit = document.createElement('div');
        unit.classList.add('unit');
        unit.setAttribute('id',`unit${16*i + j}`);
        unit.addEventListener('mousedown', () => {
            document.querySelector(`#unit${16*i+j}`)
            .style.backgroundColor =  selectedColor;
        })
        unit.addEventListener('mouseover', () => {
            document.querySelector(`#unit${16*i+j}`)
            .style.backgroundColor =  selectedColor;
        })
        row.appendChild(unit);
    }
    grid.appendChild(row);
}
