// Require the friends array
var friendsData = require("../data/friends")

module.exports = function(app) {

    // Get route
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Post Route
    app.post("/api/friends", function(req, res) {
        friendsData.push(req, body);

    });
}

