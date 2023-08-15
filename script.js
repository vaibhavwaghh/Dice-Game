"use strict";

let playerOneScore = 0;
let playerTwoScore = 0;
let myDice = document.querySelector(".my-dice");
myDice.classList.remove("my-dice");
myDice.classList.add("my-dice-1");
let currentScorePlayer1 = document.querySelector(".current-score-player-1");
let currentScorePlayer2 = document.querySelector(".current-score-player-2");
let presentScorePlayer1 = document.querySelector(".present-score-player-1");
let presentScorePlayer2 = document.querySelector(".present-score-player-2");
let count = 0;
let player1, player2;
let playing = [1, 0];
console.log(playing);
document.querySelector(".hold").addEventListener("click", wagh);
document.querySelector(".roll-dice").addEventListener("click", vaibhav);
document.querySelector(".new-game").addEventListener("click", navin);
function navin() {
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  presentScorePlayer1.textContent = 0;
  presentScorePlayer2.textContent = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  myDice.classList.remove("my-dice");
  myDice.classList.add("my-dice-1");
}
function vaibhav() {
  myDice.classList.add("my-dice");
  myDice.classList.remove("my-dice-1");
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  myDice.src = `IMAGES/dice-${diceNumber}.png`;
  if (playing[0] === 1) {
    playerOneScore = playerOneScore + diceNumber;
    currentScorePlayer1.textContent = playerOneScore;
  } else if (playing[0] === 0) {
    playerTwoScore = playerTwoScore + diceNumber;
    currentScorePlayer2.textContent = playerTwoScore;
  }
}

console.log(diceNumber);
function wagh() {
  count++;
  if (count % 2 == 0) {
    let container_1 = document.querySelector(".container-1 ");
    container_1.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    let container_2 = document.querySelector(".container-2");
    container_2.style.backgroundColor = "rgba(255, 255, 255, 0.26)";
    playing[0] = 1;
    playing[1] = 0;

    presentScorePlayer2.textContent = currentScorePlayer2.textContent;
    if (presentScorePlayer2.textContent >= 10) {
      alert("PLAYER 2 IS THE WINNER");
      navin();
    }
    currentScorePlayer2.textContent = 0;
  } else {
    let container_1 = document.querySelector(".container-1 ");
    container_1.style.backgroundColor = "rgba(255, 255, 255, 0.26)";
    let container_2 = document.querySelector(".container-2");
    container_2.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    playing[0] = 0;
    playing[1] = 1;
    presentScorePlayer1.textContent = currentScorePlayer1.textContent;
    if (presentScorePlayer1.textContent >= 10) {
      alert("PLAYER 1 IS THE WINNER");
      navin();
    }
    currentScorePlayer1.textContent = 0;
  }
}
console.log("vaibhav");
console.log("wagh");
