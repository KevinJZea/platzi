(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += total;
    });
    return total;
  };

  const rta = calcTotal([1, 2, 1, 1, 1]);

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };
})();
