import readlineSync from 'readline-sync';
import { getRandomNumber, isPrime } from '../utils.js';

export default () => {
  // Generate random number
  const num = getRandomNumber(2, 101);

  // Calculate correct answer
  const answer = isPrime(num) ? 'yes' : 'no';
  // Ask question
  console.log(`Question: ${num}`);
  // Prompt player to answer
  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};
