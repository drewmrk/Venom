/**
 * @function all Returns true if all values are true
 * @param {array|object} input
 * @returns {boolean} result
 */
const all = input => {
    let result = true
    if (input instanceof Object) {
        for (let [_, i] of Object.entries(input)) {
            if (!i) {
                result = false
            }
        }
    } else {
        for (i of input) {
            if (!i) {
                result = false
            }
        }
    }
    return result
}

export default all
