/*  У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge(objA, objB) {
  return Object.assign(objA, objB);
} */

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB) as T & U;
} // it's creating a new object ({}) and copying over the properties from objA and objB

// test
const result = merge({ Guest: "Mr. Johnson" }, { room: 15 });
console.log(result); // { Guest: 'Mr. Johnson', room: 15 }

export {};
