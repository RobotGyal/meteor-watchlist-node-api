const express = require('express')
const router = express.Router()
const Meteor = require('../models/meteor')
const r_file = require('../utils/read-file')


// HOME - Gets all meteor data and displays watchlist
router.get('/', async (req, res) => {
    // res.send(r_file.data)
    // console.log("Converted!")
    try {
        const meteors = await Meteor.find()
        res.json(meteors)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});
// ADD one meteor to watchlist
router.get('/add', (req, res) => {
    // var meteor = new Meteor(req.body)
    res.render('add-meteor')
});

// ADD one meteor to watchlist
router.post('/add', (req, res) => {
    // var meteor = new Meteor(req.body)
    // res.render('add-meteor')
});


router.get('/all', (req, res) => {
    res.send(r_file.data)
})

// VIEW one meteor
router.get('/:meteor', (req, res) => {
    console.log("VIEW ROUTE")
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