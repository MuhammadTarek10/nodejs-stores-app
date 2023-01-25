exports.Note = class Note {
  constructor(noteId, title, description, createdAt, updatedAt) {
    this.noteId = noteId;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
};
