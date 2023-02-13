const JokerController = require("../controllers/joker.controller")

module.exports = app => {
  app.get("/api/jokes/", JokerController.findAllJoker);
  app.get("/api/jokes/:id", JokerController.findOneSingleJoker);
  app.get("/api/jokesramdom", JokerController.findJokerRamdom);
  app.post("/api/jokes/new", JokerController.createNewJoker);
  app.put("/api/jokes/update/:id", JokerController.updateExistingJoker);
  app.delete("/api/jokes/delete/:id", JokerController.deleteAnExistingJoker);
};