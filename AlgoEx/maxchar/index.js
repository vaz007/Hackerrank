// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";
  for (let character of str) {
    if (!charMap[character]) {
      charMap[character] = 1;
    } else {
      charMap[character]++;
    }
  }

  // for in loop is used to itterate over object

  for (let character in charMap) {
    if (charMap[character] > max) {
      max = charMap[character];
      maxChar = character;
    }
  }
  // console.log(maxChar, max);
  return maxChar;
}

maxChar("abcccccccd");
module.exports = maxChar;

// function maxChar(str) {
//     let result = {};

//     for (let character of str) {
//       if (!result[character]) {
//         result[character] = 1;
//       } else {
//         result[character] += 1;
//       }
//     }

//     console.log(result);
//   }
