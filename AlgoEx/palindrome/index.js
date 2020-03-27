// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversed = "";
  for (character of str) {
    reversed = character + reversed;
  }
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;

function palindromeEasySolution(str) {
  const reverse = str
    .split("")
    .reverse()
    .join("");
  // return here return a boolean
  return str === reverse;
}

// checkout every() function on mdn website
// taken two parameters 1 is character,
// and second is index
//
function palindromeComplexSol(str) {
  return str.split("").every((character, i) => {
    return character === str[str.length - i - 1];
  });
}
