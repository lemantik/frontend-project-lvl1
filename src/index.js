import readlineSync from 'readline-sync';

const askUserName = () => readlineSync.question('May I have your name? ');
const generalGreetings = () => console.log('Welcome to the Brain Games!');

const askNameAndGreet = () => {
  generalGreetings();
  const userName = askUserName();
  console.log(`Hello ${userName}!`);
  return userName;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const isEven = (num) => num % 2 === 0;

export default askUserName;
export {
  askNameAndGreet,
  getRandomNumber,
  isEven,
};
