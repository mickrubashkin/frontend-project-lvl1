import getRandomInteger from '../utils.js';
import playGame from '../index.js';

const OPERATORS = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  // const randomIndex = Math.floor(Math.random() * OPERATORS.length);
  const randomIndex = getRandomInteger(0, OPERATORS.length - 1);

  return OPERATORS[randomIndex];
};

const generateExpression = () => {
  const operator = getRandomOperator();
  const operand1 = getRandomInteger(1, 100);
  const operand2 = getRandomInteger(1, 100);

  return [operand1, operator, operand2];
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

const getGameData = () => {
  const expression = generateExpression();
  const question = expression.join(' ');
  const answer = calculateExpression(expression);

  return [question, answer];
};

export default () => playGame(rules, getGameData);
