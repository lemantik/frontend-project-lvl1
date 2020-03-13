import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;
class GameObj {
  constructor() {
    this.ruleDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.getQuestion = () => getRandomNumber();
    this.getRightAnswer = (question) => (isEven(question) ? 'yes' : 'no');
  }
}

export default () => {
  const gameObject = new GameObj();
  runGame(gameObject);
};
