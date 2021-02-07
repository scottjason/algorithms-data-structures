// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let mostCommonChar;
  let usedMostTimes = 0;
  const counterHash = {};
  for (let char of str) {
    counterHash[char] = counterHash[char] || 0;
    counterHash[char]++
  }
  for (let char in counterHash) {
    if (counterHash[char] > usedMostTimes) {
      mostCommonChar = char;
      usedMostTimes = counterHash[char];
    }
  }
  return mostCommonChar;
}

module.exports = maxChar;
