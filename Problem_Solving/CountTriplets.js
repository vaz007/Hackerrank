const countTriplets = (arr, r) => {
  count = 0;
  tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % r === 0 || arr[i] === 1) {
        for (j =0; j < 3; j++){
            tempArray[i] = arr[i]
        }
    }
  }
  console.log(tempArray);
};

countTriplets([1, 2, 2, 4], 2);
