import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const OPERATORS = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomIndex = getRandomNumber(0, OPERATORS.length - 1);

  return OPERATORS[randomIndex];
};

const generateExpression = () => {
  const operator = getRandomOperator();
  const max = operator === '*' ? 20 : 100;

  const operand1 = getRandomNumber(1, max);
  const operand2 = getRandomNumber(1, max);

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

export default () => {
  const expression = generateExpression();
  const question = expressionToString(expression);
  const answer = calculateExpression(expression);

  console.log(`Question: ${question}`);

  const guess = readlineSync.question('Your answer: ');

  return [guess, answer];
};
