const reverseVowels = (str) => {
  //The regex help to test or match all vowels in the string with out considering upper or lower cases.
  let vowels = str.match(/[aiuoe]/gi);
  return str
    .split("")
    .map((character) =>
      /[aiuoe]/gi.test(character) ? vowels.pop() : character
    )
    .join("");
};
