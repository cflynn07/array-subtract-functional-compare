/**
 * @module src/index
 */
'use strict'

class ArraySubtract {
  /**
   *
   */
  constructor (opts) {
    this.accessor = opts.accessor
  }

  /**
   * Returns a new array that contains a unique set of all the values in `a` that do not have
   * corresponding values in b
   *
   * @param {Array<*>} a
   * @param {Array<*>} b
   * @return Array<*>
   */
  sub (a, b) {
    Array.prototype.splice.call(this, arguments).forEach((funcArg) => {
      if (!Array.isArray(funcArg)) {
        throw new Error('invalid arguments, arguments to ArraySubtract.prototype.sub must be Arrays')
      }
    })
    return []

    var resultArray = []
    for (let i = 0, lenA = a.length; i < lenA; i++) {
      let aVal = a[i]
      for (let k = 0, lenB = b.length; k < lenB; k++) {
        let bVal = b[k]

      }
    }
  }
}

module.exports = ArraySubtract
