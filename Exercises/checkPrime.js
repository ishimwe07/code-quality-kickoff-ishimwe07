const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i) return false;
  }
  return true;
};
