/**
 * @function sum Sum together the values of an array
 * @param {number[]} input
 * @returns {number}
 */
const sum = input => {
    input.reduce((start, end) => start + end)
}

export default sum
