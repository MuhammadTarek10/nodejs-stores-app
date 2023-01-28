const { App, EndPoints } = require("../config/api/endpoints");
const noteRouter = require("../router/note.router");
const storeRouter = require("../router/store.router");
const bookRouter = require("../router/book.router");
const userRouter = require("../router/user.router");

const BASE = `/${App.BASE}/${App.VERSION}`;

module.exports = function (app) {
  require("./cors")(app);
  require("./parser")(app);
  require("./swagger")(app, BASE);
  app.use(`${BASE}/${EndPoints.NOTES}`, noteRouter);
  app.use(`${BASE}/${EndPoints.STORE}`, storeRouter);
  app.use(`${BASE}/${EndPoints.STORE}`, bookRouter);
  app.use(`${BASE}`, userRouter);
};
