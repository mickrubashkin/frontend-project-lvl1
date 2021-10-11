import { getRandomInteger } from '../utils.js';
import playGame from '../index.js';

const OPERATORS = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

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
      answer = '';
  }

  return answer;
};

const generateRoundData = () => {
  const randomIndex = getRandomInteger(0, OPERATORS.length - 1);

  const operator = OPERATORS[randomIndex];
  const operand1 = getRandomInteger(1, 100);
  const operand2 = getRandomInteger(1, 100);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculateExpression([operand1, operator, operand2]);

  return [question, answer];
};

export default () => playGame(rules, generateRoundData);
