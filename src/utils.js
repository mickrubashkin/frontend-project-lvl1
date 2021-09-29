export const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

export const gcd = (a, b) => {
  // Euclidean algorithm
  // https://en.wikipedia.org/wiki/Greatest_common_divisor

  const small = Math.min(a, b);
  const big = Math.max(a, b);

  if (small === 0) {
    return big;
  }

  return gcd(small, big % small);
};

export const getRandomNumber = () => generateRandomInteger(1, 100);
export const isEven = (num) => num % 2 === 0;
