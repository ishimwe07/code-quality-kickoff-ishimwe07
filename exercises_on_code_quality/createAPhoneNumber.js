const createPhoneNumber = (numbers) => {
  const x = numbers.slice(0, 3).join("");
  const y = numbers.slice(3, 6).join("");
  const z = numbers.slice(6).join("");
  return `(${x}) ${y}-${z}`;
};
