array-subtract-functional-compare
=================================

[![Build Status](https://travis-ci.org/cflynn07/array-subtract-functional-compare.svg)](https://travis-ci.org/cflynn07/array-subtract-functional-compare)
[![Code Climate](https://codeclimate.com/github/cflynn07/array-subtract-functional-compare/badges/gpa.svg)](https://codeclimate.com/github/cflynn07/array-subtract-functional-compare)
[![codecov.io](https://codecov.io/github/cflynn07/array-subtract-functional-compare/coverage.svg?branch=master)](https://codecov.io/github/cflynn07/array-subtract-functional-compare?branch=master)
[![Dependency Status](https://david-dm.org/cflynn07/array-subtract-functional-compare.svg)](https://david-dm.org/cflynn07/array-subtract-functional-compare)
[![devDependency Status](https://david-dm.org/cflynn07/array-subtract-functional-compare/dev-status.svg)](https://david-dm.org/cflynn07/array-subtract-functional-compare#info=devDependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![NPM](https://nodei.co/npm/array-subtract.png?compact=true)](https://nodei.co/npm/array-subtract/)  

Compute the difference between two arrays with an optional custom equality comparison method.

Inspired by Ruby's built in Array Difference: [Ruby Docs: Array-Difference][0]

`array-subtract-functional-compare` is slightly different from the NPM package
[array-difference][1]. This module will subtract one array from another array, and return a new
array with a subset of the values in the first array. `array-difference` computes the
[symmetric difference][2] (XOR) of two arrays.

Symmetric Difference vs Array Subtraction
-----------------------------------------
```
A: [1, 2, 3, 4, 5]
B: [3, 4, 5, 6, 7]

Symmetric difference: A XOR B = [1, 2, 6, 7]
Array subtraction: A - B = [1, 2]
```

```js
// In Ruby the subtraction operator is overloaded to work with arrays
[1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5] - [1, 3, 4]
// => [2, 2, 5, 5, 5, 5, 5]

// Equivalent operation in JavaScript using array-subtract
var Subtract = require('array-subtract')
var subtract = new Subtract((a, b) => { return a === b })
subtract.sub([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], [1, 3, 4])
// => [2, 2, 5, 5, 5, 5, 5]
```

Usage
-----
```js
var namesA = [{
  name: 'David'
}, {
  name: 'Jessica'
}, {
  name: 'Sam'
}, {
  name: 'Jessica'
}]

var namesB = [{
  name: 'Sam'
}, {
  name: 'Tim'
}]

var Subtract = require('array-subtract')
/**
 * Arguments of comparator function passed to new Subtract()
 *
 * @param {*} itemA - Any element of an array argument passed to subtract.sub
 * @param {*} itemB - Any element of an array argument passed to subtract.sub
 */
var subtract = new Subtract((itemA, itemB) => { return itemA.name === itemB.name })

// namesA - namesB
var namesC = subtract.sub(namesA, namesB)
// => [{ name: 'David' }, { name: 'Jessica' }, { name: 'Jessica' }]
```

Testing
-------
```
# Run using Node v4.0.0 or higher
$ npm run test
$ npm run html-test-cov # Will generate HTML coverage report and attempt to auto-open Chrome (OSX)
```

License
-------
MIT

[0]: http://ruby-doc.org/core-2.3.0/Array.html#2D-method
[1]: https://www.npmjs.com/package/array-difference
[2]: https://en.wikipedia.org/wiki/Symmetric_difference
