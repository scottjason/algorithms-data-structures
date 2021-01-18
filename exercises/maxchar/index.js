// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charHash = {};
  let maxUsedChar = 0;
  for (let char of str) {
    charHash[char] = charHash[char] + 1 || 1;
  }
  for (let char in charHash) {
    if (charHash[char] > maxUsedChar) {
      maxUsedChar = char;
    }
    return maxUsedChar;
  }
}

module.exports = maxChar;
