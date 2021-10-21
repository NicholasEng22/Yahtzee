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
    //console.log(this.#categoryElements);
    //console.log(element);
    if (this.#validateScore(element.id, value, diceArray)) {
      console.log("Category " + element.id + " set to " + value + ".");
      //Set the value of the category Element
      element.setAttribute("disabled", false);
      element.classList.toggle("disabled");
      this.#updateTotals(value);
    }
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
   *   -Scores are removed from all categories
   *   -No categories are disabled
   *
   */
  reset(){
    let scoreEl = this.#categoryElements;
    scoreEl.forEach(function(score){
      score.removeAttribute("disabled");
      score.value = "";
    })

    this.#totalElements.forEach(function(total) {
      total.innerText = "";
    })

    //element.setAttribute("editable", true);
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
    let obj = {
      one: document.getElementById("one");
      two: document.getElementById("two");
      three: document.getElementById("three");
      four: document.getElementById("four");
      five: document.getElementById("five");
      six: document.getElementById("six");
      3-of-a-kind: document.getElementById("3-of-a-kind");
      4-of-a-kind: document.getElementById("4-of-a-kind");
      full-house: document.getElementbyId("full-house");
      small-straight: document.getElementById("small-straight");
      large-straight: document.getElementById("large-straight");
      chance: document.getElementById("chance");
    };
    return(obj);
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
  #updateTotals(value){
    this.#totalElements.forEach(function(total){
      let totalVal = total.innerText.length > 0 ? total.innerText: 0;
      if (total.classList.contains("upper")) {
        total.innerText = parseInt(totalVal) + parseInt(value); //Add the upper values
        console.log(total);
      } else {
        //Add to lower
      }
    })
    console.log(this.#totalElements);
  }

}//Scorecard class

export default Scorecard;
