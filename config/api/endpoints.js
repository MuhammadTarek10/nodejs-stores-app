module.exports = {
  App: {
    BASE: "api",
    VERSION: "v1",
  },
  EndPoints: {
    NOTES: "notes-app",
  },
  NotesCRUD: {
    GET_ALL_NOTES: "/notes",
    CREATE_NOTE: "/notes",
    GET_NOTE: "/notes/:id",
    UPDATE_NOTE: "/notes/:id",
    DELETE_NOTE: "/notes/:id",
  },
};
