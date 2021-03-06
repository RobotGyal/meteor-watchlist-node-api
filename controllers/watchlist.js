const express = require('express')
const router = express.Router()
const Meteor = require('../models/meteor')
const r_file = require('../utils/read-file')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Displays entire watchlist
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

// Create one meteor
router.post('/add', async (req, res) => {
    const meteor = new Meteor({
      name: req.body.name,
      id: req.body.id,
      nametype: req.body.nametype,
      class: req.body.class,
      mass: req.body.mass,
      fall: req.body.fall,
      year: req.body.year
    })
  
    try {
      const newMeteor = await meteor.save()
      res.status(201).json(newMeteor)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

/* Displays all meteors in the meteor database.
This data comes from the actual dataset
can be viewed but not edited or deleted */
router.get('/all', (req, res) => {
    res.send(r_file.data)
})

// VIEW one meteor
router.get('/:id', getMeteor, (req, res) => {
    // console.log("VIEW ROUTE")
    res.json(res.meteor)
});



router.patch('/edit/:id', getMeteor, async (req, res) => {
    if (req.body.name != null) {
        res.meteor.name = req.body.name
    }
    if (req.body.class != null) {
        res.meteor.class = req.body.class
    }
    try {
        const updatedMeteor = await res.meteor.save()
        res.json(updatedMeteor)
    } catch {
        res.status(400).json({ message: err.message })
    }
}); 


// Delete a meteor from watchlist
router.delete('/delete/:id', getMeteor, async (req, res) => {
    try {
      await res.meteor.remove()
      res.json({ message: 'Meteor has been deleted' })
    } catch(err) {
      res.status(500).json({ message: err.message })
    }
  })



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Helper Function

async function getMeteor(req, res, next) {
    try {
      meteor = await Meteor.findById(req.params.id)
      if (meteor == null) {
        return res.status(404).json({ message: 'Meteor does not exist'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
    res.meteor = meteor
    next()
  }

module.exports = router