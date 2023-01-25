const { App, EndPoints } = require("../config/api/endpoints.js");
const noteRouter = require("../router/note_router.js");

const base = `${App.BASE}/${App.VERSION}`;

module.exports = function (app) {
  require("./cors")(app);
  require("./parser")(app);
  app.use(`/${base}/${EndPoints.NOTES}`, noteRouter);
};
