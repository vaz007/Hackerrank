// Space and time Complexity

/* 
    Space: O(n)
    time: O(n)
    it is running linear checking each values and can't be reduced than that because we need to check each value of the provided array

    I have created a helper method to get cols out from main array. This is done by js inbuilt map function. 

    Further in the calculateSumAvgDistinct function I have taken the value of a column and added it to the specific array (sum, avg, distinctValues)
    I have also used Set to filter out unique elements in the given col
*/

const calculateSumAvgDistinct = (arr) => {
  const sum = [];
  const avg = [];
  const distinctValues = [];
  let i = 0;
  while (i < arr[i].length) {
    const newArrayColumn = arrayColumn(arr, i);
    const sumValue = newArrayColumn.reduce((a, b) => a + b, 0);
    const avgValue = sumValue / arr.length;
    distinctValues.push(new Set(newArrayColumn).size);
    sum.push(sumValue);
    avg.push(avgValue);
    i++;
  }
  console.log(c);
  return {
    sum,
    avg,
    distinctValues,
  };
};

const arrayColumn = (arr, n) =>
  arr.map((x) => {
    return x[n];
  });

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 8, 9],
  [10, 8, 9],
];

calculateSumAvgDistinct(twoDimensionalArray);
