import runGame from '../index.js';
import getRandomNumber from '../utils.js';

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

class GameObj {
  constructor() {
    this.question = null;
    this.answer = null;
    this.ruleDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }

  getQuestion() {
    this.question = getRandomNumber();
    return this.question;
  }

  getRightAnswer(question) {
    this.answer = isPrime(question) ? 'yes' : 'no';
    return this.answer;
  }
}

export default () => {
  const gameObject = new GameObj();
  runGame(gameObject);
};
