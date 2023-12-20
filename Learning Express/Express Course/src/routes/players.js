const { Router } = require('express');

const router = Router();

// Protect this path. You can't access it until you've logged in.
router.use((req, res, next) => {
    if (req.session.user)
        next();
    else
        res.status(401).send('You have not logged in!');
});

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
// // Cookies are blocks of data sent from the web server to the client and saved in the browser in the client side.
router.post('/', (req, res) => {
    console.log(req.body);
    res.cookie("Cookie name", true, { maxAge: 10000 }); // The age is 10 seconds.
    // First call will print: [Object: null prototype] {}
    // After creating the cookies (in any call after the first call), it will print: { 'Cookie name': 'true' }
    console.log(req.cookies);
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

router.get('/players/newPlayers', (req, res) => {
    const { cart } = req.session;
    if (!cart) {
        res.send('You have no cart session.');
    } else {
        res.send(cart);
    }
});

router.post('/players/newPlayers', (req, res) => {
    const { playerName, position } = req.body;
    const player = { playerName, position };
    // Check if cart is defined in the req.session object.
    const cart = req.session.cart;
    if (cart) {
        // Check if items is defined in cart before pushing the player
        if (cart.items) {
            cart.items.push(player);
        } else {
            // If items is not defined, create a new array with the player
            cart.items = [player];
        }
    } else {
        // If cart is not defined, create a new session with the player
        req.session.cart = {
            items: [player],
        };
    }
    res.status(201).send('Player added successfully');
});
module.exports = router;