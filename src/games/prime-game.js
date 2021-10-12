import { generateRandomNumber } from '../utils.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num ** 0.5; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
