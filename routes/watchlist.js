const express = require('express')
const router = express.Router()
const r_file = require('../utils/read-file')


// HOME - Gets all meteor data and displays watchlist
router.get('/', (req, res) => {
    res.send(r_file.data)
    console.log("Converted!")
});

// VIEW one meteor
router.get('/:meteor', (req, res) => {
    console.log("VIEW ROUTE")
});

// ADD one meteor to watchlist
router.post('/:meteor/add', (req, res) => {
    console.log("POST ROUTE")
});


router.patch('/:meteor/edit', (req, res) => {
    console.log("PATCH ROUTE")
});

router.delete('/:meteor/delete', (req, res) => {
    console.log("DELETE ROUTE")
});

// VIEW meteors in a location
// LATER
router.get('/:city', (req, res) => {
    console.log("VIEW ROUTE")
});

// VIEW meteors in a location radius
// LATER
router.get('/:city/:radius', (req, res) => {
    console.log("VIEW ROUTE")
});

module.exports = router