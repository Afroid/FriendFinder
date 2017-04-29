var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

//Route that if "/" is the path then it will direct the user to 
//home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

//Route that if "/survey" is the path then it will direct the user to 
//survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

//Default route that if no matching path is found then it will direct the user to 
//home.html  
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};