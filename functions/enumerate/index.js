/**
 * @function enumerate Create list of characters with their index
 * @param {string} input
 * @param {number} start
 * @returns {[{string, any}]} result
 */
const enumerate = (input, start = 0) => {
    let result = []
    input.split('').map((i, index) => {
        result.push({ [index + start]: i })
    })
    return result
}

export default enumerate
