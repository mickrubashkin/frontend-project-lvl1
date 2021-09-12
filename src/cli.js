import readlineSync from 'readline-sync';

const greet = (name = null) => {
  if (!name) {
    console.log('Welcome to the Brain Games!');
  } else {
    console.log(`Hello, ${name}!`);
  }
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  greet(name);
};

export default () => {
  greet();
  getName();
};
