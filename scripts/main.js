const rowNames = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

const board = document.querySelector("#board");

function createRow (firstColor, rowName) {
    
    let colorToggler = firstColor;

    for(let i = 1; i < 9; i++) {
        const element = document.createElement("span");
        element.id = `${rowName}${i}`;

        if(colorToggler) {
            element.classList.add("cell", "light-cell");
            colorToggler = false;
        } else {
            element.classList.add("cell", "dark-cell");
            colorToggler = true;
        }
        
        board.append(element);
    }
}

function drawBoard () {
    let firstColorToggler = true;

    for(let i = 0; i < 8; i++) {
        createRow(firstColorToggler, rowNames[i]);
        firstColorToggler = !firstColorToggler;
    }
}
