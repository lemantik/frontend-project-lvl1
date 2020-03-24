import getRandomNumber from '../utils.js';

const getPairQuestionAnswer = () => {
  const isEven = (num) => num % 2 === 0;
  const questionNumber = getRandomNumber();
  return [
    questionNumber,
    isEven(questionNumber) ? 'yes' : 'no',
  ];
};

export default {
  fn: getPairQuestionAnswer,
  ruleDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
};
