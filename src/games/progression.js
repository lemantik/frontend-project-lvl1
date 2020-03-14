import getRandomNumber from '../utils.js';

const getQuestion = () => {
  const PROGRESSION_LENGTH = 10;
  const INCREMENT_SIZE_RANGE = 10;
  const INITIAL_NUMBER_RANGE = 10;
  let answer;

  const initNum = getRandomNumber(0, INITIAL_NUMBER_RANGE);
  const step = getRandomNumber(0, INCREMENT_SIZE_RANGE);
  const holeId = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  // Create progression
  const progression = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(initNum + step * i);
  }
  // swap elements
  [answer, progression[holeId]] = [progression[holeId], '..'];

  const question = progression.join(' ');

  return [
    question,
    answer,
  ];
};

const RULE_DESCRIPTION = 'What number is missing in the progression?';

export { RULE_DESCRIPTION, getQuestion };
