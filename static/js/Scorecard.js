class Scorecard {
  #totalElements;
  #categoryElements;
  #upperCategories;

  constructor(){
    this.#categoryElements = Array.from(document.getElementsByClassName("score"));
    this.#totalElements = Array.from(document.getElementsByClassName("total"));
    this.#upperCategories = ['one', 'two', 'three', 'four', 'five', 'six'];
  }

  /**
   * Attempts to enter a score for a particular category
   * If a score is valid for a particular category (using the given dice roll)
   *   the score is entered, totals are recalculated, and the category  is disabled.
   * If a score is invalid, the bad score is removed
   *
   * @param {Object} element the input element for a particular category
   * @param {Number} value the proposed score for the category
   * @param {Object} diceArray an array of integer values indicating the current roll
   * @return {Boolean} a Boolean value indicating whether the score is valid for the category
   */
  enterScore(element, value, diceArray){
    //console.log(this.#validateScore(element.id, value, diceArray));
    if (this.#validateScore(element.id, value, diceArray)) {
      console.log("Category " + element.id + " set to " + value + ".");
      //Set the value of the category Element
      //element.setAttribute("disabled", false);
      //element.setAttribute("editable", true);
    }
    //this.#categoryElements()[0] = value;
  }

  getCategoryElements(){
    return this.#categoryElements.slice();
  }

  /**
   * Determines whether the scorecard is full
   * A full scorecard is a scorecard where all categores are disabled.
   *
   * @return {Boolean} a Boolean value indicating whether the scorecard is full
   */
  isFull(){

  }

  /**
   * Resets the scorecard for a new game
   *   -Scores are removed from all caregories
   *   -No categories are disabled
   *
   */
  reset(){
    element.setAttribute("disabled", true);
  }

  /**
   * Loads scores from a JS object
   *
   * @param {Object} objectVersion the object version of the scorecard
   *
   */
  loadScores(objectVersion){

  }

  /**
   * Creates a JS object from the scorecard
   *
   * @return {Object} an object version of the scorecard
   *
   */
  toObject(){

  }

  /**
   * Validates a score for a particular category
   *
   * @param {String} id the category id
   * @param {Number} value the proposed score for the category
   * @param {Object} diceArray an array of integer values indicating the current roll
   * @return {Boolean} a Boolean value indicating whether the score is valid for the category
   */
  #validateScore(id, value, diceArray){
    let validInput = false;
    let currRoll = diceArray;

    //console.log(currRoll);

    if (!isNaN(value) && value !== ''){
      console.log("Score is valid.")
      validInput = true; // Guess what, it's a bloody number!
    } else {
      console.log("Score is not valid.")
    }
    return validInput;
  }

  /**
   * Updates both the upper and lower totals
   *
   */
  #updateTotals(){

  }

}//Scorecard class

export default Scorecard;
