
 module.exports = function seed(db) {
  db.Poll.findOne({}).then(function(data) {
   if (!data) {
     console.log(db);
    db.Poll.create({ poll_name: "Stanford", poll_key: "Xjdjs7753dD" });
    db.Choice.create({ poll_id: 1, choice_text: "A" });
    db.Choice.create({ poll_id: 1, choice_text: "B" });
    db.Choice.create({ poll_id: 1, choice_text: "C" });
    db.Choice.create({ poll_id: 1, choice_text: "D" });
    db.Response.create({ poll_id: 1, user_id: 1, choice_id: 1, rank: 1});
    db.Response.create({ poll_id: 1, user_id: 1, choice_id: 2, rank: 2});
    db.Response.create({ poll_id: 1, user_id: 1, choice_id: 3, rank: 3});
    db.Response.create({ poll_id: 1, user_id: 1, choice_id: 4, rank: 4});
    db.Response.create({ poll_id: 1, user_id: 2, choice_id: 1, rank: 3});
    db.Response.create({ poll_id: 1, user_id: 2, choice_id: 2, rank: 2});
    db.Response.create({ poll_id: 1, user_id: 2, choice_id: 3, rank: 1});
    db.Response.create({ poll_id: 1, user_id: 2, choice_id: 4, rank: 4});
    db.Response.create({ poll_id: 1, user_id: 3, choice_id: 1, rank: 4});
    db.Response.create({ poll_id: 1, user_id: 3, choice_id: 2, rank: 2});
    db.Response.create({ poll_id: 1, user_id: 3, choice_id: 3, rank: 3});
    db.Response.create({ poll_id: 1, user_id: 3, choice_id: 4, rank: 1});
  
   }
  });
 }