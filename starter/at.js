'use strict';

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]); //trả về 1 array

// console.log(arr.slice(-2)[1]);
// console.log(arr.at(-3));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

const user = {
  Nghia: {
    name: 'Pham Van Nghia',
    class: '12A10',
  },

  Hoa: {
    name: 'Pham Van Hoa',
    class: '12A9',
    getJob() {
      return 'Developer';
    },
  },
};

const nameHoa = user?.Hoa?.shsh;
console.log(nameHoa);

//Đối với 1 function
const jobHoa = user.Hoa.getJob?.();
const jobNghia = user.Nghia.getJob?.();
console.log(jobNghia);
console.log(jobHoa);

//Optional Chaining kiểm tra Object user có tồn tại hay không(?) nếu có tiếp tục kiểm tra user.Hoa? nếu tồn tại tiêp tục kiểm tra thuộc tính name
const array = [1, 2, 3, 'hello world', 4.12, true];
array.splice(0, 1);
console.log(array);
