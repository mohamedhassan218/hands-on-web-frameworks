const express = require('express');
const app = express();
// Importing a module or file located at ./routes/players.
// 'playersRoute' is a variable that holds the functionality defined in the 'players' module.
const playersRoute = require('./routes/players');
const authRoute = require('./routes/auth');
const clubsRoute = require('./routes/clubs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');

const PORT = 3001;

mongoose
    .connect('mongodb://localhost:27017/learning_express')
    .then(() => { console.log('Connected to DB.'); })
    .catch((err) => { console.log(err); });

// Middleware
// A middleware is a function invocked between two main functionalities.
app.use(express.json());        // Understand JSON format.
app.use(express.urlencoded());  // Understand Serialized data.
app.use(cookieParser());
app.use(session({
    secret: ':LKJAFDSJHDUGIYQE(*&DFJHA&JADS)',
    resave: false,
    saveUninitialized: false,
}));

// This is a middleware function that is allowed to multiple routes.
// This function prints the request method with its URL in the console.
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}.`);
    next();
});

// Configuring your Express application to use the routes defined in the playersRoute module.
// The app.use() function is used to mount middleware,
// and in this case, it's mounting the routes defined in playersRoute.
// By using app.use(playersRoute), you're saying that any incoming requests to your application
// should be checked against the routes defined in the playersRoute module. If a route in playersRoute
// matches the incoming request, the corresponding route handler in playersRoute will be executed.
// We add the prefix '/api' before our router path.
app.use('/api/v1/players', playersRoute);
app.use('/api/v1/clubs', clubsRoute);       // Another example using another router.
app.use('/api/v1/auth', authRoute);       // Another example using another router.

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
});

app.listen(PORT, () => { console.log(`Running Express server on port ${PORT}!`) });