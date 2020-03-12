import runGame, { getRandomNumber } from '../index.js';


class GameObj {
  constructor() {
    this.question = null;
    this.answer = null;
    this.ruleDescription = 'What number is missing in the progression?';
  }

  getQuestion() {
    const num1 = getRandomNumber(10);
    const step = getRandomNumber(10);
    const holeId = getRandomNumber(10) - 1;

    const progression = [];
    for (let i = 0; i < 10; i += 1) {
      progression.push(num1 + step * i);
    }

    [this.answer, progression[holeId]] = [progression[holeId], '..'];

    this.question = progression.join(' ');
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
