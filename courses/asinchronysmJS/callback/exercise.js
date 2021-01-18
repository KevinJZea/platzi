const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const calc = (callback1, callback2) => {
  let a = 6,
    b = 4;
  firstResult = callback1(a, b);
  secondResult = callback1(b, a);
  result = callback2(firstResult, secondResult);

  console.log(firstResult, secondResult);
  console.log(result);
};

calc(substract, multiply);
