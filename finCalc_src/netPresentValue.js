/**
 * Module for Net Present Value calculations.
 *
 * @author Sofie Swagemakers Herou
 */

/**
 * Function to validate the inputs for the Net Present Value calculation.
 *
 * @param {Array} cashFlows the cash flows input by the user
 * @param {number} rate the discount rate given by the user
 * @returns {boolean} true if the inputs are approved, false otherwise
 */
export function validateNetPresentValueInputs (cashFlows, rate) {
  if (!Array.isArray(cashFlows) || cashFlows.length === 0) {
    throw new Error('Cash flows must be a non-empty array')
  }

  cashFlows.forEach((cf) => {
    if (typeof cf !== 'number' || isNaN(cf)) {
      throw new Error('All cash flows must be valid numbers')
    }
  })

  if (rate <= 0 || isNaN(rate)) {
    throw new Error('Rate must be greater than 0')
  }

  return true
}

/**
 * Function to calculate the Net Present Value of a series of cash flows.
 *
 * @param {Array} cashFlows the cash flows to be considered
 * @param {number} rate the discount rate
 * @returns {string} the Net Present Value as a string with two decimal places
 */
export function calculateNetPresentValue (cashFlows, rate) {
  validateNetPresentValueInputs(cashFlows, rate)

  let npv = 0

  // Prevent division by zero or negative rate
  if (rate < 0.0001) {
    rate = 0.0001 // Use a minimum rate to prevent division by zero
  }

  // Calculate the NPV
  for (let i = 0; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(1 + rate, i)
  }

  // return parseFloat(npv).toFixed(2)
  return npv
}

/**
 * Function to rank investments based on their Net Present Value.
 *
 * @param {Array} userInvestments the investments to be ranked
 * @returns {Array} the ranked investments
 */
export function rankInvestmentsOnNetPresentValue (userInvestments) {
  // Calculate the NPV for each investment
  userInvestments.forEach((userInvestment) => {
    userInvestment.npv = calculateNetPresentValue(userInvestment.cashFlows, userInvestment.rate)
  })

  // Sort and return the investments by NPV
  return userInvestments.sort((a, b) => b.npv - a.npv)
}
