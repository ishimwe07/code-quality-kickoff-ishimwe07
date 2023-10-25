const checkNestingDepth = (array = []) =>
  JSON.stringify(array)
    .split("")
    .filter((character) => character === "[").length - 1;
