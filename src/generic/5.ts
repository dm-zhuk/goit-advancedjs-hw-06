/*  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.

interface KeyValuePair {
  key;
  value;
}  */
interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

// test
const pair: KeyValuePair<number, string> = { key: 1, value: "one" };
console.log(pair); // { key: 1, value: "one" }

const pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true };
console.log(pair2); // { key: "isTrue", value: true }

const pair3: KeyValuePair<string, number> = { key: "age", value: 1 };
console.log(pair3); // {key: 'age', value: 1}

export {};
