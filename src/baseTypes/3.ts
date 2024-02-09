/* У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. */

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
}

console.log(some); // Text

export {};
