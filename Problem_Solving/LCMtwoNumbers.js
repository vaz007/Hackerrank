function lcm_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return !x || !y ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

// gcd/hcf recursive function

const gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

console.log(lcm_two_numbers(3, 15));
console.log(lcm_two_numbers(10, 15));

//   function gcd_two_numbers(x, y) {
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }
