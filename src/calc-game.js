import readlineSync from 'readline-sync';
import alfred from './cli.js';

// Helper functions
const OPERATORS = ['+', '-', '*'];
const checkGuess = (guess, answer) => guess.toString() === answer.toString();

const getRandomNumber = (cap) => Math.floor(Math.random() * cap);

const getRandomOperator = () => {
  const randomIndex = getRandomNumber(OPERATORS.length);

  return OPERATORS[randomIndex];
};

const generateExpression = () => {
  const operator = getRandomOperator();
  const cap = operator === '*' ? 21 : 101;

  const operand1 = getRandomNumber(cap);
  const operand2 = getRandomNumber(cap);

  return [operand1, operator, operand2];
};

const expressionToString = (expression) => {
  const [operand1, operator, operand2] = expression;
  return `${operand1.toString()} ${operator} ${operand2.toString()}`;
};

const calculateExpression = (expression) => {
  const [operand1, operator, operand2] = expression;
  let answer;

  if (operator === '+') {
    answer = operand1 + operand2;
  }

  if (operator === '-') {
    answer = operand1 - operand2;
  }

  if (operator === '*') {
    answer = operand1 * operand2;
  }

  return answer;
};

const play = () => {
  const expression = generateExpression();
  const question = expressionToString(expression);
  const answer = calculateExpression(expression);

  console.log(`Question: ${question}`);

  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};

export default () => {
  // Greet and get player name
  const player = alfred();

  // Tell the rules
  console.log('What is the result of the expression?');

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