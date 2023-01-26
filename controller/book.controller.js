const { queryList } = require("../db/queries");
const dbConnection = require("../db/connection");
const { Book } = require("../models/book.model");
const LoggerService = require("../service/logger.service");

const logger = new LoggerService("book.controller");

exports.getAllBooks = async (req, res) => {
  try {
    const query = queryList.GET_ALL_BOOKS;
    const books = await dbConnection.dbQuery(query);
    logger.info("Get All Books");
    res.send(books.rows);
  } catch (err) {
    logger.error(err);
    res.send(err);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const query = queryList.GET_BOOK;
    const id = req.params.id;
    const book = await dbConnection.dbQuery(query, [id]);
    logger.info(`Get Book By Id: ${id}`);
    res.send(book.rows);
  } catch (err) {
    logger.error(err);
    res.send(err);
  }
};

exports.createBook = async (req, res) => {
  res.send("Create Book");
};

exports.updateBook = async (req, res) => {
  res.send("Update Book");
};

exports.deleteBook = async (req, res) => {
  res.send("Delete Book");
};
