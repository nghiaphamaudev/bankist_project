'use strict';
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET

const currenciesUnique = ['USD', 'GBP', 'USD', 'EUR', 'EUR'];
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
