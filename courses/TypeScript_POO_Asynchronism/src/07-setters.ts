export class MyDate {
  constructor(
    private year: number = 1993,
    private _month: number,
    private _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
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

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

export const myDate = new MyDate(2000, 4, 18);

console.log(myDate.isLeapYear);
