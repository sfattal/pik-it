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

<<<<<<< HEAD
  app.get("/api/polls/:id", function(req, res) {
    db.Choice.findOne({
        where: {
        id: req.params.id
        },
        include: [db.Poll]
    }).then(function(dbChoice) {
        res.json(dbChoice);
    });
});

  app.get("/api/results/:pollid"), function(req, res) {
      db.Response.findAll({
          where: {
              poll_id: pollid
          },
          include: [db.Choice]
      }).then(function(dbResult) {
        console.log(dbResult)
          res.json(dbResult)
      })
  }
=======

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

  app.get("/api/results/:pollid", controller.doAllTheWork)

>>>>>>> a282fa92019cb554cdea82a313bb56f9d86115f6
}