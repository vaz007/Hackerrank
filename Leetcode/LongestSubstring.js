/**
 * Given a string, find the length of the longest substring
 *  without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * 
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
//   let charMap = {};
//   let max = 0;
// let count = 0;
// let tempString = "";
//   for (character of s) {
//     tempString += character;
//     for (char of tempString) {
//       if (character === char) {
        
//         charMap[tempString] = 1;
//         tempString = tempString.slice(0, count)
//       }
//       else {
//           count++;
//       }
//     }


//   }




  const visited = new Set();
  let left = 0;
  let right = 0;
  let res = 0;

  // use sliding window
  while (right < s.length) {
    const currentChar = s.charAt(right);
    // not visited
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      res = Math.max(res, right - left + 1);
      right++;
    } else {
      visited.delete(s.charAt(left));
      left++;
    }
  }

  console.log(res)
  return res;


  

  console.log(charMap);
};

lengthOfLongestSubstring("abcabcbb");
