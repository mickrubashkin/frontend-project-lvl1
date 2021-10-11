/* eslint-disable import/prefer-default-export */

export const getRandomInteger = (min, max) => (
  Math.floor(Math.random() * (max + 1 - min) + min)
);
