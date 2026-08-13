/* 

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer
(the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system.
The transition from the Julian to Gregorian calendar system occurred in 1918,
when the next day after January 31st was February 14th.
This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days;
it has 29 days during a leap year, and 28 days during all other years.
In the Julian calendar, leap years are divisible by 4;
in the Gregorian calendar, leap years are either of the following:

- Divisible by 400.
- Divisible by 4 and not divisible by 100.

Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year.
Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year.
The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

*/

function dayOfProgrammer(year: number): string {
  const isTransitionYear = year === 1918;
  const isGregorian = year > 1918;
  const isLeapYear = isGregorian
    ? year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    : year % 4 === 0;
  const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let accum = 0;
  let answer = '';
  for (let i = 0; i < daysPerMonth.length; i++) {
    const days = daysPerMonth[i];
    if (accum + days >= 256) {
      let daysFor256 = 256 - accum;

      if (isTransitionYear) daysFor256 += 13;

      answer = `${daysFor256}.0${i + 1}.${year}`;
      break;
    }
    accum += days;
    if (i === 1 && isLeapYear) accum++;
  }

  return answer;
}

dayOfProgrammer(2017); // 13.09.2017
dayOfProgrammer(2016); // 12.09.2016
dayOfProgrammer(1800); // 12.09.1800

// AI

function dayOfProgrammer2(year: number): string {
  if (year === 1918) return '26.09.1918';

  const isLeap =
    year < 1918
      ? year % 4 === 0
      : year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  return isLeap ? `12.09.${year}` : `13.09.${year}`;
}
