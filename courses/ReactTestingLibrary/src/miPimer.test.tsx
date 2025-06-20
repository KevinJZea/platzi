import { describe, it, expect } from 'vitest';

describe('Mi primer test', () => {
  it('Suma de dos números', () => {
    const suma = (a, b) => a + b;
    const resultado = suma(2, 3);

    expect(resultado).toBe(5);
  });

  it('Dos textos iguales', () => {
    const text1 = 'Platzi Conf';
    const text2 = 'Platzi';

    expect(text1).toBe(text2);
  });
});
