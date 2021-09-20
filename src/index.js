import getName from './cli.js';
import even from './games/even-game.js';
import calc from './games/calc-game.js';

const ROUNDS = 3;
const RULES = [
  'Answer "yes" if the number is even, otherwise answer "no".',
  'What is the result of the expression?'
];
const GAMES = [even, calc];

const checkGuess = (guess, answer) => guess.toString() === answer.toString();


const game = (gameIndex) => {
  return () => {
    // Greet and get player name
    const player = getName();
    const rules = RULES[gameIndex];
    const playRound = GAMES[gameIndex];

    // Tell the rules
    console.log(rules);

    let score = 0;

    do {
      const [guess, answer] = playRound();
      if (checkGuess(guess, answer)) {
        console.log('Correct!');
        score += 1;
      } else {
        score = -100;
        console.log(`'${guess}' is wrong answer ;(. Correct answer was '${answer}'.`);
      }
    } while (score > 0 && score < ROUNDS);

    if (score < 0) {
      console.log(`Let's try again, ${player}!`);
    } else {
      console.log(`Congratulations, ${player}!`);
    }
  };
};

const evenGame = game(0);
const calcGame = game(1);

export { evenGame, calcGame };