const Book = require('../models/book');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

module.exports = {
  getAll,
}