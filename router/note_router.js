const express = require("express");
const { NotesCRUD } = require("../config/api/endpoints.js");

const router = express.Router();

router.get(NotesCRUD.GET_NOTES, (req, res) => {
  res.send("Hello From Router!");
});

module.exports = router;
