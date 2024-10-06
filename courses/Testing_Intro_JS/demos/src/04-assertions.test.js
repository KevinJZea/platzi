// matchers
test('test obj', () => {
  const data = { name: 'Kevs' };
  data.lastname = 'Zea';
  expect(data).toEqual({ name: 'Kevs', lastname: 'Zea' });
});

test('null', () => {
  const data = null;

  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3];
  expect(numbers).toContain(3);
});
