/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/
const addTwoNumbers = function(l1, l2) {
  l1 = reverseAnArray(l1);
  l2 = reverseAnArray(l2);

  let addUp = l1 + l2;
  let result = [];
  addUp = addUp.toString();

  for (let i = addUp.length - 1; i >= 0; i--) {
    console.log("Index", i, " Value ", addUp[i]);
    result.push(parseInt(addUp[i]));
  }

  console.log(result);
  return result;
};

// Helper method
const reverseAnArray = arr => {
  let reverse = "";
  for (let i = 0; i < arr.length; i++) {
    reverse += arr[i];
  }
  return parseInt(reverse);
};

// Easiest Solution

// const addTwoNumbers = function(l1, l2) {
//     l1 = l1.join("");
//     l2 = l2.join("");
//     let result = parseInt(l1) + parseInt(l2);

//     result = result
//       .toString()
//       .split("")
//       .reverse()
//       .map(Number);
//     console.log(result);
//   return result
// }

addTwoNumbers([2, 4, 3], [5, 6, 4]);
