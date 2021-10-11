import { getRandomInteger } from '../utils.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => b === 0 ? a : getGcd(b, a % b);

// function gcd(a, b)
// if b = 0
//         return a
// else
//   return gcd(b, a mod b)

const generateRoundData = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
