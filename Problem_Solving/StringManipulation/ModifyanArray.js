function modifyArray(arr) {
  // Write your code here
  const sortedArray = arr;
  cost = 0;
  console.log(sortedArray)

  for (i = 0; i < sortedArray.length; i++) {
      console.log(sortedArray[i])

    if (sortedArray[i] > sortedArray[i+1]) {
      cost = sortedArray[i +2] - sortedArray[i];
    }
  }
  console.log(cost);
}

modifyArray([0, 1, 2, 5, 6, 5, 7]);
