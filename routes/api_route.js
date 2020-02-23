const db = require('../db/db');
const fs = require('fs');

module.exports = function(app) {

    app.get('/api/notes', function(req, res) {
      res.json(db);
    });
  
    app.post("/api/notes", function (req, res) {
      var newNote = JSON.stringify(req.body);
      console.log("req.body is :" + JSON.stringify(req.body)); //logs!
      res.send("received, thanks")
      fs.appendFile("db/db.json", newNote, function (err) {
          if (err) {
              return console.log(err);
          }
          console.log("Success!");
      });
    });

};
  