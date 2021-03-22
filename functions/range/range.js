/**
 * @function range Create list of numbers through a specified range and step
 * @param {number} input
 * @param {number} start
 * @returns {number[]} result
 */
const range = (start, end, step = 0) => {
    let result = []
    for (let i = start; i < end; i += step) {
        result.push(i)
    }
    return result
}

export default range
