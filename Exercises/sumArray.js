const sumArray = (array) => (array.length ? array.pop() + sumArray(array) : 0);
