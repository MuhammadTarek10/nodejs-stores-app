const { queryList } = require("../db/queries");
const dbConnection = require("../db/connection");
const { Book } = require("../models/book.model");

exports.getAllBooks = async (req, res) => {
  try {
    const query = queryList.GET_ALL_BOOKS;
    const books = await dbConnection.dbQuery(query);
    res.send(books.rows);
  } catch (err) {
    res.send(err);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const query = queryList.GET_BOOK_BY_ID;
    const { id } = req.params;
    const book = await dbConnection.dbQuery(query, [id]);
    res.send(book.rows);
  } catch (err) {
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
