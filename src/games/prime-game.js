import { getRandomNumber } from '../utils.js';
import gameLoop from '../game-loop.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const PRIMES_TO_101 = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  return PRIMES_TO_101.includes(num);
};
// FIXME_03: Hardcoding
// Это хардкодинг.
// Давай попробуем реализовать эту функцию для любого числа

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export const playGamePrime = () => gameLoop(gameRules, generateQuestionAndAnswer);
