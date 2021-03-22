/**
 * @function all Returns true if all values are true
 * @param {array|object} input
 * @returns {boolean} result
 */
export const all = input => {
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

/**
 * @function any Returns true if only one value is true
 * @param {array|object} input
 * @returns {boolean} result
 */
export const any = input => {
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

/**
 * @function divmod Divide two numbers and display the quotient and remainder
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number[]} result
 */
export const divmod = (dividend, divisor) => {
    let result = []
    result.push(Math.floor(dividend / divisor))
    result.push(dividend % divisor)
    return result
}

/**
 * @function enumerate Create list of characters with their index
 * @param {string} input
 * @param {number} start
 * @returns {[{string, any}]} result
 */
export const enumerate = (input, start = 0) => {
    let result = []
    input.split('').map((i, index) => {
        result.push({ [index + start]: i })
    })
    return result
}

/**
 * @function max Get the largest number in a set
 * @param {number[]|object} input
 * @returns {number}
 */
export const max = input => {
    return Math.max(...input)
}

/**
 * @function min Get the smallest number in a set
 * @param {number[]|object} input
 * @returns {number}
 */
export const min = input => {
    return Math.min(...input)
}

/**
 * @function range Create list of numbers through a specified range and step
 * @param {number} input
 * @param {number} start
 * @returns {number[]} result
 */
export const range = (start, end, step = 1) => {
    let result = []
    for (let i = start; i < end; i += step) {
        result.push(i)
    }
    return result
}

/**
 * @function sum Sum together the values of an array
 * @param {number[]} input
 * @returns {number}
 */
export const sum = input => {
    input.reduce((start, end) => start + end)
}
