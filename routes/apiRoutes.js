var db = require("../models");

module.exports = function(app) {
  app.get("/api/polls", function(req, res) {
    db.Polls.findAll({
    }).then(function(dbPolls) {
      console.log(dbPolls)
      res.json(dbPolls);
    });
  });

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
}