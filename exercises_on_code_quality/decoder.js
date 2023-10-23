const solution = (roman) => {
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
    const currentRomanNumber = romansObject[romanArray[index]];
    const nextRomanNumber = romansObject[romanArray[index + 1]];
    if (currentRomanNumber < nextRomanNumber) {
      solution += nextRomanNumber - currentRomanNumber;
      romanArray.splice(index, 2);
      continue;
    }
    solution += currentRomanNumber;

    index = index + 1;
  }
  return solution;
};
