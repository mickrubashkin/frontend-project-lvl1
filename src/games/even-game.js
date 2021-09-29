import { isEven, getRandomNumber } from '../utils.js';
import gameLoop from '../game-loop.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => gameLoop(gameRules, generateQuestionAndAnswer);
