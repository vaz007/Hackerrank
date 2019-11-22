/*
 *  Big Sum
 */

const bigSum = ar => {
  let result = 0;
  const array = ar.map(x => {
    result = x + result;
    // console.log (result)
  });
  array;
  return result;
};

bigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
