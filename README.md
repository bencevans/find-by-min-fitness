# find-by-min-fitness

> Find an item in an array by evaluating the minimum fitness of each item

## Install

    $ npm install find-by-min-fitness

## Usage

```js
const findByMinFitness = require('find-by-min-fitness')
const locations = [
  {
    name: 'Beach',
    distance: 30
  }, {
    name: 'City',
    distance: 90
  },
  {
    name: 'University',
    distance: 80
  }
]

// Find the nearest destination to 40 miles
findByMinFitness(locations, (location) => {
  return 40 - location.distance
})
// => { name: 'Beach', distance: 30 }
```
Check `/test.js` for more...


## Licence

MIT &copy; [Ben Evans](https://bencevans.io)
