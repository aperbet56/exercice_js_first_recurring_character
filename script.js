// Exercice JS : trouver le premier caractère récurrent

const firstRecurringCharacter = (input) => {
  const array = [];
  for (let i = 0; i < input.length; i++) {
    const foundItem = array.find((item) => item === input[i]);
    if (!!foundItem) {
      return input[i];
    } else {
      array.push(input[i]);
    }
  }
  return undefined;
};

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter([2, 3, 4, 5])); // undefined
console.log(firstRecurringCharacter([2, 1, 1, 3, 5, 1, 2, 4])); // 1
