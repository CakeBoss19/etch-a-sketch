const grid_div = document.getElementById('grid');
const cell_divs = document.getElementsByClassName('cell');
const reset = document.getElementById('btn1');

function makeGrid(rowNum){
    for(i = 0; i < (rowNum * rowNum); i++){
        let cell = document.createElement('div');
        grid_div.appendChild(cell).classList = 'cell';
        cell.addEventListener('mouseenter', () => {
            cell.classList.toggle('hover');
        })
    }
}

makeGrid(16);

function resetGrid(){
    //selects each div and un-appends from the grid
    //prompt user for a new rowNum
        //loop throught makeGrid again with new rowNum
}