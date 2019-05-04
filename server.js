var express = require("express");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var app = express();
var PORT = process.env.PORT || 8080;

htmlRoutes(app);
apiRoutes(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
