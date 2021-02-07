// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(strOne, strTwo) {
  const countHashOne = generateCharCountHash(strOne);
  const countHasTwo = generateCharCountHash(strTwo);
  let isAnagram = true;
  for (let char in countHashOne) {
    if (countHashOne[char] !== countHasTwo[char]) {
      isAnagram = false;
    }
  }
  return isAnagram;
}

function generateCharCountHash(str) {
  const countHash = {};
  for(let char of str) {
    countHash[char] = countHash[char] || 0;
    countHash[char]++;
  }
  return countHash;
}


anagrams('rail safety', 'fairy tales');

// function anagrams(stringA, stringB) {
//   const charMapA = generateCharMap(stringA);
//   const charMapB = generateCharMap(stringB);
//   for (let key in charMapA) {
//     if(charMapA[key] !== charMapB[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function generateCharMap(str) {
//   const charMap = {};
//   for (let char of str) {
//     charMap[char] = charMap[char] ? charMap[char] += 1 : 1;
//   }
//   return charMap;
// }




// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   str = str.replace(/\w+\s/g, '').toLowerCase();
//   const charMap = {};
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
