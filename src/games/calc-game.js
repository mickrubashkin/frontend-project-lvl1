import { generateRandomNumber } from '../utils.js';
import playGame from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (expression) => {
  const [operand1, operator, operand2] = expression;

  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Unexpected operator used (expected: +, -, *)');
  }
};

const generateRoundData = () => {
  const randomOperatorIndex = generateRandomNumber(0, operators.length - 1);

  const operator = operators[randomOperatorIndex];
  const operand1 = generateRandomNumber(1, 100);
  const operand2 = generateRandomNumber(1, 100);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(calculateExpression([operand1, operator, operand2]));

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
