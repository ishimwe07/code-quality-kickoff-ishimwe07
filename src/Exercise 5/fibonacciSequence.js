const fibonacciSequence = n => {
  const sequence = [0,1, 1];
  for (let i = 1; i < n - 1; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  return sequence;
};
