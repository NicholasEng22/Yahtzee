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
      //console.log("Category " + element.id + " set to " + value + ".");
      //Set the value of the category Element
      element.setAttribute("disabled", false);
      //element.classList.toggle("disabled"); //class for css
      this.#updateTotals(value, element);
      return true;
    }
    else {
      return false;
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
    this.#categoryElements.forEach(scoreElement => {
      scoreElement.value = objectVersion[scoreElement.id];
      if (objectVersion[scoreElement.id] != ""){
        scoreElement.setAttribute("disabled", true);
      }
    })
    this.#totalElements.forEach(totalElement => {
      totalElement.innerText = objectVersion[totalElement.id];
    })
  }

  /**
   * Creates a JS object from the scorecard
   *
   * @return {Object} an object version of the scorecard
   *
   */
  toObject(){
    let game = {};
    this.#categoryElements.forEach(scoreElement => {
      game[scoreElement.id] = scoreElement.value;
    })
    this.#totalElements.forEach(totalElement => {
      game[totalElement.id] = totalElement.innerText;
    })
    console.log(game);
    return(game);
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
  #updateTotals(value, element){
    let total = document.getElementById("upper-total");
    let totalScore = document.getElementById("upper-section-total");
    let bonus = document.getElementById("upper-bonus");
    let upperTotal = document.getElementById("upper-section-total-lower");
    let lowerTotal = document.getElementById("lower-total");
    let grand = document.getElementById("grand-total");

    if (element.classList.contains("upper")) {
      total.innerText = total.innerText.length > 0 ? parseInt(total.innerText) + parseInt(value): value;
      totalScore.innerText = totalScore.innerText.length > 0 ? parseInt(totalScore.innerText) + parseInt(value): value;
      upperTotal.innerText = upperTotal.innerText.length > 0 ? parseInt(upperTotal.innerText) + parseInt(value): value;
      grand.innerText = grand.innerText.length > 0 ? parseInt(grand.innerText) + parseInt(value): value;
      //bonus.innerText = bonus.innerText.length > 0 ? parseInt(bonus.innerText) + parseInt(value): value;
    } else if (element.classList.contains("lower")) {
      lowerTotal.innerText = lowerTotal.innerText.length > 0 ? parseInt(lowerTotal.innerText) + parseInt(value): value;
      grand.innerText = grand.innerText.length > 0 ? parseInt(grand.innerText) + parseInt(value): value;
    }
    console.log(this.#totalElements);
  }

}//Scorecard class

export default Scorecard;
