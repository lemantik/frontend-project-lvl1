import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;
const getLap = () => {
  const question = getRandomNumber();
  return [
    question,
    isEven(question) ? 'yes' : 'no',
  ];
};

export default {
  getLap,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
};
