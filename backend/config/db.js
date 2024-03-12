const mongoose = require('mongoose');
const conneectDatabase = "mongodb+srv://atuldwivedi859:CTPO3U4XCpeLusS8@cluster0.y3bgp11.mongodb.net/e-commerce?retryWrites=true&w=majority";

const connection = mongoose.connect(conneectDatabase);

module.exports = connection;