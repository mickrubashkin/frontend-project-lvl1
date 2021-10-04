import getRandomInteger from '../utils.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const getGameData = () => {
  const start = getRandomInteger(1, 20);
  const step = getRandomInteger(1, 9);
  // const len = getRandomInteger(5, 10);
  const len = 5;

  const progression = [];

  for (let i = 0; i < len; i += 1) {
    const next = start + i * step;
    progression.push(next);
  }

  const hiddenPosition = getRandomInteger(0, len - 1);
  const answer = progression[hiddenPosition];

  const hidden = [...progression];
  hidden[hiddenPosition] = '..';
  const question = hidden.join(' ');

  return [question, answer];
};

export default () => playGame(rules, getGameData);
