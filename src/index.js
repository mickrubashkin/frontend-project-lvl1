import readlineSync from 'readline-sync';
import { greetByName } from './cli.js';

const NUMBER_OF_ROUNDS = 3;

const checkGuess = (guess, answer) => {
  const normalizedGuess = String(guess);
  const normalizedAnswer = String(answer);

  return normalizedGuess === normalizedAnswer;
};

export default (rules, generateRoundData) => {
  let isPlayerLose = false;
  let playerName = '';

  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  greetByName(playerName);
  console.log(rules);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const [question, answer] = generateRoundData();
    console.log(`Question: ${question}`);
    const guess = readlineSync.question('Your answer: ');

    if (checkGuess(guess, answer)) {
      console.log('Correct!');
    } else {
      isPlayerLose = true;
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }

  if (isPlayerLose) {
    console.log(`Let's try again, ${playerName}!`);
  } else {
    console.log(`Congratulations, ${playerName}!`);
  }
};
