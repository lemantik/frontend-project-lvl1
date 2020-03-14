import getRandomNumber from '../utils.js';

const getQuestion = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const number = getRandomNumber();
  return [
    number,
    isPrime(number) ? 'yes' : 'no',
  ];
};

const RULE_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { RULE_DESCRIPTION, getQuestion };
