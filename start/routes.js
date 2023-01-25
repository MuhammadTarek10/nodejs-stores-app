const { App, EndPoints } = require("../config/api/endpoints");
const noteRouter = require("../router/note_router");

const BASE = `${App.BASE}/${App.VERSION}`;

module.exports = function (app) {
  require("./cors")(app);
  require("./parser")(app);
  app.use(`/${BASE}/${EndPoints.NOTES}`, noteRouter);
};
