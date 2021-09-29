import { getGcd, getRandomNumber } from '../utils.js';
import gameLoop from '../game-loop.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const answer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [question, answer];
};

export default () => gameLoop(gameRules, generateQuestionAndAnswer);
