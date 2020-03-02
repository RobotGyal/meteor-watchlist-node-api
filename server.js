// Requirements
require('dotenv').config()

const express = require('express')
const r_file = require('./utils/read-file')
const app = express();
const mongoose = require('mongoose')


// Database - Mongoose 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// data_json = JSON.stringify(r_file.data)

// HOME - Gets all meteor data and displays watchlist
app.get('/', (req, res) => {
    res.send(r_file.data)
    console.log("Converted!")
});

// VIEW one meteor
app.get('/:meteor', (req, res) => {
    console.log("VIEW ROUTE")
});

// ADD one meteor to watchlist
app.post('/:meteor/add', (req, res) => {
    console.log("POST ROUTE")
});


app.patch('/:meteor/edit', (req, res) => {
    console.log("PATCH ROUTE")
});

app.delete('/:meteor/delete', (req, res) => {
    console.log("DELETE ROUTE")
});

// VIEW meteors in a location
// LATER
app.get('/:city', (req, res) => {
    console.log("VIEW ROUTE")
});

// VIEW meteors in a location radius
// LATER
app.get('/:city/:radius', (req, res) => {
    console.log("VIEW ROUTE")
});






app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});