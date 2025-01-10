function getValue<T>(value: T): T {
  return value;
}

const value = getValue('Ája');
const value2 = getValue(12 + 5);
console.log(value);
