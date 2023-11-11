const users = [];
const express = require('express');
//import express from 'express';  this line do the same thing.

// Create new express application.
const app = express();

// Middleware to transform the data comming from the request to json format.
// Body parser, to transform any body comming to JSON form.
app.use(express.json());

// Using app, we can now specify our end points (HTTP Methods).
// Our end points are:
// PUT
// GET: retrieve data.
app.get('/users', (req, res) => {
    if (users.length == 0) {
        res.status(404).send(`I've not found any users :(`);
        return;
    }
    res.status(200).send(users);
});
app.get('/hello', (req, res) => {
    res.send('Hello Express :)');
});
app.get('/', (req, res) => {
    res.send('Welcome in home page :)')
});

// POST: create data.
app.post('/users', (req, res) => {
    //console.log(req.body);   Just for debuging.
    const user = req.body;
    const ifFindUsr = users.find((x) => x.id === user.id);
    if (ifFindUsr) {
        res.status(400).send(`User already exist :]`);
        return;
    }
    users.push(req.body);
    res.status(201).send('Created Successfully!');
});

// DELETE: delete data.
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const foundUsr = users.findIndex((x) => x.id == id);
    if (foundUsr == -1) {
        res.status(400).send('User are not found :( ');
        return;
    }
    users.splice(foundUsr, 1);
    res.status(200).send('User deleted successfully :) ');
});

// Your app begin listening on the specified port number.
app.listen(4000, () => {
    console.log("I'm listening on port 4000 . . . !");
});