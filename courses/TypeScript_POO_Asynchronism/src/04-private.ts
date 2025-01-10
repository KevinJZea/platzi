export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  private addPadding(value: number) {
    return value <= 9 ? `0${value}` : `${value}`;
  }
}

export const myDate = new MyDate(2002, 4, 18);
