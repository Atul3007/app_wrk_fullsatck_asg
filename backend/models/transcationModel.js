const mongoose = require('mongoose');

const transcationSchema = new mongoose.Schema({
    description : String,
    credit : Number,
    debit : Number,
    runningBalance : Number,
    date : {type: Date, default: Date.now}
},{timestamps: true})

const transModel = mongoose.model("app_wrk", transcationSchema);

module.exports = transModel;