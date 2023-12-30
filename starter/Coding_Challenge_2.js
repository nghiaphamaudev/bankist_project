'use strict';
const calcAverageHumanAge = dogArray => {
  const humanAge = dogArray.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  const adults = humanAge.filter(ages => ages >= 18);
  const average = adults.reduce((acc, ages) => acc + ages, 0) / adults.length;
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(Math.trunc(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])));
