/*
* Title: Yahtzee
* Author: Nicholas Eng
* Date: 9/23/21
* Project Description: Replicate a game of Yahtzee
*/

/* Connect Dice class to UI */
import Dice from './Dice.js';

/* Initialize Global Variables */
let myDice = new Dice();
let locked = false;
let rollsLeft = 3;

/* Add Event Listener */
document.getElementById('save-game').addEventListener('click', saveGame);
document.getElementById('new-game').addEventListener('click', newGame);
document.getElementById('load-game').addEventListener('click', loadGame);
document.getElementById('roll-dice').addEventListener('click', rollDice);

// for (let i = 0; i < document.getElementsByClassNameById('lower score').length; i++) {
//   document.getElementsByClassNameById('lower score')[i].addEventListener('dblclick', reserveDie); //Add an event listener to each die
// }

for (let i = 0; i < document.getElementsByClassName('die').length; i++) {
  myDice.getDiceElements()[i].addEventListener('dblclick', reserveDie); //Add an event listener to each die
}

document.getElementById("rolls-remaining").innerHTML = rollsLeft; //Intializes the start roll

/* Functions */
function reserveDie(event){
  console.log("Reserve toggled!");
  //console.log("Event: " + event);
  myDice.reserve(event);
}

function saveGame(){
  //console.log(event.target);
  if (!locked) {
    console.log("Save game was clicked");
    localStorage.setItem("Yahtzee", "Test");
  } else {
    console.log("Dice are rolling. You cannot save game at this time.");
  }
}

function loadGame(){
  //console.log(event.target);
  console.log("Load game was clicked");
  if (!locked) {
    console.log(localStorage.getItem("Yahtzee"));
  } else {
    console.log("Dice are rolling. You cannot load game at this time.");
  }
}

function newGame(){
  //console.log(event.target);
  console.log("New game was clicked");
  if (!locked) {
    myDice.reset();
    rollsLeft = 3;
    document.getElementById("rolls-remaining").innerHTML = rollsLeft;
  } else {
    console.log("Dice are rolling. You cannot start a new game at this time.");
  }
}

function rollDice(){
  //console.log(event.target);
  if (!locked) {
    locked = true;
    setTimeout(unlock, 2000);
    console.log("Roll dice was clicked");
    myDice.spin(event);
    rollsLeft--;
    document.getElementById("rolls-remaining").innerHTML = rollsLeft;
  }
}

function unlock () {
    locked = false;
}
