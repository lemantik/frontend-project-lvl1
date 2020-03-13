import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const PROGRESSION_LENGTH = 10;
const INCREMENT_SIZE_RANGE = 10;
const INITIAL_NUMBER_RANGE = 10;

class GameObj {
  constructor() {
    this.question = null;
    this.answer = null;
    this.ruleDescription = 'What number is missing in the progression?';
  }

  getQuestion() {
    const initNum = getRandomNumber(INITIAL_NUMBER_RANGE);
    const step = getRandomNumber(INCREMENT_SIZE_RANGE);
    const holeId = getRandomNumber(PROGRESSION_LENGTH) - 1;

    const progression = [];
    for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
      progression.push(initNum + step * i);
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
