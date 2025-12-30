const boxes = document.querySelectorAll(".box");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.textContent !== "" || !gameActive) return;

        box.textContent = currentPlayer;
        checkWinner();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (gameActive) {
            statusText.textContent = `Player ${currentPlayer} Turn`;
        }
    });
});

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            statusText.textContent = `Winner is ${boxes[a].textContent}`;
            gameActive = false;
            return;
        }
    }

    const isDraw = [...boxes].every(box => box.textContent !== "");
    if (isDraw) {
        statusText.textContent = "Game Draw!";
        gameActive = false;
    }
}

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => box.textContent = "");
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X Turn";
});