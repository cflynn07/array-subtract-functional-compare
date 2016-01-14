/**
 * @module src/index_test
 */
'use strict'

var deepcopy = require('deepcopy')
var test = require('unit.js')

var Subtract = require('./index')

describe('src/index', () => {
  var subtract

  beforeEach(() => {
    subtract = new Subtract((a, b) => {
      return a.name === b.name
    })
  })

  it('should throw an Error if not passed a function', () => {
    var throws = () => {
      throw new Subtract(null)
    }
    test.exception(throws)
  })

  it('should throw an Error if not passed arrays', () => {
    var willThrow1 = () => {
      subtract.sub(0xFF, [])
    }
    var willThrow2 = () => {
      subtract.sub([], 0xFF)
    }
    test.exception(willThrow1)
    test.exception(willThrow2)
  })

  it('should handle an empty array as first argument', () => {
    var a = []
    var b = [{
      name: 'Erica'
    }]

    var aCopy = deepcopy(a)
    var bCopy = deepcopy(b)

    var c = subtract.sub(a, b)
    test.array(c).is([])

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })

  it('should handle an empty array as second argument', () => {
    var a = [{
      name: 'Erica'
    }]
    var b = []

    var aCopy = deepcopy(a)
    var bCopy = deepcopy(b)

    var c = subtract.sub(a, b)

    test.array(c)
      .is([{
        name: 'Erica'
      }])

    test.value(c)
      .isNotStrictEqualTo(a)
      .isNotStrictEqualTo(b)

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })

  it('should subtract, A no duplicates, matches in B', () => {
    var a = [{
      name: 'Erica'
    }, {
      name: 'Tim'
    }]
    var b = [{
      name: 'Erica'
    }]

    var aCopy = deepcopy(a)
    var bCopy = deepcopy(b)

    var c = subtract.sub(a, b)

    test.array(c)
      .is([{
        name: 'Tim'
      }])

    test.value(c)
      .isNotStrictEqualTo(a)
      .isNotStrictEqualTo(b)

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })

  it('should subtract, A duplicates, matches in B', () => {
    var a = [{
      name: 'Erica'
    }, {
      name: 'Erica'
    }, {
      name: 'Tim'
    }]
    var b = [{
      name: 'Tim'
    }]

    var aCopy = deepcopy(a)
    var bCopy = deepcopy(b)

    var c = subtract.sub(a, b)

    test.array(c)
      .is([{
        name: 'Erica'
      }, {
        name: 'Erica'
      }])

    test.value(c)
      .isNotStrictEqualTo(a)
      .isNotStrictEqualTo(b)

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })

  it('should subtract, A no duplicates, no matches in B', () => {
    var a = [{
      name: 'Erica'
    }, {
      name: 'John'
    }, {
      name: 'Tim'
    }]
    var b = [{
      name: 'Samantha'
    }]

    var aCopy = deepcopy(a)
    var bCopy = deepcopy(b)

    var c = subtract.sub(a, b)

    test.array(c)
      .is([{
        name: 'Erica'
      }, {
        name: 'John'
      }, {
        name: 'Tim'
      }])

    test.value(c)
      .isNotStrictEqualTo(a)
      .isNotStrictEqualTo(b)

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })

  it('should subtract, A duplicates, no matches in B', () => {
    var a = [{
      name: 'Erica'
    }, {
      name: 'John'
    }, {
      name: 'Tim'
    }, {
      name: 'Tim'
    }]
    var b = [{
      name: 'Samantha'
    }]

    var aCopy = deepcopy(a)
    var bCopy = deepcopy(b)

    var c = subtract.sub(a, b)

    test.array(c)
      .is([{
        name: 'Erica'
      }, {
        name: 'John'
      }, {
        name: 'Tim'
      }, {
        name: 'Tim'
      }])

    test.value(c)
      .isNotStrictEqualTo(a)
      .isNotStrictEqualTo(b)

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })
})
