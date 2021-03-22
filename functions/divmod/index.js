/**
 * @function divmod Divide two numbers and display the quotient and remainder
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number[]} result
 */
const divmod = (dividend, divisor) => {
    let result = []
    result.push(Math.floor(dividend / divisor))
    result.push(dividend % divisor)
    return result
}

export default divmod
