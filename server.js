// Requirements
require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const exhdbs = require('express-handlebars')


app.engine('handlebars', exhdbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Database - Watchlist
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database 1 connected : Watchlist'))

// //Databse - Meteors from dataset
// const tester = mongoose.connection
// tester.on('error', (error) => console.error(error))
// tester.once('open', () => console.log('Database 2 connected : Dataset Meteors'))

// Middleware - express
app.use(express.json())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})



const watchlistRouter = require('./controllers/watchlist')
app.use('/watchlist', watchlistRouter)

app.get('/', (req, res) => {
    res.send("Homepage")
});



app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});