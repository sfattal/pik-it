// function getPollResults(poll_id) {
//     Responses.findAll({ where: { poll_id = pollID } })
// }

function determineRankings() {
    
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
        res.json(dbResult)
    })
  }
}
