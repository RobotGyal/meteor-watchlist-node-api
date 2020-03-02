const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Meteor = this.model.Meteor

const watchlistSchema = new Schema({
    meteors
})

module.exports = mongoose.model('Watchlist', watchlistSchema)