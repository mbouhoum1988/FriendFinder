const friends = require('../data/friends');


module.exports = (app) => {
    app.get('/api/friend' , (req, res) => {
        res.json(friends);
    })

    app.post('/api/friend' , (req, res) => {
        
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
    })
}
