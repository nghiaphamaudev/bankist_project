'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = movements => {
  //làm sạch các texthtml mẫu
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//Hiển thị số dư
const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

//Hiển thị thu nhập, chuyển đối tiền sang USD

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.round(Math.abs(out) * 100) / 100}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.round(interest * 100) / 100}€`;
};

const createUsernames = accs => {
  //tạo ra 1 thuộc tính mới của mỗi object account
  accs.forEach(function (acc) {
    //thuộc tính mới có tên là username
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = acc => {
  // Display Movements
  displayMovements(currentAccount.movements);
  //Display Balance
  calcDisplayBalance(currentAccount);
  //Display Summary
  calcDisplaySummary(currentAccount);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  //Lặp qua từ phần tử accounts, lấy thuộc tính username để so sánh với giá trị đầu vào
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //Kiểm tra xem urrentAccount có tồn tại hay không nếu có thì currentAccount.pin với giá trị đầu vào nếu true thì thực hiện câu lệnh bên trong
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back,  ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  //dk để chuyển tiền
  if (
    amount > 0 &&
    receiveAcc &&
    amount <= currentAccount.balance &&
    receiveAcc?.username !== currentAccount.username
  ) {
    //Thao tác thêm các biến động
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete account
    accounts.splice(index, 1);
    //xóa phần tử ở vị trí index và số lượng là 1

    //hide UI
    containerApp.style.opacity = 0;
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// ////SLICE
// console.log(arr.slice(2));
// //Lấy ở index số 2 ko bao gồm 4
// console.log(arr.slice(2, 4)); // c, d
// //Lấy rừ index -2 bao gồm cả -2
// console.log(arr.slice(-2)); //d,e
// // Lấy từ index 2 không bao gồm - 2
// console.log(arr.slice(2, -2)); //c
// //Tạo ra 1 bản sao của arr
// console.log(arr.slice());
// console.log([...arr]);

// ///SPLICE
// //cắt các giá trị sau vị trí index = 2 và return về mảng mới
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// ///REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f', ...arr];
// console.log(arr2.reverse());
// console.log(arr2);

// ///CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// ///JOIN
// //nối các phần từ trong mảng bằng "-" a-b-c-d-f-e
// console.log(letters.join('-'));

// //method at
// const array = [23, 11, 64];
// console.log(array[0]);

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (value, index) =>
//     `Movements ${index + 1}: You ${
//       value > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(value)}`
// );
// console.log(movementsDescription);

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //reducce

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// //Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
//fixbug
// const eurToUsd = 1.1;
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, index, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// console.log(movements);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
