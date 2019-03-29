// function getPollResults(poll_id) {
//     Responses.findAll({ where: { poll_id = pollID } })
// }

var rankings = {}

function determineChoices(poll_id) {
    db.Choice.findAll({
        where: {
            poll_id: poll_id
        }
    }).then(function(choices) {
        // console.log(choices);
        for (i=0; i<choices.length; i++) {
            var index = (choices[i].dataValues.id);
            rankings[index] = 0;
        }
        console.log(rankings);
    })
    determineRankings(rankings, poll_id);
}


function determineRankings(ranks, poll_id) {
    db.Response.findAll({
        where: {
            poll_id: poll_id
        }
    }).then(function(dbResult) {
        // console.log(dbResult);
        console.log("ranks: " + ranks)
        for (let key in ranks) {
            console.log(key)
            for (j=0; j<dbResult.length; j++) {
                console.log(dbResult[j].dataValues)
                var choiceID = parseInt(dbResult[j].dataValues.choice_id)
                // console.log("choice ID: " + choiceID)
                // console.log(choiceID)
                var rank = parseInt(dbResult[j].dataValues.rank)
                // console.log("rank: " + rank)
                if ( parseInt(key) === choiceID) {
                    ranks[key] += rank;
                }
            }
        }
    console.log(rankings);
    })
}

const db = require("../models");

// Defining methods for the controller
module.exports = {
  doAllTheWork: function(req, res) {
    var poll_id = req.params.pollid
    db.Response.findAll({
        where: {
            poll_id: req.params.pollid
        },
        include: [db.Choice]
    }).then(function(dbResult) {
    //   console.log(dbResult)
      determineChoices(req.params.pollid)
    //   determineRankings(rankings, poll_id)
        res.json(dbResult)
    })
  },
  getPollChoices: function(req, res) {
      console.log("getting choices...")
      var poll_key = req.params.pollkey
      db.Poll.findAll({
        where: {
            poll_key: req.params.pollkey
        },
        include: [db.Choice]
      }).then(function(dbResult) {
          console.log("got choices");
          res.json(dbResult);
      })
  },
    getExistingKeys: function() {
        db.Poll.findAll({
        attributes: ['poll_key']
        }).then(function(dbResult) {
        return dbResult;
    })
    },
  sendPollData: function(req, res) {
      console.log("posting to poll");
      db.Poll.Create({
          poll_name: req.body.title,
          poll_key: req.body.key,
          poll_description: req.body.description,
          poll_expiration: req.body.expirationDate
      }).then(function(dbResult) {
            sendChoiceData(req, res, pollData, dbResult.id)
            
      })
  },
  sendChoiceData: function(req, res, pollData, id) {
      pollData.choices.forEach(choice => {
        db.Choice.Create({
            poll_id: id,
            choice_text: choice
        })
      }).then(function(dbResult) {
          res.send(dbResult.poll_id)
      })
  },
  sendResponseData: function(req, res, responseData, id) {
      responseData.userChoices.forEach(choice => {
          db.Response.Create({
            poll_id: responseData.poll_id,
            user_id: id,
            choice_id: choice.id,
            choice_rank: choice.rank
          })
      })
  },
  sendUserData: function(req, res) {
      db.User.Create({
        user_name: req.body.userName,
        user_email: req.body.userEmail,
        temp_account: true
      }).then(function(dbResult) {
          sendResponseData(req, res, responseData, dbResult.id)
      })
  }
}