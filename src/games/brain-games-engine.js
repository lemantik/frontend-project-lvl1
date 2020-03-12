import runGame from '../index.js';

class GameObj {
  constructor() {
    this.ruleDescription = '';
    this.getQuestion = () => null;
    this.getRightAnswer = () => null;
  }
}
export default () => {
  const gameObject = new GameObj();
  runGame(gameObject); // don't forget to get userName
};
