exports.queryList = {
  GEL_ALL_NOTES: "SELECT * FROM notes",
  CREATE_NOTE: "INSERT INTO notes (title, content) VALUES ($1, $2)",
  GET_NOTE: "SELECT * FROM notes WHERE id = $1",
  UPDATE_NOTE: "UPDATE notes SET title = $1, content = $2 WHERE id = $3",
  DELETE_NOTE: "DELETE FROM notes WHERE id = $1",
  GET_ALL_STORES: "SELECT * FROM bms.store",
  CREATE_STORE:
    "INSERT INTO bms.store (name, code, address) VALUES ($1, $2, $3)",
  GET_STORE: "SELECT * FROM bms.store WHERE id = $1",
  UPDATE_STORE: "UPDATE bms.store SET name = $1, address = $2 WHERE id = $3",
  DELETE_STORE: "DELETE FROM bms.store WHERE id = $1",
  GET_ALL_BOOKS: "SELECT * FROM bms.book",
  CREATE_BOOK:
    "INSERT INTO bms.book (title, content, pages, author, genre, price, store_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
  GET_BOOK: "SELECT * FROM bms.book WHERE id = $1",
  UPDATE_BOOK:
    "UPDATE bms.book SET title = $1, content = $2, pages = $3, author = $4, genre = $5, price = $6, store_id = $7 WHERE id = $8",
  DELETE_BOOK: "DELETE FROM bms.book WHERE id = $1",
};
