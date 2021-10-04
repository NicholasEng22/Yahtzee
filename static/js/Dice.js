class Dice {
  #diceLabels;
  #diceElements;
  #diceArray;
  #diceLabelSpin;

  //rollsLeft;

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
    this.#diceLabelSpin = ['spinning_one', 'spining_two', 'spinning_three', 'spinning_four', 'spinning_five', 'spinning_six'];
    this.#diceArray = [0, 0, 0, 0, 0];
  }

  /**
   * Returns an array of HTML image tags representing
   * a current view of all five Yahtzee dice
   */
  getDiceElements() {
    return this.#diceElements.slice();
  }

  /**
   * Returns an array of integers representing
   * a current view of all five Yahtzee dice
   * A natural mapping is used to pair each integer with a die picture
   * Dice values: 0 for blank, or 1 - 6
   */
  getDiceArray() {
    return this.#diceArray.slice();
  }

  /**
   * Resets all dice pictures to blank, and unreserved
   * Resets diceArray to all 0's
   */
  reset() {
    console.log("Resetting the dice");
    let diceElements = this.getDiceElements();
    for (let i = 0; i < diceElements.length; i++) {
      let currDie = diceElements[i];
      let reserveBool = currDie.classList.contains("reserved");

      if (reserveBool) {
        currDie.classList.toggle("reserved"); //remove the reserved class
      }
      this.#setDie(i, 0);
      //this.#diceElements[i].setAttribute('src', "images/blank.svg");
    }
    //rollsLeft = 3;
  }//reset()

  /**
   * Performs all necessary actions to roll and update display of dice
   * Changes src to reflect new value
   * Updates this.#diceArray
   */
  roll() {
    console.log("Rolling the dice");
    let diceElements = this.getDiceElements();
    for (let i = 0; i < diceElements.length; i++) {
      let reserveBool = diceElements[i].classList.contains("reserved");
      console.log(reserveBool);
      if (!reserveBool) {
        let a = Math.floor(Math.random() * (6)) + 1; //generates the random numbers
        this.#setDie(i, a);
      }
    }
  }//roll()

  /**
   * Creates an animation to "spin" the class
   * Adds "reserved" as a class label to indicate a die is reserved
   * Removes "reserved" a class label if a die is already reserved
   *
   * @param {Object} element the <img> element representing the die to reserve
   */
  spin() {
    let callBack = this.roll;
    setTimeout(function(){callBack();}, 2000);
    console.log("Spinning");
  }

  /**
   * Performs all necessary actions to reserve/unreserve a particular die
   * Adds "reserved" as a class label to indicate a die is reserved
   * Removes "reserved" a class label if a die is already reserved
   *
   * @param {Object} element the <img> element representing the die to reserve
   */
  reserve(element) {
    console.log("Reserving " + element.target.id);
    element.target.classList.toggle("reserved");

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
    let currDie = this.#diceElements[element];
    currDie.setAttribute('src', `images/${this.#diceLabels[newValue]}.svg`);
    this.#diceArray[element] = newValue;
    console.log(this.#diceArray);
  }//setDie()

}//Dice class

export default Dice;
