import readlineSync from 'readline-sync';
import getName from './cli.js';

const NUMBER_OF_ROUNDS = 3;

const checkAnswer = (playerAnswer, expectedAnswer) => `${playerAnswer}` === `${expectedAnswer}`;

export default (rules, generateQuestionAndAnswer) => {
  // Greet and get player name
  const player = getName();

  // Tell the rules
  console.log(rules);

  // Game loop
  for (let round = 0; round < NUMBER_OF_ROUNDS; round += 1) {
    const [question, expectedAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    const goodGuess = checkAnswer(playerAnswer, expectedAnswer);

    if (!goodGuess) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${player}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${player}!`);
};
