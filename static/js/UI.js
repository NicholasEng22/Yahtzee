/* Variables */
let rollsLeft = 3;

document.getElementById('save-game').addEventListener('click', saveGame);
document.getElementById('new-game').addEventListener('click', newGame);
document.getElementById('load-game').addEventListener('click', loadGame);
document.getElementById('roll-dice').addEventListener('click', rollDice);

/* Functions  */
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
  //rollsLeft = 3;
  console.log("New game was clicked");
  document.getElementById("die-0").setAttribute('src', 'images/blank.svg');
  document.getElementById("die-1").setAttribute('src', 'images/blank.svg');
  document.getElementById("die-2").setAttribute('src', 'images/blank.svg');
  document.getElementById("die-3").setAttribute('src', 'images/blank.svg');
  document.getElementById("die-4").setAttribute('src', 'images/blank.svg');

}

function rollDice(){
  //console.log(event.target);

  let img = 'images/blank.svg';
  console.log("Roll dice was clicked");
  document.getElementById("die-0").setAttribute('src', randDice());
  document.getElementById("die-1").setAttribute('src', randDice());
  document.getElementById("die-2").setAttribute('src', randDice());
  document.getElementById("die-3").setAttribute('src', randDice());
  document.getElementById("die-4").setAttribute('src', randDice());


  rollsLeft = rollsLeft - 1;
  document.getElementById("rolls-remaining").innerHTML = rollsLeft;
}

function randDice(){
  let a = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  let map = new Map();

  map.set(0, 'images/one.svg');
  map.set(1, 'images/two.svg');
  map.set(2, 'images/three.svg');
  map.set(3, 'images/four.svg');
  map.set(4, 'images/five.svg');
  map.set(5, 'images/six.svg');

  return map.get(a);
}

// function randDice(){
//   let a = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
//   let b = 'images/blank.svg';
//
//   if (a == 0) {
//     b = 'images/one.svg';
//   }
//   else if (a == 1) {
//     b = 'images/two.svg';
//   }
//   else if (a == 2) {
//     b = 'images/three.svg';
//   }
//   else if (a == 3) {
//     b = 'images/four.svg';
//   }
//   else if (a == 4) {
//     b = 'images/five.svg';
//   }
//   else {
//     b = 'images/six.svg';
//   }
//   console.log();
//   return b;
// }
