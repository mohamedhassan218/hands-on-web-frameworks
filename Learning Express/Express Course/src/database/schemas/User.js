const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    createdAt: {
        type: mongoose.Schema.Types.Date,
        required: true,
        default: new Date(),
    }
});

module.exports = mongoose.model('users', UserSchema);