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