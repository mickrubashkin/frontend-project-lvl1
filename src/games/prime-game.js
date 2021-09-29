import { getRandomNumber } from '../utils.js';
import gameLoop from '../game-loop.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num ** 0.5; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => gameLoop(gameRules, generateQuestionAndAnswer);
