/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum DaysOfWeek {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

// console.log(DaysOfWeek.MONDAY);

function isWeekend(day: DaysOfWeek): boolean {
  switch (day) {
    case DaysOfWeek.SATURDAY:
    case DaysOfWeek.SUNDAY:
      return true;
    default:
      return false;
  }
}

console.log(isWeekend(DaysOfWeek.THURSDAY)); // false
console.log(isWeekend(DaysOfWeek.SATURDAY)); // true

export {};
