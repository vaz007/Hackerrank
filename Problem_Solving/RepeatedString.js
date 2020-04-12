const repeatedString = (s, n) => {
  let repeatedLetter = 0;
  if (s.length == 1) {
    repeatedLetter = n;
  } else {
    let string = s.repeat(n);
    string = string.slice(0, n);
    string.split("").map((letter) => {
      if (letter === "a") {
        repeatedLetter += 1;
      }
    });
  }
  console.log(repeatedLetter);

  return repeatedLetter;
};
repeatedString("a", 10);
