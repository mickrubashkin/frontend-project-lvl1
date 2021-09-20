import readlineSync from 'readline-sync';
import { gcd, getRandomNumber } from '../utils.js';

export default () => {
  // Generate random numbers
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  // Calculate correct answer
  const answer = gcd(num1, num2);
  // Ask question
  console.log(`Question: ${num1} ${num2}`);
  // Prompt player to answer
  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};
