import { generateRandomNumber } from '../utils.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 5;

const generateQuestion = (firstItem, diff, hiddenItemIndex) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const next = firstItem + i * diff;
    progression.push(next);
  }

  progression[hiddenItemIndex] = '..';

  return progression.join(' ');
};

const generateRoundData = () => {
  const firstItem = generateRandomNumber(1, 20);
  const diff = generateRandomNumber(1, 9);
  const hiddenItemIndex = generateRandomNumber(0, progressionLength - 1);
  const answer = String(firstItem + diff * hiddenItemIndex);
  const question = generateQuestion(firstItem, diff, hiddenItemIndex);

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
