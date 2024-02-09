/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
  
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calc(1, 11)); // 12;

function customError(): never {
  throw new Error("Error");
} // never - означає, що функція не приймає аргументів і не повертає значення (повертає never, оскільки вона завжди кидає помилку з класу Error).

export {};
