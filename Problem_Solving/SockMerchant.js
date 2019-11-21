console.log("Hackerrank questions");
// Sock Merchant proble
// Input n = 9 and array = 10 20 20 10 10 30 50 10 20

function pair(n, array) {
    let sorted = array.sort((a, b) => a - b);
    let pairs = 0;
    for (i = 0; i < n - 1; i++) {
      if (sorted[i] === sorted[i + 1]) {
        pairs++;
        i++;
      }
    }
      console.log(pairs)
  }
  // console.log(matchPair)
  
   pair(5, [10, 20, 20, 10, 30])
  