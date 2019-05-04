var express = require("express");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var app = express();
var PORT = process.env.PORT || 8080;

htmlRoutes(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
