const router = require('express').Router();

const BookController = require('../controllers/bookController');

router.get('/books', BookController.getAll);

module.exports = router;
