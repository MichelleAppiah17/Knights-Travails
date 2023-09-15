function createBoard() {
    for (let i = 0; i < 8; i++) {
        let row = "";
        for (let j = 0; j < 8; j++) {
            row += board[j][i] + " "; 
        }
        console.log(row); 
        console.log("\n");
    }
}

const board = new Array(8).fill(0).map(() => new Array(8).fill(0));
createBoard();

function xSteps(x, move) {
    if (move === 0) {
        x = x + 1;
    } else if (move === 1) {
        x = x + 2;
    } else if (move === 2) {
        x = x + 2;
    } else if (move === 3) {
        x = x + 1;
    } else if (move === 4) {
        x = x - 1;
    } else if (move === 5) {
        x = x - 2;
    } else if (move === 6) {
        x = x - 2;
    } else if (move === 7) {
        x = x - 1;
    }

    if (x < 0 || x > 7) {
        return -1;
    } else {
        return x; 
    }
}

function ySteps(y, move) {
    if (move === 0) {
        y = y - 2;
    } else if (move === 1) {
        y = y - 1;
    } else if (move === 2) {
        y = y + 1;
    } else if (move === 3) {
        y = y + 2;
    } else if (move === 4) {
        y = y + 2;
    } else if (move === 5) {
        y = y + 1;
    } else if (move === 6) {
        y = y - 1;
    } else if (move === 7) {
        y = y - 2;
    }

    if (y < 0 || y > 7) {
        return -1; 
    } else {
        return y; 
    }
}
