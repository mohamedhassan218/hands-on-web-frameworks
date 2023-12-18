const { Router } = require('express');
const User = require('../database/schemas/User');
const { hashPassword } = require('../utils/helpers');

const router = Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        if (req.session.user) {
            res.send(req.session.user);
        } else {
            req.session.user = { username };
            res.send(req.session);
        }
    } else {
        res.send(400);
    }
});

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    // This will return a document from the database if we found a document
    // based on the username or the email.
    const userDB = await User.findOne({ $or: [{ username }, { email }] });
    if (userDB) {
        res.status(400).send({ msg: 'User already exist' });
    } else {
        const hashedPassword = hashPassword(password);
        console.log(hashedPassword);      // Just for test.
        const newUser = await User.create({ username, password: hashedPassword, email });
        res.status(201).send({ msg: 'User Created Successfully.' });
    }
});

module.exports = router;