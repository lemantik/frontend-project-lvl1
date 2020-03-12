import readlineSync from 'readline-sync';

const MAX_RANDOM = 100;
const WINS_NUMBER = 3;

const askUserName = () => readlineSync.question('May I have your name? ');
const getRandomNumber = (max = MAX_RANDOM) => Math.floor(Math.random() * max) + 1;

const runGame = (gameObj) => {
  console.log('Welcome to the Brain Games!');
  const userName = askUserName();
  console.log(`Hello ${userName}!`);
  console.log(gameObj.ruleDescription);

  for (let countRightAnswers = 0; countRightAnswers < WINS_NUMBER; countRightAnswers += 1) {
    const question = gameObj.getQuestion();
    const rightAnswer = gameObj.getRightAnswer(question).toString();
    // Ask
    console.log(`Question: ${question}`);
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

export default runGame;
export { askUserName, getRandomNumber, MAX_RANDOM };
