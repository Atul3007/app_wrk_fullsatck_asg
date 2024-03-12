const express = require('express');
const connection = require('./config/db');
const cors = require('cors');
const router = require('./routes/transRoute');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(
    cors()
);

const port = process.env.PORT ;

app.get('/',(req,res)=>{
    try {
        res.send("Welcome to office transcation management app!!!")
    } catch (error) {
        res.send("Error")
    }
})

app.use("/api",router);

app.listen(port,async()=>{
    try {
        await connection
        console.log(`connected to database and ${port} port`)
    } catch (error) {
        console.log("Error Occurred!!!")
    }
});