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

//   app.get("/api/authors/:id", function(req, res) {
//     db.Choice.findOne({
//         where: {
//         id: req.params.id
//         },
//         include: [db.Poll]
//     }).then(function(dbChoice) {
//         res.json(dbChoice);
//     });
// });
  app.get("/api/polls/:pollkey", controller.getPollChoices)

  app.get("/api/results/:pollid", controller.doAllTheWork)

}