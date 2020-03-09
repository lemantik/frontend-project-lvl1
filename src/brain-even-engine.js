import readlineSync from 'readline-sync';
import {
  askNameAndGreet,
  getRandomNumber,
  isEven,
} from './index.js';

const MAX_RANDOM = 100;
const winsNumber = 3;

export default () => {
  const userName = askNameAndGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let numRightAnswers = 0; numRightAnswers < winsNumber; numRightAnswers += 1) {
    const randomNumber = getRandomNumber(MAX_RANDOM);
    const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

    // Ask
    console.log(`Question: ${randomNumber}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
