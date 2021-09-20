import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

export default () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 9);
  const len = getRandomNumber(5, 10);
  const progression = [];

  for (let i = 0; i < len; i += 1) {
    const next = start + i * step;
    progression.push(next);
  }

  const hiddenPosition = getRandomNumber(0, len - 1);
  const answer = progression[hiddenPosition];

  const hidden = [...progression];
  hidden[hiddenPosition] = '..';
  const question = hidden.join(' ');

  // Ask question
  console.log(`Question: ${question}`);
  // Prompt player to answer
  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};
