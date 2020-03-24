import getRandomNumber from '../utils.js';

const operands = [
  { sign: '+', math: ((a, b) => a + b) },
  { sign: '-', math: ((a, b) => a - b) },
  { sign: '*', math: ((a, b) => a * b) },
];

const getPairQuestionAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operandID = getRandomNumber(0, operands.length - 1);
  const question = `${num1} ${operands[operandID].sign} ${num2}`;
  const answer = operands[operandID].math(num1, num2);
  return [
    question,
    answer.toString(),
  ];
};

export default {
  fn: getPairQuestionAnswer,
  ruleDescription: 'What is the result of the expression?',
};
