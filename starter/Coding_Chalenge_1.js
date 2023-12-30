'use strict';
const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCorrected = dogsJulia.slice(1, dogsJulia.length - 2);
  const dogs = [...dogsJuliaCorrected, ...dogsKate];
  dogs.forEach(function (ageDog, index) {
    const type = ageDog >= 3 ? 'an adult 🐈' : 'still puppy 🐶';

    console.log(`Dog number ${index + 1} is ${type} an is ${ageDog} years old`);
  });
};

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

checkDogs(juliaData, kateData);
