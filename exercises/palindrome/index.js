// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
function palindrome(str) {
  const reversed = str.split('').reduce((rev, char) => char + rev, '');
  return reversed === str;
}

// Solution 2
// function palindrome(str) {
//   const output = str.split('').every((char, idx) => {
//     return char === str[str.length - idx - 1];
//   });
//   return output;
// }

module.exports = palindrome;
