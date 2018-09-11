var path = require("path");

module.exports = function(app) {

    // the survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // the homepage
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};