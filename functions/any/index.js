/**
 * @function any Returns true if only one value is true
 * @param {array|object} input
 * @returns {boolean} result
 */
const any = input => {
    let result = false
    if (input instanceof Object) {
        for (let [_, i] of Object.entries(input)) {
            if (i) {
                result = true
            }
        }
    } else {
        for (i of input) {
            if (i) {
                result = true
            }
        }
    }
    return result
}

export default any
