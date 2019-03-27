// function getPollResults(poll_id) {
//     Responses.findAll({ where: { poll_id = pollID } })
// }

var results = {}

function determineChoices(repsonses) {
    for (i=0; i<responses.length; i++) {
    
    }
}

function determineRankings(responses) {

}

const db = require("../models");

// Defining methods for the booksController
module.exports = {
  doAllTheWork: function(req, res) {
    db.Response.findAll({
        where: {
            poll_id: req.params.pollid
        },
        include: [db.Choice]
    }).then(function(dbResult) {
      console.log(dbResult)
      determineRankings(dbResult)
        res.json(dbResult)
    })
  }
}
