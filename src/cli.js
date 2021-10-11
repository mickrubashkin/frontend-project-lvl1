import readlineSync from 'readline-sync';

export const greetByName = (name) => {
  console.log(`Hello, ${name}!`);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  greetByName(name);
};
