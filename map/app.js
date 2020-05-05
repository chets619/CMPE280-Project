var express = require("express");
var app = express();



var fs = require("fs");
var contents = fs.readFileSync("wildfire.json");

var jsonContent = JSON.parse(contents);

app.get("/wildfire", (req, res, next) => {

 res.json(jsonContent);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});