const bcrypt = require('bcryptjs');
require('dotenv').config()

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(process.env.SALT_ROUNDS);
    return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword,
};