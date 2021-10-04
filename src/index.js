import readlineSync from 'readline-sync';
import getName from './cli.js';

const checkGuess = (guess, answer) => `${guess}` === `${answer}`;

export default (rules, getData) => {
  // Greet and get player name
  const player = getName();

  // Tell the rules
  console.log(rules);

  let roundsPlayed = 0;
  let gameState = 'playing';

  do {
    const [question, answer] = getData();
    console.log(`Question: ${question}`);
    const guess = readlineSync.question('Your answer: ');

    if (checkGuess(guess, answer)) {
      console.log('Correct!');
      roundsPlayed += 1;
    } else {
      gameState = 'gameEnd';
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${answer}'.`);
    }
  } while (roundsPlayed < 3 && gameState === 'playing');

  if (gameState === 'gameEnd') {
    console.log(`Let's try again, ${player}!`);
  }

  console.log(`Congratulations, ${player}!`);
};
