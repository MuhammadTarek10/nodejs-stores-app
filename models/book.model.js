exports.Book = class Book {
  constructor(id, title, content, pages, author, genre, price, storeId) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.pages = pages;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.storeId = storeId;
  }
};
