const { Router } = require('express');
const User = require('../database/schemas/User');
const { hashPassword, comparePassword } = require('../utils/helpers');

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ msg: 'Email and password are required' });
    }
    const userDB = await User.findOne({ email });
    if (!userDB) {
        return res.status(401).send({ msg: 'User not found' });
    }
    const isValid = comparePassword(password, userDB.password);
    if (isValid) {
        console.log('Authenticated Successfully.');
        req.session.user = userDB;
        return res.sendStatus(200);
    } else {
        console.log('Failed to Authenticate.');
        return res.sendStatus(401);
    }
});

router.post('/register', async (req, res) => {
    const { password, email } = req.body;
    const userDB = await User.findOne({ email });
    if (userDB) {
        res.status(400).send({ msg: 'User already exist' });
    } else {
        const hashedPassword = hashPassword(password);
        console.log(hashedPassword);      // Just for test.
        const newUser = await User.create({ password: hashedPassword, email });
        res.status(201).send({ msg: 'User Created Successfully.' });
    }
});

module.exports = router;