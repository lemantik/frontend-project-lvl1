import getRandomNumber from '../utils.js';

const getLap = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const question = getRandomNumber();
  return [
    question,
    isPrime(question) ? 'yes' : 'no',
  ];
};

export default {
  getLap,
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};
