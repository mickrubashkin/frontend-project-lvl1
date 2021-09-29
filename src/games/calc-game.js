import { getRandomNumber } from '../utils.js';
import gameLoop from '../game-loop.js';

const OPERATORS = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const randomIndex = Math.floor(Math.random() * OPERATORS.length);

  return OPERATORS[randomIndex];
};

const generateExpression = () => {
  const operator = getRandomOperator();
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();

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

const generateQuestionAndAnswer = () => {
  const expression = generateExpression();
  const question = expression.join(' ');
  const answer = calculateExpression(expression);

  return [question, answer];
};

export default () => gameLoop(gameRules, generateQuestionAndAnswer);
