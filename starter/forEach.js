'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.set('fullName', 'Phạm Văn Nghĩa');
console.log(currencies);
const movements = [200, 450, -400, 3000, 200, -130, 200, 1300];

movements.forEach(function (value, index, arr) {
  console.log(value);
});
console.log('______________________');
movements.forEach(function (value, index, map) {
  console.log(map);
});

//for of
for (const value of movements) {
  console.log(value);
}

//foreach
//Math.abs trả về giá trị tuyệt sối của 1 số
//Lấy giá trị chỉ mục và giá trị của value
for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`Movement ${i + 1}: You deposited ${move}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(move)} `);
  }
}

console.log('----------FOREACH--------');

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} `);
  }
});

movements.forEach((mov, i) => {
  console.log(`movement: ${mov}, index : ${i}`);
});
