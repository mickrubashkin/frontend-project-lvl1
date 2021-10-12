import { generateRandomNumber } from '../utils.js';
import playGame from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (expression) => {
  const [operand1, operator, operand2] = expression;
  let answer;

  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
      throw new Error('Unexpected operator used (expected: +, -, *)');
  }

  return answer;
};

const generateRoundData = () => {
  const randomIndex = generateRandomNumber(0, operators.length - 1);

  const operator = operators[randomIndex];
  const operand1 = generateRandomNumber(1, 100);
  const operand2 = generateRandomNumber(1, 100);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(calculateExpression([operand1, operator, operand2]));

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
