const Gameboard = (function () {
    const get_board = () => {
        return document.querySelectorAll(".tile");
    }

    const get_msg = () => {
        return document.querySelector(".message")
    }
    const reset = () => {
        get_board().forEach((tile) => {
            tile.textContent = ""
            tile.classList.remove("X")
            tile.classList.remove("O")
            get_msg().textContent = ""
        })
    };
    return {reset, get_board, get_msg}
})();

const createPlayer = (() => {
    let whichPlayerTurn = false;
    return {whichPlayerTurn}
})();

let gameOver = false

const Game = (() => {

    const gameMsg = document.querySelector(".message")
    const mark =  () => {
        Gameboard.get_board().forEach((tile) => {
            tile.addEventListener("click", () => {
                if(tile.textContent === "" && !gameOver){
                let currentPlayer = createPlayer.whichPlayerTurn ? "X" : "O";
                tile.textContent = currentPlayer;
                tile.classList.add(currentPlayer);
                if(check_win(currentPlayer)){
                }
                else if(isDraw()){
                    Gameboard.get_msg().textContent= "It's a draw..."
                    return;
                }else {
                    console.log("keep playing asshole")
                    swap_players(currentPlayer)
                }}
            });
        })}


    const swap_players = () => {
        createPlayer.whichPlayerTurn = !createPlayer.whichPlayerTurn;
        Gameboard.get_msg().textContent = `It's is player ${createPlayer.whichPlayerTurn ? "X" : "O"}'s turn`
    }

    const check_win = (current) => {
        const winning_combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < winning_combinations.length; i++){
            const [a, b, c] = winning_combinations[i]
            if(Gameboard.get_board()[a].textContent === current && Gameboard.get_board()[b].textContent === current && Gameboard.get_board()[c].textContent === current){
                gameOver = true
                Gameboard.get_msg().textContent = `"${current}" has won the game!`
                return true
            }
        }
        return false
    }
    const isDraw = () => {
        return [...Gameboard.get_board()].every(tile => tile.classList.contains("X") || tile.classList.contains("O"))
    }


    return {mark, gameOver};
})();

const start_btn = document.querySelector(".start-btn");
start_btn.addEventListener("click", () => {
    Game.mark();
});


const restart_btn = document.querySelector(".restart-btn");
restart_btn.addEventListener("click", () => {
    Gameboard.reset();
    gameOver = false
});



