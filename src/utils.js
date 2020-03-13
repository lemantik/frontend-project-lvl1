const MIN = 0;
const MAX = 100;
const getRandomNumber = (min = MIN, max = MAX) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
export default getRandomNumber;
