array-difference-functional
===========================

Compute the difference between two arrays with an optional custom equality comparison method.

Inspired by Ruby's built in Array Difference: [Ruby Docs: Array-Difference][0]

`array-difference-functional` is slightly different from the NPM package [array-difference][1].
This module will subtract one array from another, whereas array-difference will give the
[symmetric difference][2] (XOR) of two arrays.

Symmetric Difference vs Array Subtraction
-----------------------------------------
```
A: [1, 2, 3, 4, 5]
B: [3, 4, 5, 6, 7]

Symmetric difference: A XOR B = [1, 2, 6, 7]
Array subtraction A - B = [1, 2]
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
}]

var namesB = [{
  name: 'Sam'
}, {
  name: 'Tim'
}]

var ADF = require('array-difference-functional')
var adf = new ADF({
  /**
   * @param {*} namesArrayItem
   * @param {Number} namesArrayIndex
   * @param {Number} adfArgumentIndex
   */
  accessor: (namesArrayItem, namesArrayIndex, adfArgumentIndex) => {
    return namesArrayItem.name
  }
})

// namesA - namesB
var namesC = adf.subtract(namesA, namesB)
// => [{
  name: 'David'
}, {
  name: 'Jessica'
}]
```

[0]: http://ruby-doc.org/core-2.3.0/Array.html#2D-method
[1]: https://www.npmjs.com/package/array-difference
[2]: https://en.wikipedia.org/wiki/Symmetric_difference
