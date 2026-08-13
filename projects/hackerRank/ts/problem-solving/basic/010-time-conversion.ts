/* 

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'

Return '12:01:00'.

s = '12:01:00AM'

Return '00:01:00'.

*/

type Meridiem = 'AM' | 'PM';
function timeConversion(s: string): string {
  const hour = s.slice(0, 2);
  const meridiem: Meridiem = s.slice(-2) as Meridiem;
  const isTwelve = hour === '12';

  if (!isTwelve) {
    if (meridiem === 'AM') return s.slice(0, -2);
    if (meridiem === 'PM') {
      const newHour = Number(hour) + 12;
      return `${newHour}${s.slice(2, -2)}`;
    }
  }

  if (meridiem === 'AM') return `00${s.slice(2, -2)}`;
  if (meridiem === 'PM') return s.slice(0, -2);

  return '';
}

timeConversion('07:05:45PM'); // 19:05:45
