/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
let literal: "enable" | "disable";

console.log((union = "Text"));
console.log((union = 10));
console.log((literal = "enable"));
export {};
