import getRandomNumber from '../utils.js';

const getQuestion = () => {
  const isEven = (num) => num % 2 === 0;
  const number = getRandomNumber();
  return [
    number,
    isEven(number) ? 'yes' : 'no',
  ];
};

const RULE_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

export { RULE_DESCRIPTION, getQuestion };
