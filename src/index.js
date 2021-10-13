import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (rules, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRoundData();
    console.log(`Question: ${question}`);
    const guess = readlineSync.question('Your answer: ');

    if (guess !== answer) {
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};
