import getRandomNumber from '../utils.js';

const getLap = () => {
  const PROGRESSION_LENGTH = 10;
  const INCREMENT_SIZE_RANGE = 10;
  const INITIAL_NUMBER_RANGE = 10;

  const initNum = getRandomNumber(0, INITIAL_NUMBER_RANGE);
  const step = getRandomNumber(1, INCREMENT_SIZE_RANGE);
  const holeId = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  // Create progression
  const progression = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(initNum + step * i);
  }
  // swap elements
  const answer = progression[holeId];
  progression[holeId] = '..';

  const question = progression.join(' ');

  return [
    question,
    answer.toString(),
  ];
};

export default {
  getLap,
  rule: 'What number is missing in the progression?',
};
