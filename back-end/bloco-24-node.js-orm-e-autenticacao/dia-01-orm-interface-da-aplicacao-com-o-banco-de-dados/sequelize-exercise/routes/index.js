const router = require('express').Router();

const BookController = require('../controllers/bookController');

router.get('/books', BookController.getAll);

router.get('/books/:id', BookController.getById);

module.exports = router;
