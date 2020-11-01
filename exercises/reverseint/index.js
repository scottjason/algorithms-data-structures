// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
function reverseInt(n) {
  let output = n.toString().split('').reverse().join('');
  return parseInt(output) * Math.sign(n);
}

// Solution 2
// function reverseInt(n) {
//   let output;
//   if (n === 0) {
//     return n;
//   } else if (n > 0) {
//     output = n
//       .toString()
//       .split('')
//       .reduce((acc, char) => {
//         return char + acc;
//       }, '');
//     return parseInt(output);
//   } else {
//     let tmp = Math.abs(n);
//     output = tmp
//       .toString()
//       .split('')
//       .reduce((acc, char) => {
//         return char + acc;
//       }, '');
//     return -Math.abs(output);
//   }
// }

module.exports = reverseInt;
