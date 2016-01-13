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

  it('should throw an Error if passed non-array arguments', () => {
    test.exception(subtract.sub(0xFF, 'hello'))
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

    test.value(c[0])
      .isNotStrictEqualTo(a[1]) // Assert return val is a deep copy

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
      }])

    test.value(c[0])
      .isNotStrictEqualTo(a[0])
      .isNotStrictEqualTo(b[1]) // Assert return val is a deep copy

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

    // Assert return val is a deep copy
    test
      .value(c[0])
        .isNotStrictEqualTo(a[0])
      .value(c[1])
        .isNotStrictEqualTo(a[1])
      .value(c[2])
        .isNotStrictEqualTo(a[2])

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
      }])

    // Assert return val is a deep copy
    test
      .value(c[0])
        .isNotStrictEqualTo(a[0])
      .value(c[1])
        .isNotStrictEqualTo(a[1])
      .value(c[2])
        .isNotStrictEqualTo(a[2])
      .value(c[3])
        .isNotStrictEqualTo(a[2])

    test.value(c)
      .isNotStrictEqualTo(a)
      .isNotStrictEqualTo(b)

    // Test sub() arguments not mutated
    test.array(a).is(aCopy)
    test.array(b).is(bCopy)
  })
})
