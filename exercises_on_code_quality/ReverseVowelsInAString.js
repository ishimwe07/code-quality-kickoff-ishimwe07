const reverseVowels = (string) => {
  //The regex help to test or match all vowels in the string with out considering upper or lower cases.
  const vowels = string.match(/[aiuoe]/gi);
  return string
    .split("")
    .map((character) =>
      /[aiuoe]/gi.test(character) ? vowels.pop() : character
    )
    .join("");
};
