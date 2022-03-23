const grid_div = document.getElementById('grid');
const cell_divs = document.getElementsByClassName('cell');
const reset = document.getElementById('btn1');

//review flexbox lessons to allow cells to fit automatically within rows.
//as well as have rows fit automatically within the given grid space.
//change display: grid to display: flex;
function makeGrid(rowNum){
    for(r = 0; r < rowNum; r++){
        let row = document.createElement('div');
        grid_div.appendChild(row).classList = 'row';
        for(c = 0; c < rowNum; c++){
            let cell = document.createElement('div');
            row.appendChild(cell).classList = 'cell';
            cell.addEventListener('mouseenter', () => {
                cell.classList.toggle('hover');
            })
        }
    }
}

function resetGrid(){
    //selects each div and un-appends from the grid
    //prompt user for a new rowNum
        //loop throught makeGrid again with new rowNum
}
// function makeGrid(rowNum){
//     for(i = 0; i < (rowNum * rowNum); i++){
//         let cell = document.createElement('div');
//         grid_div.appendChild(cell).classList = 'cell';
//         cell.addEventListener('mouseenter', () => {
//             cell.classList.toggle('hover');
//         })
//     }
// }

makeGrid(16);

