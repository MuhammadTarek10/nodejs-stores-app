module.exports = {
  App: {
    BASE: "api",
    VERSION: "v1",
  },
  EndPoints: {
    NOTES: "notes-app",
    STORE: "store-app",
  },
  NotesCRUD: {
    GET_ALL_NOTES: "/notes",
    CREATE_NOTE: "/notes",
    GET_NOTE: "/notes/:id",
    UPDATE_NOTE: "/notes/:id",
    DELETE_NOTE: "/notes/:id",
  },
  StoreCRUD: {
    GET_ALL_STORES: "/stores",
    CREATE_STORE: "/stores",
    GET_STORE: "/stores/:id",
    UPDATE_STORE: "/stores/:id",
    DELETE_STORE: "/stores/:id",
  },
  BookCRUD: {
    GET_ALL_BOOKS: "/books",
    CREATE_BOOK: "/books",
    GET_BOOK: "/books/:id",
    UPDATE_BOOK: "/books/:id",
    DELETE_BOOK: "/books/:id",
  },
};
