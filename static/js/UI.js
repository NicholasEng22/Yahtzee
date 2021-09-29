/*
* Title: Yahtzee
* Author: Nicholas Eng
* Date: 9/23/21
* Project Description: Replicate a game of Yahtzee
*/

/* Initialize Global Variables */
let rollsLeft = 3;
let diceArray = [0,0,0,0,0,0];

/* Add Event Listener */
document.getElementById('save-game').addEventListener('click', saveGame);
document.getElementById('new-game').addEventListener('click', newGame);
document.getElementById('load-game').addEventListener('click', loadGame);
document.getElementById('roll-dice').addEventListener('click', rollDice);

for (let i = 0; i < 4; i++) {
  document.getElementById('die-' + i).addEventListener('dblclick', reserveDie); //create a toggle function
}

document.getElementById("rolls-remaining").innerHTML = rollsLeft;

/* Functions */
function reserveDie(){
  console.log("Reserve toggled!");
  event.target.classList.toggle("reserved")
}

function saveGame(){
  //console.log(event.target);
  console.log("Save game was clicked");
  localStorage.setItem("Yahtzee", "Test");
}

function loadGame(){
  //console.log(event.target);
  console.log("Load game was clicked");
  console.log(localStorage,getItem("Yahtzee"));
}

function newGame(){
  //console.log(event.target);
  rollsLeft = 3;
  document.getElementById("rolls-remaining").innerHTML = rollsLeft;
  console.log("New game was clicked");
  for (let i = 0; i < 5; i++) {
    document.getElementById("die-" + i).setAttribute('src', "images/blank.svg");
  }
}

function rollDice(event){
  console.log(event.target);
  console.log("Roll dice was clicked");

  reserveBool = event.target.classList.contains("reserved");

  for (let i = 0; i < 5; i++) {
    if (reserveBool == false) {
      document.getElementById("die-" + i).setAttribute('src', randDice() + ".svg");
    }
  }

  rollsLeft--;
  document.getElementById("rolls-remaining").innerHTML = rollsLeft;
}

function randDice(){
  let a = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  let img = ['images/blank', 'images/one', 'images/two', 'images/three', 'images/four', 'images/five', 'images/six'];

  return img[a+1];
}
