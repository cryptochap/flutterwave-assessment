const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port || 3000;
const mongoose = require('mongoose')


mongoose.connect(
    process.env.DATABASE_URL,
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

app.use(express.json())

const myDetails = require('./routes/mockDetails')
app.use('/', myDetails)

app.listen(port, () => console.log('Server Started'))