const debug = require('debug')('find-by-min-fitness')

function findByMinFitness(arr, fitnessCallback) {
  let fitnesses = []
  for (var i = 0; i < arr.length; i++) {
    let fitness = fitnessCallback(arr[i])
    if (typeof fitness === 'number') {
      fitnesses[i] = Math.abs(fitness)
    } else {
      fitnesses[i] = fitness
    }
    debug('set fitness of arr[' + i + '] to ' + fitnesses[i])
  }
  let bestIndexSoFar = null
  let bestFitnessSoFar = null
  debug(fitnesses)
  for (var i = 0; i < fitnesses.length; i++) {
    let fitness = fitnesses[i]
    if (typeof fitness === 'number') {
      if (bestIndexSoFar === null || fitness < bestFitnessSoFar) {
        bestIndexSoFar = i
        bestFitnessSoFar = fitness
        debug('new best fitness ' + fitness)
      }
    } else {
      debug('ignoring val')
    }
  }
  return arr[bestIndexSoFar]
}

module.exports = findByMinFitness
