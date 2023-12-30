'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130));

//Kiểm tra xem liệu rằng có phần tử movements nào thỏa mãn > 0 ko
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

// Kiểm tra tất cả các phần tử trong mảng có > 0 ko
const anyLoan = movements.every(mov => mov < 0);
console.log(anyLoan);

//Cách dùng chung filter, every, some
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//Flat
const arr = [1, 2, 3, [4, 5, 6], 7];
console.log(arr.flat());

const arr2 = [1, 2, [3, [4, 5, 6], 7], 9, 10];
console.log(arr2.flat(2));

//sort

//Deep copy
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
const ownerSort = [...owners];
console.log(owners);
console.log(ownerSort.sort());

//Shaldow copy

const ownersShaldow = owners.sort();
console.log(owners);
console.log(ownersShaldow);

//Number
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
movements.sort((a, b) => b - a);
console.log(movements);
