const express = require('express');
const app = express();

var players = [
    { "Ahmed Sayed Zizo": "RWF" },
    { "Saif Elgezery": "CF" },
    { "Shika": "RWF" },
    { "Awad": "GK" }
];
const PORT = 3001;

// Middleware
// A middleware is a function invocked between two main functionalities.
app.use(express.json());        // Understand JSON format.
app.use(express.urlencoded());  // Understand Serialized data.

// This is a middleware function that is allowed to multiple routes.
// This function prints the request method with its URL in the console.
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}.`);
    next();
})


app.listen(PORT, () => { console.log(`Running Express server on port ${PORT}!`) });

// Middleware Example.
// Note: this type of middleware allowed to specify route.
// Note: you can send only one response.
app.get('/hello', (req, res, next) => {
    console.log(`I'm the first middleware function :)`);
    res.status(201).send('Hello Express!');
    next();     // Without this line, the server will not go to the next middlware function.
}, (req, res, next) => {
    //res.status(201).send('Hello Express!');       // Uncomment this line will cause an error.
    console.log(`I'm the second middleware function :)`);
    next();
}, () => {
    console.log(`I'm the final middleware function :)`);
    console.log('Good Bye :(')
})

// GET Method.
// Used to retrieve some data, living on the server, to the client side.
app.get('/players', (req, res) => {
    res.status(201);
    res.send(players);
});

// POST Method.
// Used to send data from the client side to the server side.
app.post('/players', (req, res) => {
    console.log(req.body);
    players.push(req.body);
    res.status(201).send('Inserted Successfully :)');
});

app.get('/players/:player', (req, res) => {
    console.log(req.params);
    console.log(req.params.player);
    const player = req.params.player;
    console.log(playerInfo);
    res.status(201).send("Done!");
});