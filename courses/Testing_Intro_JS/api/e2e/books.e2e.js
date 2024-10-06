const mockGetAll = jest.fn();

const request = require('supertest');

const createApp = require('../src/app');

const { generateBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib.js', () =>
  jest.fn().mockImplementation(() =>
    ({
      getAll: mockGetAll,
      create: () => {},
    })));

describe('Tests for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    // Create app before all tests
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a books list', async () => {
      const fakeBooks = generateBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
