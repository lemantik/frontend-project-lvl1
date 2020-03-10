import runGame from '../index.js';

const MAX_RANDOM = 100;

const isEven = (num) => num % 2 === 0;
const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;
class GameObj {
  constructor() {
    this.ruleDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.getQuestion = () => getRandomNumber(MAX_RANDOM);
    this.getRightAnswer = (question) => (isEven(question) ? 'yes' : 'no');
  }
}

export default () => {
  const gameObject = new GameObj();
  runGame(gameObject);
};
