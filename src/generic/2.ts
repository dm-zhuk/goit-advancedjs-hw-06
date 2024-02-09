/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type compare = Pick<AllType, "name" | "color" | "position" | "weight">;

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// test
const topObj = { name: "Apple", position: 2, color: "red", weight: 1500 };
const bottomObj = { position: 10785, color: "green", weight: 20 };

const result = compare(topObj, bottomObj);
console.log(result); // {name: 'Apple', color: 'red', position: 10785, weight: 20}

export {};
