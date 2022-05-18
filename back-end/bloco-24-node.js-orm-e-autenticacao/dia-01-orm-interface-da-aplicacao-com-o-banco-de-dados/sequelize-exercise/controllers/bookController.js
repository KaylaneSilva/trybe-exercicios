const Book = require('../services/bookService');

const getAll = async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;

  const getBook = await Book.getById(id);

  if(!getBook) return res.status(404).json({ message: "Book not found"});

  return res.status(200).json(getBook);
};

module.exports = {
  getAll,
  getById,
}