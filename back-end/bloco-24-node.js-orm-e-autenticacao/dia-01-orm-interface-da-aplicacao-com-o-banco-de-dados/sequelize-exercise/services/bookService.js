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
}

module.exports = {
  getAll,
  getById,
  createBook,
};