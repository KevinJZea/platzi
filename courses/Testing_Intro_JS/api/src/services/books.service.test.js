const { generateBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

/* const MongoLibStub = {
  getAll: mockGetAll,
  create: () => [],
}; */

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => [],
})));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a books list', async () => {
      const fakeBooks = generateBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a books list', async () => {
      const fakeBooks = generateBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
