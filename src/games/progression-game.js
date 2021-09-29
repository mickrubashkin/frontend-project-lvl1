import { generateRandomInteger } from '../utils.js';
import gameLoop from '../game-loop.js';

const rules = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const start = generateRandomInteger(1, 20);
  const step = generateRandomInteger(1, 9);
  const len = generateRandomInteger(5, 10);

  const progression = [];

  for (let i = 0; i < len; i += 1) {
    const next = start + i * step;
    progression.push(next);
  }

  const hiddenPosition = generateRandomInteger(0, len - 1);
  const answer = progression[hiddenPosition];

  const hidden = [...progression];
  hidden[hiddenPosition] = '..';
  const question = hidden.join(' ');

  return [question, answer];
};

export const playGameProgression = () => gameLoop(rules, generateQuestionAndAnswer);
