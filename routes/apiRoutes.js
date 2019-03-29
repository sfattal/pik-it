var db = require("../models");
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
<<<<<<< HEAD

  app.post("/api/sendPollData", controller.sendPollData);

  app.post("/api/sendResponseData", controller.sendResponseData);

=======
>>>>>>> ec558e047180c7916008e11d9d54ff9813f78ec5
}