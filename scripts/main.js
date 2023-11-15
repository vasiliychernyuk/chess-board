const boardProps = {
    scale: 1000
}

const defaultCellProps = {
    size: 125,
    colors: {
        gradient: ["#03CFC2", "#7B84FF"],
        solid: "#F7F9FB"
    },
    startCellNumber: 1
};

const rootLayer = document.querySelector("#root-layer");
rootLayer.width = boardProps.scale;
rootLayer.height = boardProps.scale;

const ctx = rootLayer.getContext("2d");


function drawCell (cellNumber, rowNumber, colorToggler) {

    let x = defaultCellProps.size * cellNumber;
    let y = defaultCellProps.size * rowNumber;

    if (colorToggler === 1) {
        const gradient = ctx.createLinearGradient(x, y, x + defaultCellProps.size, y + defaultCellProps.size);
        gradient.addColorStop(0, defaultCellProps.colors.gradient[0]);
        gradient.addColorStop(1, defaultCellProps.colors.gradient[1]);
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = defaultCellProps.colors.solid;
    }

    ctx.fillRect(x, y, defaultCellProps.size, defaultCellProps.size);

}

function drawRow (rowNumber, colorToggler) {

    for (let i = 0; i < 8; i++) {

        if (colorToggler === 0) {
            colorToggler = 1;
        } else {
            colorToggler = 0;
        };

        drawCell(i, rowNumber, colorToggler);

    }

}

function drawBoard () {

    let rowNumber = 0;
    let startCellNumber = defaultCellProps.startCellNumber;

    for (let i = 0; i < 8; i++) {

        drawRow(rowNumber, startCellNumber);

        if (startCellNumber === 0) {
            startCellNumber = 1;
        } else {
            startCellNumber = 0;
        }

        rowNumber += 1;
    }

}
