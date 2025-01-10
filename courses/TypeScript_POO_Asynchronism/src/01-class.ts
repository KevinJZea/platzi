export const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

export const date2 = new Date(1993, 4, 21);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

export let myVar: any;

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

export const myDate = new MyDate(2002, 4, 18);
console.log(myDate);
