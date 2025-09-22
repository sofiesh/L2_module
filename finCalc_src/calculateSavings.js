/**
 * A Module to calculate the savings required in order to reach a certain goal.
 */

/**
 * Function to validate the input parameters.
 *
 * @param {string} userName The name of the user.
 * @param {number} savingsGoal The goal amount to reach.
 * @param {number} currentSavings The current savings amount.
 * @param {number} monthsToReachGoal The number of months to reach the goal.
 * @throws {Error} If the user name is not provided.
 */
export function validateSavingsInput (userName, savingsGoal, currentSavings, monthsToReachGoal) {
  if (!userName) {
    throw new Error('A user name must be provided.')
  }

  if (isNaN(savingsGoal) || savingsGoal <= 0) {
    throw new Error('Goal must be greater than 0')
  }

  if (isNaN(currentSavings) || currentSavings < 0) {
    throw new Error('Current savings must be greater than or equal to 0')
  }

  if (isNaN(monthsToReachGoal) || monthsToReachGoal <= 0) {
    throw new Error('Months must be greater than 0')
  }
}

/**
 * Function to calculate the savings required to reach a goal.
 *
 * @param {string} userName The name of the user.
 * @param {number} savingsGoal The goal amount to reach.
 * @param {number} currentSavings The current savings amount.
 * @param {number} monthsToReachGoal The number of months to reach the goal.
 * @returns {number} The amount that needs to be saved each month.
 */
export function calculateSavingsPerMonth (userName, savingsGoal, currentSavings, monthsToReachGoal) {
  validateSavingsInput(userName, savingsGoal, currentSavings, monthsToReachGoal)

  return {
    userName,
    savingsGoal,
    savingsPerMonth: (savingsGoal - currentSavings) / monthsToReachGoal
  }
}
