module.exports = function seed(db) {
  db.Poll.findOne({}).then(function(data) {
   if (!data) {
    db.Poll.create({ poll_name: "Stanford", poll_key: "Xjdjs7753dD", admin_key: "admin" });
    db.Choice.create({ poll_id: 1, choice_text: "A" });
    db.Choice.create({ poll_id: 1, choice_text: "B" });
    db.Choice.create({ poll_id: 1, choice_text: "C" });
    db.Choice.create({ poll_id: 1, choice_text: "D" });
    db.User.create({ user_name: "sep", user_email: "sep@sep.com", poll_id: 1, temp_account: true});
    db.User.create({ user_name: "tuls", user_email: "tuls@tuls.com", poll_id: 1, temp_account: true});
    db.User.create({ user_name: "rez", user_email: "rez@rez.com", poll_id: 1, temp_account: true});
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
