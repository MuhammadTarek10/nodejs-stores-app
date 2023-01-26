const express = require("express");
const routes = require("../config/api/endpoints");
const bookController = require("../controller/book.controller");
const router = express.Router();

router.get(routes.BookCRUD.GET_ALL_BOOKS, bookController.getAllBooks);
router.post(routes.BookCRUD.CREATE_BOOK, bookController.createBook);
router.get(routes.BookCRUD.GET_BOOK, bookController.getBookById);
router.put(routes.BookCRUD.UPDATE_BOOK, bookController.updateBook);
router.delete(routes.BookCRUD.DELETE_BOOK, bookController.deleteBook);

module.exports = router;
