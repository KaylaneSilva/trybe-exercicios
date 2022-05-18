const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id)
  return book;
};

const createBook = async (newBook) => {
  const createNewBook = await Book.create(newBook);

  return createNewBook;
};

const updateBook = async (id, book) => {
 const [updatedBook] = await Book.update(book, { where: { id }});

 return updatedBook;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook
};