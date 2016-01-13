/**
 * @module src/index
 */
'use strict'

const deepcopy = require('deepcopy')
const findIndex = require('101/find-index')
const isFunction = require('101/is-function')

class ArraySubtract {
  /**
   * Accepts a function as a comparator
   * @constructor
   * @throws
   * @param {Function} comparator
   */
  constructor (comparator) {
    if (!isFunction(comparator)) {
      throw new Error('argument must be a function')
    }
    this.comparator = comparator
  }

  /**
   * Returns a new array that contains a unique set of all the values in `a` that do not have
   * corresponding values in b
   *
   * @throws
   * @param {Array<*>} a
   * @param {Array<*>} b
   * @return Array<*>
   */
  sub (a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error('invalid arguments, arguments to ArraySubtract.prototype.sub must be Arrays')
    }
    var resultArray = []
    for (let i = 0, lenA = a.length; i < lenA; i++) {
      let aVal = deepcopy(a[i])
      let bFindIndex = findIndex(b, (val) => {
        return this.comparator(aVal, deepcopy(val))
      })
      if (!~bFindIndex) {
        // aVal does not exist in b
        resultArray.push(aVal)
      }
    }
    return resultArray
  }
}

module.exports = ArraySubtract
