import runGame, { getRandomNumber } from '../index.js';

const operands = {
  1: { sign: '+', math: ((a, b) => a + b) },
  2: { sign: '-', math: ((a, b) => a - b) },
  3: { sign: '*', math: ((a, b) => a * b) },
};

class GameObj {
  constructor() {
    this.question = null;
    this.answer = null;
    this.ruleDescription = 'What is the result of the expression?';
  }

  getQuestion() {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operandID = getRandomNumber(Object.keys(operands).length);
    this.question = `${num1} ${operands[operandID].sign} ${num2}`;
    this.answer = operands[operandID].math(num1, num2).toString();
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
