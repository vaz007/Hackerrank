const plusMinus = arr => {
    let plus = 0;
    let minus = 0;
    let neutral = 0;
    for (let i =0; i<arr.length; i++){
      if (arr[i] > 0) {
          plus = plus + 1;
        } else if (arr[i] < 0) {
          minus = minus + 1;
        } else {
          neutral = neutral + 1;
        }
    }
    plus = (plus / arr.length).toFixed(arr.length);
    minus = (minus / arr.length).toFixed(arr.length)
    neutral = (neutral / arr.length).toFixed(arr.length)
    
    console.log("",plus,"\n", minus, "\n", neutral)
    return (plus,"\n", minus, "\n", neutral);
  };
  plusMinus([1, 2, 3, -1, -2, -3, 0, 0 ]);
  