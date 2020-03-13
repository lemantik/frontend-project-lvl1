import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (a, b) => (a !== 0 ? getGCD(b % a, a) : b);

class GameObj {
  constructor() {
    this.question = null;
    this.answer = null;
    this.ruleDescription = 'Find the greatest common divisor of given numbers.';
  }

  getQuestion() {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    this.question = `${num1} ${num2}`;
    this.answer = getGCD(num1, num2);
    return this.question;
  }

  getRightAnswer() {
    return this.answer;
  }
}

export default () => {
  const gameObject = new GameObj();
  runGame(gameObject);
};
