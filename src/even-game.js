import readlineSync from 'readline-sync';
import alfred from './cli.js';

// Helper functions
const isEven = (num) => num % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 101);
const checkGuess = (guess, answer) => guess === answer;

const play = () => {
  // Generate random number
  const number = getRandomNumber();
  // Calculate correct answer
  const answer = isEven(number) ? 'yes' : 'no';
  // Ask question
  console.log(`Question: ${number}`);
  // Prompt player to answer
  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};

export default () => {
  // Greet and get player name
  const player = alfred();

  // Tell the rules
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let score = 0;

  do {
    const [guess, answer] = play();
    if (checkGuess(guess, answer)) {
      console.log('Correct!');
      score += 1;
    } else {
      score = -100;
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${answer}'.`);
    }
  } while (score > 0 && score < 3);

  if (score < 0) {
    console.log(`Let's try again, ${player}!`);
  } else {
    console.log(`Congratulations, ${player}!`);
  }
};
