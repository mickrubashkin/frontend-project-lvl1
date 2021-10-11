import { getRandomInteger } from '../utils.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 5;

const makeProgression = (firstNumber, step) => {
  const progression = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const next = firstNumber + i * step;
    progression.push(next);
  }

  return progression;
};

const makeHiddenProgression = (progression, positionToHide) => {
  const progressionWithHiddenNumber = [...progression];
  progressionWithHiddenNumber[positionToHide] = '..';

  return progressionWithHiddenNumber;
};

const generateRoundData = () => {
  const progressionFirstNumber = getRandomInteger(1, 20);
  const step = getRandomInteger(1, 9);

  const progression = makeProgression(progressionFirstNumber, step);
  const positionToHide = getRandomInteger(0, PROGRESSION_LENGTH - 1);

  const progressionWithHiddenItem = makeHiddenProgression(progression, positionToHide);
  const hiddenItem = progression[positionToHide];

  const question = progressionWithHiddenItem.join(' ');
  const answer = hiddenItem;

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
