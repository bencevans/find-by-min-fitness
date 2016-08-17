const assert = require('assert')
const findByMinFitness = require('./')

const arr1 = [
  100,
  350,
  200
]

let result

// Search for nearest value to 300
result = findByMinFitness(arr1, (val) => {
  return 300 - val
})
assert.equal(result, 350)

// Search for nearest to 120 ignoring lower values
result = findByMinFitness(arr1, (val) => {
  if (val < 120) {
    // returning false will means this will be ignored
    return false
  } else {
    return 120 - val
  }
})
assert.equal(result, 200)

// Search for nearest to 199 heigher lower values
result = findByMinFitness(arr1, (val) => {
  if (val > 199) {
    return false
  } else {
    return 199 - val
  }
})
assert.equal(result, 100)

// Handles negatice values: Find nearest to 2
let arr2 = [
  -20,
  30,
  50
]
result = findByMinFitness(arr2, (val) => {
  return -10 - val
})
assert.equal(result, -20)

// Handle an empty array
result = findByMinFitness([], (val) => {
  return val // shouldn't even be called
})
assert.equal(result, null)
