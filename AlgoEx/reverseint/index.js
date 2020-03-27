// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

    // Math.sign return 1 if its a positive number
    // else it returns -1 if its negative number
    return parseInt(reversed) * Math.sign(n)



}

module.exports = reverseInt;
