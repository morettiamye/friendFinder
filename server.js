// Defining requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set Up Express Server
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect with HTML
app.use(express.static(path.join(__dirname, '/app/public'), {
  index: false,
  extensions: ['html']
}));

app.get('/', function (req, res) {
  res.sendFile('index.html', {
      root: __dirname + "/app/public"
  });
});


// Start Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });