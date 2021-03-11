/*

Given a time in 12-hour AM/PM format,
convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s='12:01:00PM
Return '12:01:00'.

s='12:01:00AM'
Return '00:01:00'.

*/

function timeConversion(s) {
  /*
   * Write your code here.
   */

  let strS = s.toString();
  const time = strS.slice(-2);
  const hour = strS.slice(0, 2);
  let intHour = parseInt(hour);

  if (time === "AM" && hour === "12") {
    intHour -= 12;
    strS = strS.slice(0, -2).replace(hour, intHour.toString() + "0");
  } else if (time === "PM" && hour === "12") {
    strS = strS.slice(0, -2);
  } else if (time === "PM") {
    intHour += 12;
    strS = strS.slice(0, -2).replace(hour, intHour.toString());
  } else if (time === "AM") {
    strS = strS.slice(0, -2);
  }

  console.log(strS);
}
