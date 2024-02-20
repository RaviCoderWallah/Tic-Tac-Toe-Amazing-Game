let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#resetBtn");
let startBtn = document.querySelector("#startBtn");
let winnerHeading = document.querySelector("#winner-heading");
let msg = document.querySelector("#winner");

let trun0 = true; //playerX, player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    trun0 = true;
    enableBoxes();
    winnerHeading.classList.remove("active");
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(trun0 === true){
            box.innerHTML = "0";
            trun0 = false;
        }else{
            box.innerHTML = "X";
            trun0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}


const showWinner = (winner) => {
  msg.innerHTML = winner;
  winnerHeading.classList.add("active");
  disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
       let position1Value = boxes[pattern[0]].innerHTML;
       let position2Value = boxes[pattern[1]].innerHTML;
       let position3Value = boxes[pattern[2]].innerHTML;

       if(position1Value != "" && position2Value != "" && position3Value != ""){
           if(position1Value === position2Value && position2Value === position3Value){
               console.log("winner", position1Value);
               showWinner(position1Value);
           }
       }
    }
}

startBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);