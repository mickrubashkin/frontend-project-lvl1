import getRandomInteger from '../utils.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  // Euclidean algorithm
  // https://en.wikipedia.org/wiki/Greatest_common_divisor

  const small = Math.min(a, b);
  const big = Math.max(a, b);

  if (small === 0) {
    return big;
  }

  return getGcd(small, big % small);
};

const getGameData = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const answer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [question, answer];
};

export default () => playGame(rules, getGameData);
