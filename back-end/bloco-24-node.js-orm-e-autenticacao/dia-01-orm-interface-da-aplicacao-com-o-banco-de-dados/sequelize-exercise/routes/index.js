const router = require('express').Router();

const BookController = require('../controllers/bookController');

router.get('/books', BookController.getAll);

router.get('/books/:id', BookController.getById);

router.post('/books', BookController.createBook);

router.put('/books/:id', BookController.updateBook);

router.delete('/books/:id', BookController.deleteBook);

module.exports = router;
