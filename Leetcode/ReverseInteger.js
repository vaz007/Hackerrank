const reverse = x => {
  x = x.toString();
  reversed = "";
  for (let i = x.length - 1; i >= 0; i--) {
    console.log(x[i]);
    reversed += x[i];
  }
  console.log(typeof parseInt(reversed), parseInt(reversed));
};

reverse(123);

// reverse(-431)

//Easy sol

// const reverse = (x) => {

//     reversed = x.toString().split("").reverse().join("")
//     console.log(parseInt(reversed) * Math.sign(x))
//     return parseInt(reversed) * Math.sign(x)

// }
