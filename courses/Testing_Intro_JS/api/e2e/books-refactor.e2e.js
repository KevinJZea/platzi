const { MongoClient } = require('mongodb');
const request = require('supertest');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Tests for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    // Create app before all tests
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a books list', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'Kevs',
        },
        {
          name: 'Book 2',
          year: 1998,
          author: 'Kevs',
        },
      ]);

      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
