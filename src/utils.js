const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const isEven = (num) => num % 2 === 0;

export { getRandomNumber, isEven };
