const numberFormat = function (number) {
  const numberAsString = number.toString();
  if (numberAsString.length < 4) return numberAsString;

  let finalNumber = "";
  let counts = 0;

  for (let i = numberAsString.length - 1; i >= 0; i--) {
    finalNumber = `${numberAsString.charAt(i)}${finalNumber}`;
    counts++;
    if (!isNaN(numberAsString[i - 1]) && counts === 3) {
      finalNumber = `,${finalNumber}`;
      counts = 0;
    }
  }
  return finalNumber;
};
