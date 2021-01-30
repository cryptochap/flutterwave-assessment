require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port || 3000;
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const me = require('./routes/me')
app.use('/', me)

app.listen(port, () => console.log('Server Started'))