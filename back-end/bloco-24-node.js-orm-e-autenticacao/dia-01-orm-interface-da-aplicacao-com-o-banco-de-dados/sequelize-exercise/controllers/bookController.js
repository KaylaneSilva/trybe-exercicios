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

const createBook = async (req, res) => {
  const newBook = req.body;

  try {
    const createdBook = Book.createBook(newBook);
    
    return res.status(200).json(newBook);
  
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Something go wrong! Look you console."});
  }
}

const updateBook = async (req, res) => {
  const newBook = req.body;
  const { id } = req.params;

  try {
    const updatedBook = await Book.updateBook(id, newBook);
    console.log(updatedBook);

  if(!updatedBook) return res.status(404).json({ message: "Book not found"});
    
    return res.status(200).json(newBook);
  
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Something go wrong! Look you console."});
  }
}

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await Book.deleteBook(id);

    return res.status(201).end();
  
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Something go wrong! Look you console."});
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook
}