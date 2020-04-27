// Input will be a square matrix
/* 
    Input =  [1, 2, 3],
             [3, 4, 5],
             [3, 4, 6]
    
    Output  = 1+4+6 - 3+4+3 = 1
*/

const diagonalDifference = (arr) => {
  let mainSum = 0,
    secondarySum = 0;
  for (let row = 0; row < arr.length; row++) {
    mainSum += arr[row][row];
    secondarySum += arr[row][arr.length - row - 1];
  }
  console.log(mainSum + " " + secondarySum);
};
diagonalDifference([
  [1, 2, 3],
  [3, 4, 5],
  [3, 4, 6],
]);
