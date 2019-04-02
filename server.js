const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const router = require("./routes/index.js")
var db = require("./models")
var cors = require("cors")


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({credentials: true, origin: true}))
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/apiRoutes.js")(app);
app.use(router);


 


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  require("./scripts/seeds.js")(db);
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
