console.log("reverse");

//In built function

const reverse = str => {
  // reverse is an inbuilt function for arrays

  console.log(
    str
      .split("")
      .reverse()
      .join("")
      .toString()
  );
  return str
    .split("")
    .reverse()
    .join("")
    .toString();
};
reverse("apple");

//Manually using for loop
// Linear time complexity

const reverseLinear = str => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log(reversed);
  return reversed;
};
reverseLinear("apple");

// Most complicated sol
// reduce is another array function 
// which takes two parameters
// first starting initial value 
// and second the loop for each char
const reverseString = str => {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
};
reverseString("apple");

module.exports = reverseString;
