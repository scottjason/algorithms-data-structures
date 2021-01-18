// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = {};
  let maxUsedChar = 0;
  for (let char of str) {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  Object.keys(hash).forEach(key => {
    if (hash[key] > maxUsedChar) {
      maxUsedChar = key;
    }
  });
  return maxUsedChar;
}

// // Solution 1
// function maxChar(str) {
//   const map = {};
//   str.split('').forEach(char => {
//     map[char] = map[char] ? map[char] + 1 : 1;
//   });

//   let maxUsedChar = '';
//   let maxTimesUsed = 0;
//   Object.keys(map).forEach(key => {
//     if (map[key] > maxUsedChar) {
//       maxTimesUsed = map[key];
//       maxUsedChar = key;
//     }
//   });
//   return maxUsedChar
// }

// // Solution 2
// function maxChar(str) {
//   const map = {};
//   for (let char of str) {
//     map[char] = map[char] ? map[char] + 1 : 1;
//   }
//   let maxUsedChar = '';
//   let maxTimesUsed = 0;
//   Object.keys(map).forEach(key => {
//     if (map[key] > maxTimesUsed) {
//       maxTimesUsed = map[key];
//       maxUsedChar = key;
//     }
//   });
//   return maxUsedChar
// }

// // Solution 3
// function maxChar(str) {
//   const map = {};
//   str.split('').forEach(char => {
//     map[char] = map[char] ? map[char] + 1 : 1;
//   });

//   let maxUsedChar = '';
//   let maxTimesUsed = 0;
//   for (let key in map) {
//     if (map[key] > maxTimesUsed) {
//       maxTimesUsed = map[key];
//       maxUsedChar = key;
//     }
//   }
//   return maxUsedChar;
// }

module.exports = maxChar;
