// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1
// function maxChar(str) {
//   const map = {};
//   str.split('').forEach(char => {
//     map[char] = map[char] ? map[char] + 1 : 1;
//   });

//   let maxUsedChar = 0;
//   Object.keys(map).forEach(key => {
//     if (map[key] > maxUsedChar) {
//       maxUsedChar = key;
//     }
//   });
//   return maxUsedChar
// }

// Solution 2
function maxChar(str) {
  const map = {};
  for (let char of str) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  let mostUsedChar;
  let maxTimesUsed = 0;
  Object.keys(map).forEach(key => {
    if (map[key] > maxTimesUsed) {
      maxTimesUsed = map[key];
      mostUsedChar = key;
    }
  });
  return mostUsedChar
}

module.exports = maxChar;
