const Book = require('../services/bookService');

const getAll = async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
}

module.exports = {
  getAll,
}