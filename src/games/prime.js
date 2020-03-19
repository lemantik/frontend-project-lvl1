import getRandomNumber from '../utils.js';

const getPairQuestionAnswer = () => {
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

  const questionNumber = getRandomNumber();
  return [
    questionNumber,
    isPrime(questionNumber) ? 'yes' : 'no',
  ];
};

export default () => (
  {
    fn: getPairQuestionAnswer,
    ruleDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  }
);
