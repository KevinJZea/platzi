console.log(Math.PI);
console.log(Math.max(1, 5, 2, 9, 8, 4, 3, 2, 6));

export class MyMath {
  static readonly PI = 3.14;

  static max(...values: number[]): number {
    return values.reduce(
      (accum, number) => (number > accum ? number : accum),
      values[0]
    );
  }

  static min(...values: number[]): number {
    return values.reduce(
      (accum, number) => (number < accum ? number : accum),
      values[0]
    );
  }
}

export const math = new MyMath();
console.log(MyMath.PI);
console.log(MyMath.max(1, 5, 2, 9, 8, 4, 3, 2, 6));
console.log(MyMath.min(1, 5, 2, 9, 8, 4, 3, 2, 6));
