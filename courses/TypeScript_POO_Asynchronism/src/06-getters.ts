export class MyDate {
  constructor(
    private year: number = 1993,
    private month: number,
    private _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
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

  get day() {
    return this._day;
  }

  get isLeapYear() {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

export const myDate = new MyDate(2000, 4, 18);

console.log(myDate.isLeapYear);
