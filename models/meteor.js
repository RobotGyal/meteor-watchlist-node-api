const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meteorSchema = new Schema({
    name: {type: String, required:true},
    id: {type: Number, required:true},
    nametype: {type: String, required:true},
    class: {type: String, required:true},
    mass: {type: mongoose.Types.Decimal128, required:true},
    fall: {type: Boolean, required:true},
    year: {type: Date, required:true},
    lat: {type: mongoose.Types.Decimal128, required:false},
    long: {type: mongoose.Types.Decimal128, required:false},
    geolocation: {type: Object, required:false}
})

module.exports = mongoose.model('Meteor', meteorSchema)