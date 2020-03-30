import readlineSync from 'readline-sync';

const WINS_COUNT = 3;

const runGame = (game) => {
  const { getLap, rule } = game;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rule);

  for (let i = 0; i < WINS_COUNT; i += 1) {
    const [question, rightAnswer] = getLap();
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
