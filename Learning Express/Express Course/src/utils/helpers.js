const bcrypt = require('bcryptjs');
require('dotenv').config()

function hashPassword(password) {
    // const slt = process.env.SALT_ROUNDS;
    const salt = bcrypt.genSaltSync(15);
    return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword,
};