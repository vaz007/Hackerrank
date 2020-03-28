// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* 
 Easiest way 
 replace all the special characters with empty string
 convert everything to lowercase
 make an array by using split and then sort the array
 then join it back
 last step is to compare it
*/
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB) 
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

/* 
hint
 Way to approach is first create two objects and add keys 
 then compare both the objects
*/

// function anagrams(stringA, stringB) {
//     aCharMap = buildCharMap(stringA);
//     bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
//       return false;
//     }

//     for (let char in aCharMap) {
//       if (aCharMap[char] !== bCharMap[char]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   function buildCharMap(str) {
//     const charMap = {};

//     for (char of str.replace(/[^\w]/g, "").toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }
