let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    count =0;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        box.innerText = turnO? "O" : "X";
        box.disabled = true;
        if (isWinner()) {
            showWin(box.innerText);
        } else if (count === 9) {
            showDraw();
        }
        turnO = !turnO;
    });
});

const showDraw = () => {
    msg.innerText = "Game ended in a Draw";
    msgContainer.classList.remove("hide");
};

const showWin = (winner) => {
    msg.innerText = `Congratulations, ${winner}, you won`;
    msgContainer.classList.remove("hide");
};

const isWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
