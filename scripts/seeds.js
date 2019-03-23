function seed(db) {
    db.Poll.findOne({}).then(function(data) {
      if (!data) {
        db.Poll.create({ poll_name: "Lunch" });

        // db.Choice,create
    
      }
    });
  }
  
  module.exports = seed;