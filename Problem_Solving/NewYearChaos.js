const NewYearChaos = (q) => {
  let totalSwapCount = 0;

  for (i = 0; i < q.length; i++) {
    totalSwapCount += swapChainCount(q, i);
  }

  if (totalSwapCount > 3) {
    console.log("Too chaotic");
  } else {
    console.log(totalSwapCount);
  }
  //  return totalSwapCount;
};

const swapChainCount = (arr, index) => {
  let swapCount = 0;
  let current = arr[index];
  let target = arr[current - 1];

  while (current !== target) {
    arr[index] = target;
    arr[current - 1] = current;
    swapCount += 1;
    current = target;
    target = arr[current - 1];
  }
  return swapCount;
};

NewYearChaos([2, 1, 5, 3, 4]);
