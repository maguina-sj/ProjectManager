const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost/projects-db"
const dbName = 'projects-db'
mongoose.connect(mongoURI + dbName)
    .then(() => console.log(`Connected to the ${dbName}`))
    .catch((err) => console.log(`ERROR IN CONNECTING TO DB`, err) );