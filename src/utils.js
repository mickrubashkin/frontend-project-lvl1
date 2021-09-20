const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max + 1 - min) + min)
};

const isEven = (num) => num % 2 === 0;

export { getRandomNumber, isEven };