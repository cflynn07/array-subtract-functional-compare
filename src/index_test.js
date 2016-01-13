/**
 * @module src/index_test
 */
'use strict'

var test = require('unit.js')

var Subtract = require('./index')

describe('src/index', () => {
  describe('with a functional compare', () => {
    var subtract

    beforeEach(() => {
      subtract = new Subtract({
        accessor: (obj) => {
          return obj.name
        }
      })
    })

    it('should throw an Error if passed non-array arguments', () => {
      test.exception(subtract.sub(0xFF, 'hello'))
    })

    it('should handle an empty array as first argument', () => {
      var a = []
      var b = []
      var c = subtract.sub(a, b)
      test.array(c).is([])
    })

    it('should handle an empty array as second argument', () => {
    })

    it('should subtract, A no duplicates, matches in B', () => {
    })

    it('should subtract, A duplicates, matches in B', () => {
    })

    it('should subtract, A no duplicates, no matches in B', () => {
    })

    it('should subtract, A duplicates, no matches in B', () => {
    })
  })

  describe('with a strict equality (===) compare', () => {
    var subtract

    beforeEach(() => {
      subtract = new Subtract({
      })
    })

    it('should throw an Error if passed non-array arguments', () => {
    })

    it('should handle an empty array as first argument', () => {
    })

    it('should handle an empty array as second argument', () => {
    })

    it('should subtract, A no duplicates, matches in B', () => {
    })

    it('should subtract, A duplicates, matches in B', () => {
    })

    it('should subtract, A no duplicates, no matches in B', () => {
    })

    it('should subtract, A duplicates, no matches in B', () => {
    })
  })

})
