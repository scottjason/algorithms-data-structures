// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  return str.split('').reverse().join('')
}

// Solution 2
function reverse(str) {
  let output = '';
  for (let char of str) {
    output = char + output
  }
  return output;
}

// Solution 3
function reverse(str) {
  return str.split('').reduce((output, char) => 
    char + output
  , '')
}


module.exports = reverse;
