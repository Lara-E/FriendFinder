var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        console.log(newFriend)
        friends.push(newFriend);

        return res.json(newFriend);
    })
};