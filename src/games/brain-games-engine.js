import runGame from '../index.js';

class GameObj {
  constructor() {
    this.ruleDescription = '';
    this.getQuestion = () => null;// () => getRandomNumber(MAX_RANDOM);
    this.getRightAnswer = () => null;
  }
}
export default () => {
  const gameObject = new GameObj();
  runGame(gameObject); // don't forget to get userName
};
