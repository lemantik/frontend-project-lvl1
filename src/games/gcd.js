import getRandomNumber from '../utils.js';

const getQuestion = () => {
  const getGCD = (a, b) => (a !== 0 ? getGCD(b % a, a) : b);
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return [
    `${num1} ${num2}`,
    getGCD(num1, num2),
  ];
};

const RULE_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

export { RULE_DESCRIPTION, getQuestion };
