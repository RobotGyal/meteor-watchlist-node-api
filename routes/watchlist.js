const express = require('express')
const router = express.Router()
const Meteor = require('../models/meteor')
var bodyParser = require('body-parser')

const r_file = require('../utils/read-file')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// HOME - Gets all meteor data and displays watchlist
router.get('/', async (req, res) => {
    // res.send(r_file.data)
    // console.log("Converted!")
    try{
        const meteors = await Meteor.find()
        res.json(meteors)
    } catch(err){
        res.status(500).json({ message: err.message })
    }
});

// VIEW one meteor
router.get('/:meteor', (req, res) => {
    console.log("VIEW ROUTE")
});

// ADD one meteor to watchlist
router.post('/add', urlencodedParser, function (req, res) => {
    // const meteor = new Meteor({
    //     name: req.body.name,
    //     id: req.body.id,
    //     nametype: req.body.nametype,
    //     class: req.body.class,
    //     mass: req.body.mass,
    //     fall: req.body.fall,
    //     year: req.body.year
    // })
    res.send("hello" + req.body.name )
    try{
        const newMeteor = await meteor.save()
        res.status(201).json(newMeteor)
      } catch (err) {
        res.status(400).json({ message: err.message })
    }
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