export default (min, max) => (
  Math.floor(Math.random() * (max + 1 - min) + min)
);

// export default (min, max) => generateRandomInteger(1, 100);
