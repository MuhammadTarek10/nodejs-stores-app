exports.queryList = {
  GEL_ALL_NOTES: "SELECT * FROM notes",
  CREATE_NOTE: "INSERT INTO notes (title, content) VALUES (?, ?)",
  GET_NOTE: "SELECT * FROM notes WHERE id = ?",
  UPDATE_NOTE: "UPDATE notes SET title = ?, content = ? WHERE id = ?",
  DELETE_NOTE: "DELETE FROM notes WHERE id = ?",
  GET_ALL_STORES: "SELECT * FROM bms.store",
  CREATE_STORE: "INSERT INTO bms.store (name, code, address) VALUES (?, ?, ?)",
  GET_STORE: "SELECT * FROM bms.store WHERE id = ?",
  UPDATE_STORE: "UPDATE bms.store SET name = ?, address = ? WHERE id = ?",
  DELETE_STORE: "DELETE FROM bms.store WHERE id = ?",
  GET_ALL_BOOKS: "SELECT * FROM bms.book",
  CREATE_BOOK:
    "INSERT INTO bms.book (title, content, pages, author, genre, price, store_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
  GET_BOOK: "SELECT * FROM bms.book WHERE id = ?",
  UPDATE_BOOK:
    "UPDATE bms.book SET title = ?, content = ?, pages = ?, author = ?, genre = ?, price = ?, store_id = ? WHERE id = ?",
  DELETE_BOOK: "DELETE FROM bms.book WHERE id = ?",
};
