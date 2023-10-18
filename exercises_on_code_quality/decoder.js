const romanToNumber = (roman) => {
  const romansObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanArray = roman.split("");
  let solution = 0;
  let index = 0;
  while (index < romanArray.length) {
    if (romansObject[romanArray[i]] < romansObject[romanArray[index + 1]]) {
      solution += romansObject[romanArray[index + 1]] - romansObject[romanArray[i]];
      romanArray.splice(i, 2);
      index = index - 1;
    } else {
      solution += romansObject[romanArray[i]];
    }
    index = index + 1;
  }
  return solution;
}
