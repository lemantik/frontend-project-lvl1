import getRandomNumber from '../utils.js';

const getQuestion = () => {
  const isEven = (num) => num % 2 === 0;
  const number = getRandomNumber();
  return [
    number,
    isEven(number) ? 'yes' : 'no',
  ];
};

export default () => (
  {
    fn: getQuestion,
    ruleDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  }
);
