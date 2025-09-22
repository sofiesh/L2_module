/**
 * A module to calculate whether it is better to rent or buy.
 *
 * @author Sofie Swagemakers Herou
 */

/**
 * Function to validate the input.
 *
 * @param {number} priceToBuy
 * @param {number} priceToRentPerMonth
 * @param {number} lengthOfPeriodMonths
 * @throws {Error} If the price to buy is not a positive number.
 */
export function validateRentOrBuyInput (priceToBuy, priceToRentPerMonth, lengthOfPeriodMonths) {
  if (isNaN(priceToBuy) || priceToBuy < 0) {
    throw new Error('The price to buy must be a positive number.')
  }

  if (isNaN(priceToRentPerMonth) || priceToRentPerMonth < 0) {
    throw new Error('The price to rent per month must be a positive number.')
  }

  if (isNaN(lengthOfPeriodMonths) || lengthOfPeriodMonths < 0) {
    throw new Error('The length of the rental period(months) must be a positive number.')
  }
}

/**
 * Function to calculate whether it is better to rent or buy.
 *
 * @param {number} priceToBuy - The price for the product.
 * @param {number} priceToRentPerMonth - The monthly cost for renting.
 * @param {number} lengthOfPeriodMonths - Planned renting period in months.
 * @returns {object} An object with parameters to compare the costs of renting and buying.
 */
export function rentOrBuy (priceToBuy, priceToRentPerMonth, lengthOfPeriodMonths) {
  validateRentOrBuyInput(priceToBuy, priceToRentPerMonth, lengthOfPeriodMonths)

  const totalCostToBuy = priceToBuy
  const totalCostToRent = priceToRentPerMonth * lengthOfPeriodMonths
  const monthsToBreakEven = priceToBuy / priceToRentPerMonth

  return {
    monthlyBuyCost: priceToBuy / lengthOfPeriodMonths,
    monthlyRentCost: priceToRentPerMonth,
    totalCostToBuy,
    totalCostToRent,
    monthsToBreakEven
  }
}
