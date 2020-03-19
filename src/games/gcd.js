import getRandomNumber from '../utils.js';

const getQuestion = () => {
  const getGCD = (a, b) => (a !== 0 ? getGCD(b % a, a) : b);
  const num1 = getRandomNumber(1);
  const num2 = getRandomNumber(1);
  return [
    `${num1} ${num2}`,
    getGCD(num1, num2),
  ];
};

export default () => (
  {
    fn: getQuestion,
    ruleDescription: 'Find the greatest common divisor of given numbers.',
  }
);
