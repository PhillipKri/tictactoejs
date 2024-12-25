const Gameboard = (function () {
    let board = document.querySelectorAll(".tile");

    const reset = () => {
        board.forEach((tile) => {
            tile.textContent = ""
        });
    };
    return {reset}
})();

function mark (){
    let board = document.querySelectorAll(".tile");
    board.forEach((tile) => {
        tile.addEventListener("click", () => {
            tile.textContent = "X"
        });
    })
    //console.log(board);
}
const start_btn = document.querySelector(".start-btn");
start_btn.addEventListener("click", () => {
    //Game.start();
});

function reset() {
    Gameboard.reset();
}

// for(let i = 0; board.length; i++){
//     board[i].addEventListener("click", () => {
//         board[i].textContent = "X"
//     });
// }

const restart_btn = document.querySelector(".restart-btn");
restart_btn.addEventListener("click", () => {
    reset()
});

mark();

