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

let rollsLeft = 3;

/* Add Event Listener */
document.getElementById('save-game').addEventListener('click', saveGame);
document.getElementById('new-game').addEventListener('click', newGame);
document.getElementById('load-game').addEventListener('click', loadGame);
document.getElementById('roll-dice').addEventListener('click', rollDice);

for (let i = 0; i < 5; i++) {
  document.getElementById('die-' + i).addEventListener('dblclick', reserveDie); //Add an event listener to each die
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
  console.log("Save game was clicked");
  localStorage.setItem("Yahtzee", "Test");
}

function loadGame(){
  //console.log(event.target);
  console.log("Load game was clicked");
  console.log(localStorage.getItem("Yahtzee"));
}

function newGame(){
  //console.log(event.target);
  myDice.reset();
  rollsLeft = 3;
  document.getElementById("rolls-remaining").innerHTML = rollsLeft;
  console.log("New game was clicked");
}

function rollDice(event){
  console.log(event.target);
  console.log("Roll dice was clicked");
  myDice.roll();
  rollsLeft--;
  document.getElementById("rolls-remaining").innerHTML = rollsLeft;
}
