/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
/* 
let arr: Array<string | number> = [];

arr = ["Text", 50, true];

const getPromise: Promise(arr) = new Promise((resolve) => {
  resolve(arr);
});

getPromise.then((data) => {
  console.log(data);
});

export {};

// Output:
const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

export {};
*/
