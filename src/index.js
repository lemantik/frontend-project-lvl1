import readlineSync from 'readline-sync';

const WINS_NUMBER = 3;

const runGame = (gameObj) => {
  const { fn: function2getQuestion, ruleDescription } = gameObj;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(ruleDescription);

  for (let countRightAnswers = 0; countRightAnswers < WINS_NUMBER; countRightAnswers += 1) {
    const [question, rightAnswer] = function2getQuestion();
    // Ask
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === rightAnswer.toString()) {
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
