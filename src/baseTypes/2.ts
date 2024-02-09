/* JavaScript змінна може зберігати значення будь-якого типу. Який тип надаєте змінній anything в TypeScript, щоб зберегти її гнучкість? */

type Flex = number | string | object;

let anything: Flex = -20;
anything = "Text";
anything = {};

console.log(anything); // {}

export {};
