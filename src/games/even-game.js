import readlineSync from 'readline-sync';
import { isEven, getRandomNumber } from '../utils.js';

export default () => {
  // Generate random number
  const number = getRandomNumber(1, 100);
  // Calculate correct answer
  const answer = isEven(number) ? 'yes' : 'no';
  // Ask question
  console.log(`Question: ${number}`);
  // Prompt player to answer
  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};
