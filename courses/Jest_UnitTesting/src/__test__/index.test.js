const { randomString } = require('../index');

describe('Describir funcionalidades de randomString', () => {
  test('Probar funcionalidad', () => {
    expect(typeof randomString()).toBe('string');
  });

  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
