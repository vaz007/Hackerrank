function isValid(s) {
  let bIsValidString = false;
  let oCharMapCount = s
    .trim()
    .split("")
    .reduce((acc, val) => {
      if (acc[val]) {
        acc[val] += 1;
      } else {
        acc[val] = 1;
      }
      return acc;
    }, {});
  let oCharOccuranceMap = {};
  for (let key in oCharMapCount) {
    if (oCharOccuranceMap[oCharMapCount[key]]) {
      oCharOccuranceMap[oCharMapCount[key]] += 1;
    } else {
      oCharOccuranceMap[oCharMapCount[key]] = 1;
    }
  }
  let iCharOccurances = (Object.keys(oCharOccuranceMap) || []).length;

  if (iCharOccurances === 1) {
    bIsValidString = true;
  } else if (iCharOccurances === 2) {
    for (let iCharCountOccurance in oCharOccuranceMap) {
      if (oCharOccuranceMap[iCharCountOccurance] === 1) {
        bIsValidString = true;
      }
    }
  } else {
    bIsValidString = false;
  }
  if (bIsValidString) {
    console.log("YES")
    return "YES";
  } else {
    console.log("NO")
    return "NO";
  }
}

isValid("abcdefghhgfedecba");
