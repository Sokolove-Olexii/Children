const adultsCount = 0;
const childrenCount = 0;
const babiesCount = 0;

function canTheyBook(adultsCount, childrenCount, babiesCount) {
  if (adultsCount < 1) {
    return false;
  }

  const totalChild = childrenCount + adultsCount;

  const presentAdults = childrenCount + babiesCount <= 2 * adultsCount;

  const onlyBaby = childrenCount === 0 && adultsCount + babiesCount <= 9;

  return (
    (totalChild <= 8 || (totalChild === 8 && babiesCount >= 1)) &&
    (presentAdults || onlyBaby)
  );
  //   const freeSpace =
  //     (adultsCount + childrenCount <= 8 && adultsCount >= babiesCount * 2) ||
  //     (adultsCount === babiesCount && adultsCount < 9);
  //   const presentAdults =
  //     childrenCount <= 2 * adultsCount &&
  //     childrenCount + babiesCount <= 2 * adultsCount;

  //   return freeSpace && presentAdults;
}

console.log(canTheyBook(2, 3, 1));
console.log(canTheyBook(8, 0, 1));
console.log(canTheyBook(4, 2, 3));
console.log(canTheyBook(0, 1, 1));
console.log(canTheyBook(9));
console.log(canTheyBook(2, 2, 3));

canTheyBook(2, 3, 1); // true
canTheyBook(8, 0, 1); // true
canTheyBook(4, 2, 3); // true
canTheyBook(0, 1, 1); // false - Не можна бронювати без дорослих
canTheyBook(9); // false - Забагато людей
canTheyBook(8, 1); // false - Дитина не может бути дев'ятою
canTheyBook(2, 2, 3); // false - Недостатньо дорослих

// Номер вміщує до 8 дорослих + 1 малюк.
// Номер вміщує не більше 8 персон, але 9-м можна підселити малюка;
// має бути мінімум один дорослий;
// на одного дорослого може бути не більше 2-ох дітей АБО однієї дитини
// та одного малюка;
// малюків можна розмістити на ліжках для дорослих, тому в номері
// може бути більше ніж один малюк (якщо виконуються інші умови).
