const express = require('express')
const router = express.Router()
const r_file = require('../utils/read-file')


// HOME - Gets all meteor data and displays watchlist
router.get('/', (req, res) => {
    res.send(r_file.data)
    console.log("Converted!")
});

module.exports = router