// function getPollResults(poll_id) {
//     Responses.findAll({ where: { poll_id = pollID } })
// }

// var rankings = {}

function determineChoices(poll_id) {
    db.Choice.findAll({
        where: {
            poll_id: poll_id
        }
    }).then(function(choices) {
        for (i=0; i<choices.length; i++) {
            var index = (choices[i].dataValues.id);
            rankings[index] = 0;
        }
        console.log(rankings);
    })
    return determineRankings(rankings, poll_id);
}


function determineRankings(ranks, poll_id) {
    db.Response.findAll({
        where: {
            poll_id: poll_id
        }
    }).then(function(dbResult) {
        console.log("ranks: " + ranks)
        for (let key in ranks) {
            console.log(key)
            for (j=0; j<dbResult.length; j++) {
                // console.log(dbResult[j].dataValues)
                var choiceID = parseInt(dbResult[j].dataValues.choice_id)
                var rank = parseInt(dbResult[j].dataValues.rank)
                if ( parseInt(key) === choiceID) {
                    ranks[key] += rank;
                }
            }
        }
    console.log(rankings);
    return rankings;
    })
}

const db = require("../models");

// Defining methods for the controller
module.exports = {
//   doAllTheWork: function(req, res) {
//     db.Response.findAll({
//         where: {
//             poll_id: req.params.pollid
//         },
//         include: [db.Choice]
//     }).then(function(dbResult) {
//       determineChoices(req.params.pollid)
//     //   determineRankings(rankings, poll_id)
//         res.json(dbResult)
//     })
//   },
    // doAllTheWork: function(req, res) {
    //     db.Poll.findAll({
    //         where: {
    //             poll_key: req.params.pollkey
    //         },
    //         include: {all: true}
    //     }).then(function(dbResult) {
    //         // console.log(dbResult)
    //         var rankings = {}
    //         var poll_id = dbResult[0].id
    //         const choices = dbResult[0].Choices
    //         const responses = dbResult[0].Responses
    //         // determineChoices(dbResult[0].id)
    //         //manually doing determineChoices workflow (adding keys to dictionary):
    //         //CAN ALSO try creating the object array instead and then adding rank property later? aka resArray[i].rank += rank
    //         for (i=0; i<choices.length; i++) {
    //             var index = (choices[i].dataValues.id);
    //             rankings[index] = 0;
    //         }
    //         console.log(rankings);
    //         // var sep = determineRankings(rankings, poll_id)
    //         //manually doing determineRankings workflow:
    //         for (let key in rankings) {
    //             console.log(key)
    //             for (j=0; j<responses.length; j++) {
    //                 // console.log(dbResult[j].dataValues)
    //                 var choiceID = parseInt(responses[j].choice_id)
    //                 var rank = parseInt(responses[j].rank)
    //                 if ( parseInt(key) === choiceID) {
    //                     rankings[key] += rank;
    //                 }
    //             }
    //         }
    //         // console.log(responses)
    //         console.log(rankings)
    //         var resArray = []
    //         //Add results as objects to resArray, using choice_id from choices variable to pull name
    //         res.send(rankings)
    //     })
    // },
    doAllTheWork: function(req, res) {
        db.Poll.findAll({
            where: {
                poll_key: req.params.pollkey
            },
            include: {all: true}
        }).then(function(dbResult) {
            var rankings = []
            var pollId = dbResult[0].id
            const pollTitle = dbResult[0].poll_name
            const choices = dbResult[0].Choices
            const responses = dbResult[0].Responses
            const voters = dbResult[0].Users
            const pollResulted = dbResult[0].poll_resulted
            //manually doing determineChoices workflow (adding keys to dictionary):
            //CAN ALSO try creating the object array instead and then adding rank property later? aka resArray[i].rank += rank
            for (i=0; i<choices.length; i++) {
                var index = (choices[i].dataValues.id);
                var choiceRes = {
                    choiceId: choices[i].dataValues.id,
                    choiceType: choices[i].dataValues.choiceType,
                    choiceValue: choices[i].dataValues.choiceValue,
                    choiceLabel: choices[i].dataValues.choiceLabel,
                    choiceRank: 0
                }
                rankings.push(choiceRes)
            }
            console.log(rankings);
            //manually doing determineRankings workflow:
            for (choice in rankings) {
                for (j=0; j<responses.length; j++) {
                    var choiceID = parseInt(responses[j].choice_id)
                    var rank = parseInt(responses[j].rank)
                    if ( parseInt(rankings[choice].choiceId) === choiceID) {
                        rankings[choice].choiceRank += rank;
                    }
                }
            }
            // console.log(responses)
            rankings.sort((a,b) => (a.choiceRank > b.choiceRank) ? 1 : ((b.choiceRank > a.choiceRank) ? -1 : 0));
            console.log(rankings)
            res.send({
                rankings: rankings,
                pollId: pollId,
                pollTitle: pollTitle,
                pollResulted: pollResulted,
                voters: voters
            })
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
          res.send(dbResult);
      })
  },

    getAdminPage: function(req, res) {
        db.Poll.findAll({
            where: {
                admin_key: req.params.adminkey
            },
            include: {all: true}
        }).then(function(dbResult) {
            res.send(dbResult)
        })
    },

    getExistingKeys: function() {
        db.Poll.findAll({
        attributes: ['poll_key']
        }).then(function(dbResult) {
        return dbResult;
    })
    },

    sendChoiceData: function(req, res, id) {
        console.log(req.body)
        req.body.choices.forEach(choice => {
          db.Choice.create({
              poll_id: id,
              choiceType: choice.choiceType,
              choiceValue: choice.choiceValue,
              choiceLabel: choice.choiceLabel
          })
        })
        setTimeout(() => {
            res.send({pollkey: req.body.poll_key})
        }, 1000)
    },

    sendPollData: function(req, res) {
      console.log("posting to poll");
      db.Poll.create({
          poll_name: req.body.title,
          poll_key: req.body.key,
          admin_key:req.body.admin_key,
          poll_description: req.body.description,
          poll_expiration: req.body.expiration
      }).then(function(dbResult) {
            module.exports.sendChoiceData(req, res, dbResult.id)
            })
    },

    sendResponseData: function(req, res, id) {
        console.log("responses: ")
        console.log(req.body.responses)
        req.body.responses.forEach( (response, index) => {
            console.log(response, index)
            db.Response.create({
                poll_id: req.body.poll_id,
                user_id: id,
                choice_id: response.id,
                rank: index
            })
        })
        setTimeout(() => {
            res.send({pollkey: req.body.poll_key})
        }, 1000)
    },

    sendUserData: function(req, res) {
        db.User.create({
            user_name: req.body.participantName,
            poll_id: req.body.poll_id,
            // user_email: req.body.userEmail,
            temp_account: true
        }).then(function(dbResult) {
            module.exports.sendResponseData(req, res, dbResult.id)
        })
    },

    resultPoll: function(req, res) {
        console.log("this is a request")
        // console.log(req)
        db.Poll.update(
            {poll_resulted: req.body.pollResulted},
            {where: {
                poll_key: req.params.pollkey
            }}
        ).then(function(dbResult) {
            console.log(dbResult)
            res.send(dbResult)
        })
    }

}