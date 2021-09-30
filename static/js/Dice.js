class Dice {
  #diceLabels;
  #diceElements;
  #diceArray;

  /**
   * The Dice class constructor
   * Initializes:
   * - this.#diceLabels as an array with picture labels
   * - this.#diceElements as an array of HTML elements with an <img> tag for each die
   * - this.#diceArray as a an array with five 0 elements
   */
  constructor() {
    this.#diceLabels = ['blank', 'one', 'two', 'three', 'four', 'five', 'six'];
    this.#diceElements = Array.from(document.getElementsByClassName("die"));
    this.#diceArray = [0, 0, 0, 0, 0];
  }

  /**
   * Returns an array of HTML image tags representing
   * a current view of all five Yahtzee dice
   */
  getDiceElements() {
    return this.#diceElements;
  }

  /**
   * Returns an array of integers representing
   * a current view of all five Yahtzee dice
   * A natural mapping is used to pair each integer with a die picture
   * Dice values: 0 for blank, or 1 - 6
   */
  getDiceArray() {
    return this.#diceArray;
  }

  /**
   * Resets all dice pictures to blank, and unreserved
   * Resets diceArray to all 0's
   */
  reset() {
    console.log("Resetting the dice");
    for (let i = 0; i < this.diceArray.length; i++) {
      let rollingDie = document.getElementById("die-" + i);
      let reserveBool = rollingDie.classList.contains("reserved");
      if (reserveBool) {
        rollingDie.classList.toggle("reserved"); //remove the reserved class
      }
      diceArray[i] = 0;
    }

  }//reset()

  /**
   * Performs all necessary actions to roll and update display of dice
   * Changes src to reflect new value
   * Updates this.#diceArray
   */
  roll() {
    console.log("Rolling the dice");
    for (let i = 0; i < diceArray.length; i++) {
      let rollingDie = document.getElementById("die-" + i); //this is also event.target.id
      let reserveBool = rollingDie.classList.contains("reserved");
      console.log(reserveBool);
      if (!reserveBool) {
        let a = Math.floor(Math.random() * (5 - 0 + 1)) + 0; //generates the random numbers
        document.getElementById("die-" + i).setAttribute('src', img[a] + ".svg");
        diceArray[i] = a+1;
      }
    }

    document.getElementById("rolls-remaining").innerHTML = rollsLeft;

  }//roll()

  /**
   * Performs all necessary actions to reserve/unreserve a particular die
   * Adds "reserved" as a class label to indicate a die is reserved
   * Removes "reserved" a class label if a die is already reserved
   *
   * @param {Object} element the <img> element representing the die to reserve
   */
  reserve(element) {
    console.log("Reserving"+element.id);

  }//reserve()

  /**
   * Sets die picture to a specific roll value, including blank or spinning
   * Private- Internal use in dice.js only
   * Updates both the picture of the die and its integer value in diceArray
   *
   * @param {Object} element the <img> element representing the die to set
   * @param {int} newValue the new value of the die: 0 for blank or 1 - 6
   */
  #setDie(element, newValue) {

  }//setDie()

}//Dice class

export default Dice;
