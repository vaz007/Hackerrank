const fibonacci = number => {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  } 
};

// takes linear time

const fibonacciLinear = number => {
  if (number < 2) {
    // console.log(number)
    return number;
  } else {
    let initial = 0;
    let total = 0;
    let shiftInitial = 1;
    for (let i = 2; i <= number; i++) {
      total = initial + shiftInitial;
      //    console.log(total)
      initial = shiftInitial;
      shiftInitial = total;
    }
    return total;
  }
};

module.exports = fibonacciLinear;
