'use strict';
const calcAverageHumanAge = ages =>
  ages
    .map(dogAges => (dogAges <= 2 ? dogAges * 2 : dogAges * 4 + 16))
    .filter(humanAge => humanAge > 18)
    .reduce((acc, humanAge, index, arr) => acc + humanAge / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
