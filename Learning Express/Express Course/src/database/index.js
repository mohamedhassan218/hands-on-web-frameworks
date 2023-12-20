const mongoose = require('mongoose');
require('dotenv').config();
mongoose
    .connect(process.env.DB_STRING)
    .then(() => { console.log('Connected to the database successfully.'); })
    .catch((err) => { console.log(err); });