const { Router } = require('express');

const router = Router();

var players = [
    { "Ahmed Sayed Zizo": "RWF" },
    { "Saif Elgezery": "CF" },
    { "Shika": "RWF" },
    { "Awad": "GK" }
];

// GET Method.
// Used to retrieve some data, living on the server, to the client side.
router.get('/', (req, res) => {
    res.status(201);
    res.send(players);
});

// POST Method.
// Used to send data from the client side to the server side.
router.post('/', (req, res) => {
    console.log(req.body);
    players.push(req.body);
    res.status(201).send('Inserted Successfully :)');
});

// Get specific item from your database according to some data sent in te request.
// So, we'll use a route parameter.
// Route Parameters: variable parts of a URL path. They are typically used 
//       to point to a specific resource within a collection, such as a user identified by ID.
router.get('/:player', (req, res) => {
    console.log(req.params.player);
    const { player } = req.params;
    for (var i = 0; i < players.length; i++) {
        var currentPlayer = players[i];
        var playerName = Object.keys(currentPlayer)[0];
        if (playerName === player) {
            return res.status(200).json({ name: playerName, position: currentPlayer[playerName] });
        }
    }
    res.status(404).send("Player not found");
});

module.exports = router;