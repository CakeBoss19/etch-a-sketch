const grid_div = document.getElementById('grid');
const cell_divs = document.getElementsByClassName('cell');
const button = document.getElementById('custom-btn');
const warning = document.querySelector('.warning');
const btn1 = document.getElementById('4x4-btn');
const btn2 = document.getElementById('8x8-btn');
const btn3 = document.getElementById('16x16-btn');
const btn4 = document.getElementById('32x32-btn');


function makeGrid(inputValue){
    for(r = 0; r < inputValue; r++){
        let row = document.createElement('div');
        grid_div.appendChild(row).classList = 'row';
        for(c = 0; c < inputValue; c++){
            let cell = document.createElement('div');
            row.appendChild(cell).classList = 'cell';
            cell.addEventListener('mouseleave', () => {
            cell.classList.toggle('hover');
            }) 
        }
    }
}

function resetGrid(){
    while(grid_div.firstChild){
        grid_div.removeChild(grid_div.firstChild);
    } warning.textContent = '';
}

button.addEventListener('click', () => {
    resetGrid();
    let inputValue = prompt('1 - 75', '16');
    if(inputValue > 75){
        return warning.textContent = 'Something a Little Smaller...'
    }
    makeGrid(inputValue);
})

btn1.addEventListener('click', () => {
    resetGrid();
    let inputValue = 4;
    makeGrid(inputValue);
})

btn2.addEventListener('click', () => {
    resetGrid();
    let inputValue = 8;
    makeGrid(inputValue);
})

btn3.addEventListener('click', () => {
    resetGrid();
    let inputValue = 16;
    makeGrid(inputValue);
})

btn4.addEventListener('click', () => {
    resetGrid();
    let inputValue = 32;
    makeGrid(inputValue);
})