const sumOfArray = array => {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    console.log(sum)
  }
  return sum;
};

sumOfArray([1, 2, 3, 4, 10, 11]);
