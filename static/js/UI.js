/*
* Title: Yahtzee
* Author: Nicholas Eng
* Date: 9/23/21
* Project Description: Replicate a game of Yahtzee
*/

/* Connect Dice class to UI */
import Dice from './Dice.js';
import Scorecard from './Scorecard.js';

/* Initialize Global Variables */
let myDice = new Dice();
let player = new Scorecard();
let locked = false;
let rollsLeft = 3;
//let window.myDice = myDice; //needed to run tests...

/* Add Event Listener */
document.getElementById('save-game').addEventListener('click', saveGame);
document.getElementById('new-game').addEventListener('click', newGame);
document.getElementById('load-game').addEventListener('click', loadGame);
document.getElementById('roll-dice').addEventListener('click', rollDice);

myDice.getDiceElements().forEach(function(die){
  die.addEventListener('dblclick', function(event){
    console.log("Reserve toggled!");
    myDice.reserve(event.target);
  });
});

player.getCategoryElements().forEach(function(category){
  category.addEventListener('keypress', endTurn);
});

document.getElementById("rolls-remaining").innerHTML = rollsLeft; //Intializes the start roll

/* Functions */

/**
 * Attempts to end a turn
 *
 * @param {Object} event Important event info
 *
 */
function endTurn(event){
  if (event.key == 'Enter'){ //event.keyCode == '13'
    let element = event.target;
    let value = event.target.value;
    player.enterScore(element, value, myDice.getDiceArray());
  }
}

function reserveDie(event){
  console.log("Reserve toggled!");
  //console.log("Event: " + event);
  myDice.reserve(event);
}

function saveGame(){
  //console.log(event.target);
  if (!locked) {
    console.log("Save game was clicked");
    let game = JSON.stringify(player.toObject);
    localStorage.setItem("Game#1", game);
  } else {
    console.log("Dice are rolling. You cannot save game at this time.");
  }
}

function loadGame(){
  //console.log(event.target);
  console.log(player);
  console.log("Load game was clicked");
  if (!locked) {
    let currGame = localStorage.getItem("Game#1");
    //console.log(localStorage.getItem("Game#1"));
  } else {
    console.log("Dice are rolling. You cannot load game at this time.");
  }
}

function newGame(){
  //console.log(event.target);
  console.log("New game was clicked");
  if (!locked) {
    myDice.reset();
    player.reset();
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

/**
 * Updates #feedback-content with an appropriate message and style.
 * If both msg and type are blank, #user-feedback becomes hidden
 *
 * @param {String} type A context (ie. "good"/"bad"/"info") for the feedback
 * @param {String} msg The message to display for the user
 *
 */
function feedback(type, msg) {

}
