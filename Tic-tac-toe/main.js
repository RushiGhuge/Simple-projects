const restartBtn = document.getElementById("restartBtn");
const heading = document.getElementById("heading");
const boxes = Array.from(document.getElementsByClassName("box"));
restartBtn.addEventListener("click", restart); //click that to restart the game...

let spaces = Array(9).fill(null);
let x = "X";
let o = "O";
let currentPlayer = x;

function startGame() {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
}
startGame();
// first time call the start game auto

//clicked function of box...
function boxClicked(e) {
  let id = e.target.id;

  if (spaces[id] == null) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWin()) {
      let winBox = hasPlayerWin();
      winBox.forEach((box)=>{
        boxes[box].style.background = "#489b41"
      })
      heading.innerText = `${currentPlayer} has win!`;
      boxes.forEach((box) => box.removeEventListener("click", boxClicked));
    }
    currentPlayer = currentPlayer == x ? o : x; //change player O and X
  }
}

// make a restart functions that can clear the game...
function restart() {
  spaces.fill(null); //make all arrya of spaces to null
  boxes.forEach((box) => (box.innerText = ""));
  heading.innerText = `TIC TAC TOE`;
  startGame();
  boxes.forEach(box => box.style.background = "#180f1b")
}

// make a function that cheak the pleyer is win or not
// make some combination first.... its conditions-->
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// player wining function that can check the player is win or not
function hasPlayerWin() {
  for (const condition of winningCombos) {
    //destructure the condition of winingCombos
    let [a, b, c] = condition;
    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}
