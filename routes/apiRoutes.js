var db = require("../models");
var router = require("express").Router
var controller = require("../controllers/pollController.js")


module.exports = function(app) {
  app.get("/api/polls", function(req, res) {
    db.Poll.findAll({
    }).then(function(dbPolls) {
      console.log('hello')
      console.log(dbPolls)
      res.send(dbPolls);
    });
  });
  
  app.get("/api/polls/:pollkey", controller.getPollChoices)

  app.get("/api/results/:pollid", controller.doAllTheWork)

  app.post("/api/sendPollData", controller.sendPollData);

  app.post("/api/sendResponseData", controller.sendResponseData);

}