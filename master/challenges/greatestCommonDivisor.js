// Find the greatest common divisor of two numbers:

const getDivisors = (number) => {
  const divisorsOfNumber = [];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) divisorsOfNumber.push(i);
  }
  return [...divisorsOfNumber];
};

const greatestCommonDivisor = (number1, number2) => {
  const max = Math.max(number1, number2);
  const min = max === number1 ? number2 : number1;
  if (max % min === 0) return min;

  const divisorsOfNum1 = getDivisors(number1);
  const divisorsOfNum2 = getDivisors(number2);

  const commonDivisors = divisorsOfNum1.filter((divisor) =>
    divisorsOfNum2.includes(divisor)
  );

  return Math.max(...commonDivisors);
};

const greatestCommonDivisorYT = (number1, number2) => {
  const max = Math.max(number1, number2);
  const min = max === number1 ? number2 : number1;
  if (max % min === 0) return min;

  const middle = Math.floor(max / 2);
  for (let i = middle; i > 0; i--) {
    if (max % i === 0 && min % i === 0) return i;
  }
};

console.log(greatestCommonDivisorYT(4, 6));
