//THIS PAGE SIMPLY USES PATH() TO REDIRECT ANCHOR TAGS TO THE CORRESPONDING HTML PAGES - BUT THROUGH A SERVER INSTEAD OF A DIRECT LINK + THE ANCHOR. THEN EXPORTS IT.

var path = require("path");

module.exports = function(app) {

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
