const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const isEven = (num) => num % 2 === 0;

const gcd = (a, b) => {
  // Euclidean algorithm
  // https://en.wikipedia.org/wiki/Greatest_common_divisor

  const small = Math.min(a, b);
  const big = Math.max(a, b);

  if (small === 0) {
    return big;
  }

  return gcd(small, big % small);
};

const isPrime = (num) => {
  const PRIMES_TO_101 = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  return PRIMES_TO_101.includes(num);
};

export {
  getRandomNumber, isEven, gcd, isPrime,
};
