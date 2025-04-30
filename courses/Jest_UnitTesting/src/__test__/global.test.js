const text = 'Hola mundo';

const fruits = ['manzana', 'melón', 'banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/mundo/);
});

test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Es verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error('Error: No string provided'));
    }

    resolve(str.split('').reverse().join(''));
  });
};

test('Probar una promesa', () => {
  return reverseString2('Hola').then((string) => {
    expect(string).toBe('aloH');
  });
});

test('Probar async/await', async () => {
  const string = await reverseString2('Hola');

  expect(string).toBe('aloH');
});

afterEach(() => console.log('Después de cada prueba'));
afterAll(() => console.log('Después de todas las pruebas'));
