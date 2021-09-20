const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const isEven = (num) => num % 2 === 0;

const gcd = (a, b) => {
  // https://en.wikipedia.org/wiki/Greatest_common_divisor
  // Euclidean algorithm,
  // a variant in which the difference of the two numbers a and b
  // is replaced by the remainder of the Euclidean division
  // (also called division with remainder) of a by b.

  // Denoting this remainder as a mod b,
  // the algorithm replaces (a, b) by (b, a mod b) repeatedly until the pair is (d, 0),
  // where d is the greatest common divisor.

  // For example, to compute gcd(48, 18), the computation is as follows:
  // (48, 18) ===> (18, 48 mod 18) = (18, 12)
  //          ===> (12, 18 mod 12) = (12, 6)
  //          ===> (6, 12 mod 6) = (6, 0)
  // This gives gcd(48, 18) = 6.

  const small = Math.min(a, b);
  const big = Math.max(a, b);

  if (small === 0) {
    return big;
  }

  return gcd(small, big % small);
};

export { getRandomNumber, isEven, gcd };
