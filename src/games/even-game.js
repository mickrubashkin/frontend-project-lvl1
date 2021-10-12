import { generateRandomNumber } from '../utils.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(rules, getRoundData);
