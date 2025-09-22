/**
 * Class that calculates the average of a list of numbers.
 */

/**
 * Class that calculates the average of a list of numbers.
 */
export class Average {
  /**
   * Constructor.
   */
  constructor () {
    this.numbers = []
  }

  /**
   * Add a number to the list of numbers.
   *
   * @param {number} number The number to add.
   */
  add (number) {
    this.numbers.push(number)
  }

  /**
   * Calculate the average of the numbers.
   *
   * @returns {number} The average of the numbers.
   */
  calculate () {
    const total = this.numbers.reduce((accumulator, number) => accumulator + number, 0)
    return total / this.numbers.length
  }
}
