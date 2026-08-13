/* 

Two friends Anna and Brian, are deciding how to split the bill at a dinner.
Each will only pay for the items they consume.
Brian gets the check and calculates Anna's portion.
You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2, 4, 6].
Anna declines to eat item k = bill[2] which costs 6.
If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3.
If he includes the cost of bill[2], he will calculate (2 + 4 + 6) / 2 = 6.
In the second case, he should refund 3 to Anna.

*/

function bonAppetit(bill: number[], k: number, b: number): void {
  const amount = bill.reduce((sum, num, i) => {
    if (i === k) return sum;
    return sum + num;
  }, 0);

  const answer = amount / 2 === b ? 'Bon Appetit' : b - amount / 2;

  console.log(answer);
}

bonAppetit([3, 10, 2, 9], 1, 7); // Bon Appetit
bonAppetit([3, 10, 2, 9], 1, 12); // 5

// AI

function bonAppetit2(bill: number[], k: number, b: number): void {
  const fair = (bill.reduce((s, x) => s + x, 0) - bill[k]) / 2;
  console.log(fair === b ? 'Bon Appetit' : b - fair);
}
