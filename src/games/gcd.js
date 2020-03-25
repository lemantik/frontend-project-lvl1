import getRandomNumber from '../utils.js';

const getLap = () => {
  const getGCD = (a, b) => (a !== 0 ? getGCD(b % a, a) : b);
  const num1 = getRandomNumber(1);
  const num2 = getRandomNumber(1);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [
    question,
    answer.toString(),
  ];
};

export default {
  getLap,
  rule: 'Find the greatest common divisor of given numbers.',
};
