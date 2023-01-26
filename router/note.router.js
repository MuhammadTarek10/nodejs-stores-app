const express = require("express");
const routes = require("../config/api/endpoints");
const noteController = require("../controller/note.controller");
const router = express.Router();

router.get(routes.NotesCRUD.GET_ALL_NOTES, noteController.getAllNotes);
router.post(routes.NotesCRUD.CREATE_NOTE, noteController.createNote);
router.get(routes.NotesCRUD.GET_NOTE, noteController.getNote);
router.put(routes.NotesCRUD.UPDATE_NOTE, noteController.updateNote);
router.delete(routes.NotesCRUD.DELETE_NOTE, noteController.deleteNote);

module.exports = router;
