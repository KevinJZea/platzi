/* 

Your local library needs your help!
Given the expected and actual return dates for a library book,
create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0 ).
2. If the book is returned after the expected return day
but still within the same calendar month and year as the expected return date, fine = 15 Hackos * ( the number of days late ).
3. If the book is returned after the expected return month
but still within the same calendar year as the expected return date, the fine = 500 Hackos * ( the number of months late ).
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of fine = 10000 Hackos.

Charges are based only on the least precise measure of lateness.
For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be .

Example
d1, m1, y1 = 14, 7, 2018
d2, m2, y2 = 5, 7, 2018

The first values are the return date and the second are the due date.
The years are the same and the months are the same.
The book is 14 - 5 = 9 days late. Return 9 * 15 = 135.

*/

function libraryFine(
  d1: number,
  m1: number,
  y1: number,
  d2: number,
  m2: number,
  y2: number,
): number {
  if (y1 < y2) return 0;
  if (y1 > y2) return 10000;
  if (m1 < m2) return 0;
  if (m1 > m2) return 500 * (m1 - m2);
  if (d1 > d2) return 15 * (d1 - d2);

  return 0;
}

libraryFine(9, 6, 2015, 6, 6, 2015); // 45
