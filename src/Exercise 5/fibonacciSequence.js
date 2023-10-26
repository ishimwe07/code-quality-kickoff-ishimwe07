const fibonacciSequence = iterationNumber => {
  const sequence = [0, 1, 1];
  for (let i = 1; i < iterationNumber - 1; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  return sequence;
};
