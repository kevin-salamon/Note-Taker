const db = require('../db/db');
const fs = require('fs');

module.exports = function(app) {

    app.get('/api/notes', function(req, res) {
      res.json(db);
    });
  
    app.post("/api/notes", function (req, res) {
      db.push(req.body);
      res.json(true);
      let dbString = JSON.stringify(db);
      fs.writeFile("db/db.json", dbString, function (err) {
          if (err) {
            console.log(err);
          }
          console.log("Completed.");
      });
  });

};